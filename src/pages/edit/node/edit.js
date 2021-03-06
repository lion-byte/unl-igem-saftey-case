import * as React from 'react'
import { navigate, Link } from '@reach/router'
import { compose, graphql } from 'react-apollo'

import { Graph, Input } from '../../../components'
import { UPDATE_NODE_MUTATION, NODE_QUERY } from '../../../queries'
import { sleep } from '../../../utils'

export class ModifyNodePresentation extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      init: false,
      info: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /**
   * Used to initialize the state with the fetched data
   * @param {any} info
   */
  async singleCall (info) {
    if (this.state.init) {
      return
    }

    await sleep()

    this.setState({ init: true, info })
  }

  handleChange (event) {
    const {
      target: { name, value }
    } = event

    const numVal = Number.parseInt(value)

    this.setState(prevState => ({
      info: {
        ...prevState.info,
        [name]: Number.isNaN(numVal) ? value : numVal
      }
    }))
  }

  /**
   * @param {React.FormEvent<HTMLFormElement>} event
   */
  async handleSubmit (event) {
    event.preventDefault()

    const {
      props: { updateNode },
      state: { info }
    } = this

    if (info === null) {
      return
    }

    const { id, name, statement, height, width } = info

    if (name.trim() === '' || statement.trim() === '') {
      return
    }

    try {
      const {
        data: { updateNode: updated }
      } = await updateNode({
        variables: { id, name, statement, height, width }
      })

      if (updated) {
        navigate(`/view/node/${id}`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const {
      props: {
        data: { loading, error, node }
      },
      state: { init, info }
    } = this

    if (loading) {
      return <h2>Loading...</h2>
    } else if (error || !node) {
      return null
    } else if (!init) {
      this.singleCall(node)

      return null
    } else {
      const { name, statement, height, width } = info

      return (
        <React.Fragment>
          <section className='flex one two-1200'>
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <Input
                  label='Name'
                  name='name'
                  type='text'
                  onChange={this.handleChange}
                  value={name}
                />

                <Input
                  label='Statement'
                  name='statement'
                  type='textarea'
                  onChange={this.handleChange}
                  value={statement}
                />
              </fieldset>

              <fieldset>
                <Input
                  label='Height'
                  name='height'
                  type='number'
                  onChange={this.handleChange}
                  value={height}
                  min={40}
                  step={5}
                />

                <Input
                  label='Width'
                  name='width'
                  type='number'
                  onChange={this.handleChange}
                  value={width}
                  min={50}
                  step={5}
                />
              </fieldset>

              <button>Save</button>

              <Link className='pseudo button' to={`/view/node/${info.id}`}>
                Cancel
              </Link>
            </form>

            <section>
              <Graph
                data={{ ...info, children: null }}
                height={height + 160}
                width={width + 120}
                middle
                style={{ height: undefined }}
              />
            </section>
          </section>
        </React.Fragment>
      )
    }
  }
}

export const ModifyNode = compose(
  graphql(UPDATE_NODE_MUTATION, { name: 'updateNode' }),
  graphql(NODE_QUERY, {
    options: props => ({
      fetchPolicy: 'network-only',
      // @ts-ignore
      variables: { id: props.id }
    })
  })
)(ModifyNodePresentation)

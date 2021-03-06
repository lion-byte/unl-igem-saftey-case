import * as React from 'react'
import { navigate, Link } from '@reach/router'
import { graphql } from 'react-apollo'

import { Graph, Input } from '../../../components'
import { fetchFullDiagram } from '../../../diagram'
import { UPDATE_DIAGRAM_MUTATION } from '../../../queries'

export class ModifyDiagramPresentation extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      error: null,
      diagram: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount () {
    const { id } = this.props

    if (!id) {
      return
    }

    this.setState({ loading: true, error: null })

    try {
      const diagram = await fetchFullDiagram(id)

      this.setState({ loading: false, diagram })
    } catch (error) {
      this.setState({ loading: false, error })
      console.error(error)
    }
  }

  /**
   * @param {React.FormEvent<HTMLFormElement>} event
   */
  async handleSubmit (event) {
    event.preventDefault()

    const {
      props: { updateDiagram },
      state: { diagram }
    } = this

    if (diagram === null) {
      return
    }

    const { id, title, description, height, width } = diagram

    if (title.trim() === '' || description.trim() === '') {
      return
    }

    try {
      const {
        data: { updateDiagram: updated }
      } = await updateDiagram({
        variables: { id, title, description, height, width }
      })

      if (updated) {
        navigate(`/view/diagram/${id}`)
      }
    } catch (error) {
      this.setState({ error })
      console.error(error)
    }
  }

  handleChange (event) {
    const {
      target: { name, value }
    } = event

    const numVal = Number.parseInt(value)

    this.setState(prevState => ({
      diagram: {
        ...prevState.diagram,
        [name]: Number.isNaN(numVal) ? value : numVal
      }
    }))
  }

  render () {
    const {
      state: { loading, error, diagram }
    } = this

    if (loading) {
      return <h2>Loading...</h2>
    } else if (error || diagram === null || diagram.rootGoal === null) {
      return null
    } else {
      const { title, description, rootGoal, height, width } = diagram

      return (
        <div className='flex one two-1200'>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <Input
                label='Title'
                name='title'
                type='text'
                onChange={this.handleChange}
                value={title}
              />

              <Input
                label='Description'
                type='textarea'
                name='description'
                onChange={this.handleChange}
                value={description}
              />
            </fieldset>

            <hr />

            <fieldset>
              <Input
                label='Height'
                type='number'
                name='height'
                onChange={this.handleChange}
                min={200}
                step={10}
                value={height}
              />

              <Input
                label='Width'
                type='number'
                name='width'
                onChange={this.handleChange}
                min={250}
                step={10}
                value={width}
              />
            </fieldset>

            <button>Save</button>

            <Link className='pseudo button' to={`/view/diagram/${diagram.id}`}>
              Cancel
            </Link>
          </form>

          <section>
            <Graph
              title={title}
              description={description}
              data={rootGoal}
              height={height}
              width={width}
            />
          </section>
        </div>
      )
    }
  }
}

export const ModifyDiagram = graphql(UPDATE_DIAGRAM_MUTATION, {
  name: 'updateDiagram'
})(ModifyDiagramPresentation)

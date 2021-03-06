import * as React from 'react'
import * as PropTypes from 'prop-types'

import { MultiLineText } from '../multiLineText'

export class JustificationNode extends React.PureComponent {
  render () {
    const {
      fontSize,
      node: {
        data: { name, statement, height = 80, width = 160 }
      }
    } = this.props

    return (
      <React.Fragment>
        <ellipse
          fill='#afd456'
          stroke='#ffffff'
          rx={width / 2}
          ry={height / 2}
          strokeWidth={1}
        />

        <text
          style={{ pointerEvents: 'none' }}
          textAnchor='middle'
          fill='black'
          fontSize={fontSize}
          fontWeight='bold'
          x={0}
          y={-height / 3 + fontSize}
        >
          {name}
        </text>

        <text
          style={{ pointerEvents: 'none' }}
          textAnchor='middle'
          fill='black'
          fontSize={fontSize}
          x={0}
          y={-height / 3 + 2.5 * fontSize}
        >
          <MultiLineText text={statement} x={0} dy={fontSize} />
        </text>
      </React.Fragment>
    )
  }
}

JustificationNode.propTypes = {
  fontSize: PropTypes.number,
  node: PropTypes.any.isRequired
}

JustificationNode.defaultProps = {
  fontSize: 16
}

import React from 'react'
import PropTypes from 'prop-types'

import Box from '../../../../packages/Box/Box'
import Heading from '../../../../packages/Heading/Heading'

const IconTable = ({ icons, heading }) => (
  <Box between={3}>
    <Heading level="h3">{heading}</Heading>
    <table className="docs_svgicon-table">
      <colgroup>
        <col width="33%" />
        <col width="33%" />
        <col width="33%" />
      </colgroup>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Icon</th>
          <th>Usage Criteria</th>
        </tr>
      </thead>
      <tbody>
        {icons.map(icon => (
          <tr key={icon.name}>
            <td>{icon.name}</td>
            <td>
              <icon.Component />
            </td>
            <td>{icon.usageCriteria}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Box>
)

IconTable.propTypes = {
  heading: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired,
}

export default IconTable

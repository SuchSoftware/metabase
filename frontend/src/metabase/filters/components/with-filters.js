import { connect } from 'react-redux'
import hoistStatics from 'hoist-non-react-statics'
import React from 'react'

function withFilters(Component) {
    const C = props => {
      return <Component filters={ props.filters } { ...props } />
    }

    C.displayName = `withFilters(${ Component.displayName || Component.name }`;

    const mapStateToProps = state => ({
        filterData: cols => row => state.filters.reduce(
            (memo, f) => {
                // get the column index for the filters
                const filterColIndex = cols.findIndex(c => {
                  let tableId
                  let key

                  if (c.target) {
                    tableId = c.target.table_id
                    key = c.target.name
                  } else {
                    tableId = c.table_id
                    key = c.name
                  }

                  return tableId == f.tableId && key === f.key
                })

                return memo && row[filterColIndex] === f.value
            },
            true
        )
    })

    const mapDispatchToProps = dispatch => ({
        addFilter: (col, value) => {
          let tableId
          let key

          console.log('add', col, value)

          if (col.target) {
            tableId = col.target.table_id
            key = col.target.name
          } else {
            tableId = col.table_id
            key = col.name
          }

          return dispatch({
            type: 'filters/add',
            filter: { tableId, key, value }
          })
        }
    })

    const withHoistedStatics = hoistStatics(C, Component)

    return connect(mapStateToProps, mapDispatchToProps)(withHoistedStatics)
}


export default withFilters


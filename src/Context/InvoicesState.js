import { useReducer } from 'react'
import InvoicesContext from './InvoicesContext'
import InvoicesReducer from './InvoicesReducer'
import invoices from './data'

const InvoicesState = (props) => {
  const initialState = {
    invoices: [],
    range: 'diciembre',
    filterAction: false
  }

  const [state, dispatch] = useReducer(InvoicesReducer, initialState)

  const getInvoices = () => {
    dispatch({
      type: 'GET_INVOICES',
      payload: invoices,
      range: 'diciembre'
    })
  }

  const filterInvoices = (filterCriteria) => {
    dispatch({
      type: 'FILTER_INVOICES',
      payload: invoices
    })
  }

  return (
    <InvoicesContext.Provider value={{
      invoices: state.invoices,
      range: state.range,
      getInvoices,
      filterInvoices
    }}
    >
      {props.children}
    </InvoicesContext.Provider>
  )
}

export default InvoicesState

/* eslint-disable-next-line no-unused-vars */
import { GET_INVOICES, FILTER_INVOICES, SET_RANGE } from './types'

export default (state, action) => {
  const { payload, range, type } = action

  switch (type) {
    case GET_INVOICES:
      return {
        ...state,
        invoices: payload
      }
    case FILTER_INVOICES:
      return {
        ...state,
        invoices: payload.filter
      }
    case SET_RANGE:
      return {
        ...state,
        range: range
      }
    default:
      return state
  }
}

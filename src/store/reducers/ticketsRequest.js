/* eslint-disable indent */
const initialState = { tickets: [], stop: false, loaded: false, error: false }

// eslint-disable-next-line default-param-last
const ticketsRequest = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TICKETS_REQUEST':
      return { ...state, loaded: false, error: false }
    case 'FETCH_TICKETS_SUCCESS':
      return {
        ...state,
        tickets: action.payload.tickets,
        stop: action.payload.stop,
        loaded: true,
        error: false,
      }
    case 'FETCH_TICKETS_FAILURE':
      return { ...state, loaded: true, error: true }
    default:
      return state
  }
}

export default ticketsRequest

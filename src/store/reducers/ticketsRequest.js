const initialState = {
  tickets: [],
  stop: false,
  loaded: false,
  error: null,
}

const ticketsRequest = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TICKETS_REQUEST':
      return {
        ...state,
        loaded: false,
        error: null,
      }
    case 'FETCH_TICKETS_SUCCESS_PARTIAL':
    case 'FETCH_TICKETS_SUCCESS':
      return {
        tickets: state.tickets.concat(action.payload),
        loaded: true,
        stop: action.type === 'FETCH_TICKETS_SUCCESS',
        error: null,
      }
    case 'FETCH_TICKETS_FAILURE':
      return {
        ...state,
        loaded: true,
        error: action.err,
      }
    default:
      return state
  }
}

export default ticketsRequest

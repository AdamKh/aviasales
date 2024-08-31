import AviasalesService from '../../services/aviasalesServices'

const aviasalesService = new AviasalesService()

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_WITHOUT_STOPS: 'SHOW_WITHOUT_STOPS',
  SHOW_ONE_STOPS: 'SHOW_ONE_STOPS',
  SHOW_TWO_STOPS: 'SHOW_TWO_STOPS',
  SHOW_THREE_STOPS: 'SHOW_THREE_STOPS',
}

export const SortFilters = {
  CHEAPEST: 'CHEAPEST',
  FASTEST: 'FASTEST',
  OPTIMAL: 'OPTIMAL',
}

export const TicketsActions = {
  FETCH_TICKETS_REQUEST: 'FETCH_TICKETS_REQUEST',
  FETCH_TICKETS_SUCCESS: 'FETCH_TICKETS_SUCCESS',
  FETCH_TICKETS_FAILURE: 'FETCH_TICKETS_FAILURE',
}

export const setVisibilityFilter = (filter) => ({
  type: filter,
})

export const setSortFilter = (filter) => ({
  type: 'SET_SORT_FILTER',
  filter,
})

export const setTicketsRequest = () => async (dispatch) => {
  dispatch({ type: 'FETCH_TICKETS_REQUEST' })

  const fetchAllTickets = async () => {
    try {
      const res = await aviasalesService.getTicketsList()

      // Отправляем частично загруженные данные в стор
      dispatch({ type: 'FETCH_TICKETS_SUCCESS_PARTIAL', payload: res.tickets })

      // Если есть еще билеты, продолжаем загружать
      if (!res.stop) {
        fetchAllTickets()
      } else {
        // Все билеты загружены
        dispatch({ type: 'FETCH_TICKETS_SUCCESS', payload: res.tickets })
      }
    } catch (err) {
      if (err.message.includes(500)) {
        fetchAllTickets()
      } else {
        dispatch({ type: 'FETCH_TICKETS_FAILURE', err: err.message })
      }
    }
  }

  // Начинаем рекурсивную загрузку
  fetchAllTickets()
}

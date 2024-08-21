/* eslint-disable indent */
const initialState = ['SHOW_ALL', 'SHOW_WITHOUT_STOPS', 'SHOW_ONE_STOPS', 'SHOW_TWO_STOPS', 'SHOW_THREE_STOPS']

// Вспомогательная функция для обновления состояния "SHOW_ALL"
const updateAllState = (state) => {
  const allFilters = ['SHOW_WITHOUT_STOPS', 'SHOW_ONE_STOPS', 'SHOW_TWO_STOPS', 'SHOW_THREE_STOPS']
  let updatedState = [...state]

  if (allFilters.every((filter) => updatedState.includes(filter))) {
    updatedState.push('SHOW_ALL')
  } else {
    updatedState = updatedState.filter((filter) => filter !== 'SHOW_ALL')
  }

  return updatedState
}

// eslint-disable-next-line default-param-last
const visibilityFilter = (state = initialState, action) => {
  let newState = [...state] // Создаем копию состояния в виде массива

  switch (action.type) {
    case 'SHOW_ALL': {
      if (newState.includes('SHOW_ALL')) {
        return [] // Возвращаем новый пустой массив
      }
      return ['SHOW_ALL', 'SHOW_WITHOUT_STOPS', 'SHOW_ONE_STOPS', 'SHOW_TWO_STOPS', 'SHOW_THREE_STOPS']
    }
    case 'SHOW_WITHOUT_STOPS': {
      if (newState.includes('SHOW_WITHOUT_STOPS')) {
        newState = newState.filter((filter) => filter !== 'SHOW_WITHOUT_STOPS')
      } else {
        newState.push('SHOW_WITHOUT_STOPS')
      }
      return updateAllState(newState)
    }
    case 'SHOW_ONE_STOPS': {
      if (newState.includes('SHOW_ONE_STOPS')) {
        newState = newState.filter((filter) => filter !== 'SHOW_ONE_STOPS')
      } else {
        newState.push('SHOW_ONE_STOPS')
      }
      return updateAllState(newState)
    }
    case 'SHOW_TWO_STOPS': {
      if (newState.includes('SHOW_TWO_STOPS')) {
        newState = newState.filter((filter) => filter !== 'SHOW_TWO_STOPS')
      } else {
        newState.push('SHOW_TWO_STOPS')
      }
      return updateAllState(newState)
    }
    case 'SHOW_THREE_STOPS': {
      if (newState.includes('SHOW_THREE_STOPS')) {
        newState = newState.filter((filter) => filter !== 'SHOW_THREE_STOPS')
      } else {
        newState.push('SHOW_THREE_STOPS')
      }
      return updateAllState(newState)
    }
    default:
      return state
  }
}

export default visibilityFilter

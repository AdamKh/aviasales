import { add, format } from 'date-fns'

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

function formatTimeRange(startDate, durationInMinutes) {
  const endDate = add(startDate, { minutes: durationInMinutes })
  const formattedStartTime = format(startDate, 'HH:mm')
  const formattedEndTime = format(endDate, 'HH:mm')
  return `${formattedStartTime} – ${formattedEndTime}`
}

function formatDate(minutes) {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  const result = `${hours}ч ${remainingMinutes}м`

  return result
}

function sortTickets(tickets, sortFilter) {
  const getDuration = (ticket) => ticket.segments.reduce((acc, segment) => acc + segment.duration, 0)

  switch (sortFilter) {
    case 'CHEAPEST':
      return tickets.toSorted((a, b) => a.price - b.price)

    case 'FASTEST':
      return tickets.toSorted((a, b) => getDuration(a) - getDuration(b))

    case 'OPTIMAL':
      return tickets.toSorted((a, b) => {
        const aDuration = getDuration(a)
        const bDuration = getDuration(b)

        const aScore = a.price * 0.7 + aDuration * 0.3
        const bScore = b.price * 0.7 + bDuration * 0.3

        return aScore - bScore
      })

    default:
      return tickets
  }
}

function visibleFilter(ticketsList, filter) {
  if (filter.includes('SHOW_ALL')) {
    return ticketsList
  }

  const filterConditions = {
    SHOW_ONE_STOPS: (segment) => segment.stops.length === 1,
    SHOW_TWO_STOPS: (segment) => segment.stops.length === 2,
    SHOW_THREE_STOPS: (segment) => segment.stops.length === 3,
    SHOW_WITHOUT_STOPS: (segment) => segment.stops.length === 0,
  }

  const activeFilters = filter.map((f) => filterConditions[f]).filter(Boolean)

  return ticketsList.filter((ticket) => activeFilters.some((check) => ticket.segments.every(check)))
}

export { formatPrice, formatTimeRange, formatDate, sortTickets, visibleFilter }

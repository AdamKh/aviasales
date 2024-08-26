/* eslint-disable indent */
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
  switch (sortFilter) {
    case 'CHEAPEST':
      return tickets.slice().sort((a, b) => a.price - b.price)
    case 'FASTEST':
      return tickets.slice().sort((a, b) => {
        const aDuration = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
        const bDuration = b.segments.reduce((acc, segment) => acc + segment.duration, 0)
        return aDuration - bDuration
      })
    case 'OPTIMAL':
      return tickets.slice().sort((a, b) => {
        const aDuration = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
        const bDuration = b.segments.reduce((acc, segment) => acc + segment.duration, 0)

        // вес цены 0.3, длительности 0.7
        const aScore = a.price * 0.7 + aDuration * 0.3
        const bScore = b.price * 0.7 + bDuration * 0.3

        return aScore - bScore
      })
    default:
      return tickets
  }
}

// eslint-disable-next-line import/prefer-default-export
export { formatPrice, formatTimeRange, formatDate, sortTickets }

import { add, format } from 'date-fns'

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

// eslint-disable-next-line import/prefer-default-export
export { formatTimeRange, formatDate }

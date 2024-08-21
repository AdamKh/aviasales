function formatDate(minutes) {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  const result = `${hours}ч ${remainingMinutes}м`

  return result
}

// eslint-disable-next-line import/prefer-default-export
export { formatDate }

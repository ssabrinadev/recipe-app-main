export const formatDMY = (date?: string | number | Date, toISO = false) => {
  if (date === undefined || date === '') {
    return undefined
  }
  const formattedDate = new Date(date)

  const day = formattedDate.getDate()
  const month = formattedDate.getMonth() + 1
  const year = formattedDate.getFullYear()

  if (toISO) {
    return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`
  }

  return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year}`
}

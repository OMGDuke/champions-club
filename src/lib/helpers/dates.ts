export function getDaysBetween(date1: Date, date2: Date): number {
  const time1 = date1.getTime()
  const time2 = date2.getTime()

  // Calculate the number of milliseconds in a day
  const oneDay = 1000 * 60 * 60 * 24

  // Calculate the difference in days, rounding to the nearest whole number
  const daysDifference = Math.round(Math.abs((time2 - time1) / oneDay))

  return daysDifference
}

export function formatDate(dateString: string) {
  const date = new Date(dateString)

  let day: number | string = date.getUTCDate()
  let month: number | string = date.getUTCMonth() + 1
  const year = date.getUTCFullYear()

  if (day < 10) {
    day = '0' + day
  }
  if (month < 10) {
    month = '0' + month
  }

  const formattedDate = day + '/' + month + '/' + year
  return formattedDate
}

export function calculateTimeRemaining(
  startDate: Date,
  endDate: Date
): string | null {
  const currentDate = new Date()

  if (currentDate >= startDate && currentDate <= endDate) {
    const timeDiff = endDate.getTime() - currentDate.getTime()
    const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    const hoursRemaining = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutesRemaining = Math.floor(
      (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
    )

    if (daysRemaining > 0) {
      return `${daysRemaining} day(s) remaining`
    } else if (hoursRemaining > 0) {
      return `${hoursRemaining} hour(s) remaining`
    } else {
      return `${minutesRemaining} minute(s) remaining`
    }
  }

  return null
}

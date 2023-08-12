export function getMaxDaysInMonth(month: number, year: number): number {
  // we just need to get the last day of the month and return it
  // 2020 is used as the year because it is a leap year
  return new Date(year, month, 0).getDate()
}

export function getLeapYearsBetween(
  startYear: number,
  endYear: number
): number[] {
  const leapYears = []

  for (let year = startYear; year <= endYear; year++) {
    if (isLeapYear(year)) {
      leapYears.push(year)
    }
  }

  return leapYears
}

export function isLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

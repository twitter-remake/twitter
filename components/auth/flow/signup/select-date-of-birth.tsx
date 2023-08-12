'use client'
import { Select, SelectItem } from '@/components/ui/select'
import { getLeapYearsBetween, getMaxDaysInMonth } from '@/lib/date'
import { useMemo, useState } from 'react'

const months = [
  { value: '1', label: 'January' },
  { value: '2', label: 'February' },
  { value: '3', label: 'March' },
  { value: '4', label: 'April' },
  { value: '5', label: 'May' },
  { value: '6', label: 'June' },
  { value: '7', label: 'July' },
  { value: '8', label: 'August' },
  { value: '9', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
]

export const SelectDateOfBirth = () => {
  const [selectedMonth, setSelectedMonth] = useState(months[0].value)
  const [selectedDay, setSelectedDay] = useState('')
  const [selectedYear, setSelectedYear] = useState('')

  const days = useMemo(() => {
    // get max days in month while accounting for leap years (2020 as base leap year)
    const list = Array.from(
      Array(
        getMaxDaysInMonth(Number(selectedMonth), Number(selectedYear) || 2020)
      ).keys()
    )

    return list
      .map((day) => day + 1)
      .map((day) => ({
        value: day.toString(),
        label: day.toString(),
      }))
  }, [selectedMonth, selectedYear])

  const years = useMemo(() => {
    const currentYear = new Date().getFullYear()
    let list = []

    // return leap years for February 29 selection
    if (selectedMonth === '2' && selectedDay === '29') {
      list = getLeapYearsBetween(1900, currentYear)
    } else {
      list = Array.from(Array(100).keys()).map(
        (year) => year + currentYear - 100
      )
    }

    return list.reverse().map((year) => ({
      value: year.toString(),
      label: year.toString(),
    }))
  }, [selectedMonth, selectedDay])

  return (
    <div className="w-full flex flex-row space-x-4">
      <div className="flex-grow-[2]">
        <Select
          placeholder="Month"
          onValueChange={(month) => setSelectedMonth(month)}
          value={selectedMonth}
        >
          {months.map((month) => (
            <SelectItem key={month.value} value={month.value}>
              {month.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex-grow">
        <Select
          placeholder="Day"
          onValueChange={(value) => setSelectedDay(value)}
          value={selectedDay}
        >
          {days.map((day) => (
            <SelectItem key={day.value} value={day.value}>
              {day.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex-grow">
        <Select
          placeholder="Year"
          onValueChange={(value) => setSelectedYear(value)}
          value={selectedYear}
        >
          {years.map((year) => (
            <SelectItem key={year.value} value={year.value}>
              {year.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'

type DateTimeFormat = { day: string; time: string; seconds?: string }

const formatter = (
  date: Date = new Date(),
  locale = 'en-US'
): DateTimeFormat => {
  const dayFormatter = new Intl.DateTimeFormat(locale, { weekday: 'short' })
  const timeFormatter = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: '2-digit',
  })
  return { day: dayFormatter.format(date), time: timeFormatter.format(date) }
}

export const DateTime: React.FC = () => {
  function dateTimeStringFormat({ day, time }: DateTimeFormat): string {
    return `${day} ${time}`
  }

  const [dateTimeStr, setDateTimeStr] = useState<string>(
    dateTimeStringFormat(formatter(new Date()))
  )

  let interv: NodeJS.Timeout

  function setAfterTime(ms: number): void {
    clearInterval(interv)
    interv = setInterval(() => {
      setDateTimeStr(dateTimeStringFormat(formatter(new Date())))
      setAfterTime(1000)
    }, ms)
  }

  useEffect(() => {
    setAfterTime(new Date().getMilliseconds() % 1000)
    return () => clearInterval(interv)
  }, [])

  return <span>{dateTimeStr}</span>
}

DateTime.displayName = 'DateTime'

export default DateTime

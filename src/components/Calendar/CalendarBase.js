import { useMemo } from 'react'
import { useDateFormatter, useCalendar } from 'react-web-platform'

import { Cell } from './Cell'
import { Header } from './Header'
import './Calendar.css'

export const CalendarBase = (props) => {
  const { state } = props
  const { views } = state

  const { gridProps } = useCalendar(props, state)
  const dateFormatter = useDateFormatter(
    useMemo(() => {
      const options = {
        day: { day: 'numeric' },
        month: { month: 'short' },
        year: { year: 'numeric' },
      }

      return options[state.activeView]
    }, [state.activeView]),
  )

  return (
    <>
      {views.map(({ data, viewDate, viewRange }, index) => (
        <table key={index} className="Calendar">
          <Header
            state={state}
            viewRange={viewRange}
            prevHidden={index > 0}
            nextHidden={index < views.length - 1}
          />
          <tbody {...gridProps}>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <Cell key={cellIndex} value={cell} viewDate={viewDate} state={state}>
                    {dateFormatter.format(cell)}
                  </Cell>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </>
  )
}

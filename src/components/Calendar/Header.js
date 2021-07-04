import { useMemo, useCallback } from 'react'
import { useDateFormatter, CalendarNavigationAction } from 'react-web-platform'

export const Header = (props) => {
  const { viewRange, prevHidden, nextHidden, state } = props
  const { activeView, baseDate, navigateTo, moveDate, canNavigateTo, setView, moveView } = state

  const dateFormatter = useDateFormatter(
    useMemo(() => {
      const options = {
        day: { month: 'long', year: 'numeric' },
        month: { year: 'numeric' },
        year: { year: 'numeric' },
      }

      return options[activeView]
    }, [activeView]),
  )

  const colSpan = { day: 7, month: 3, year: 5 }[activeView]
  const candidatePrev = moveDate(baseDate, CalendarNavigationAction.PrevView)
  const candidateNext = moveDate(baseDate, CalendarNavigationAction.NextView)

  const handleChangeView = useCallback(() => {
    setView(moveView(activeView, 1))
  }, [activeView, moveView, setView])

  const handleNavigateToPrevView = useCallback(() => {
    if (canNavigateTo(candidatePrev)) {
      navigateTo(candidatePrev)
    }
  }, [canNavigateTo, candidatePrev, navigateTo])

  const handleNavigateToNextView = useCallback(() => {
    if (canNavigateTo(candidateNext)) {
      navigateTo(candidateNext)
    }
  }, [canNavigateTo, candidateNext, navigateTo])

  return (
    <thead>
      <tr>
        <th colSpan={colSpan}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <button
              disabled={!canNavigateTo(candidatePrev)}
              onClick={handleNavigateToPrevView}
              style={{ visibility: prevHidden ? 'hidden' : undefined }}
            >
              &lt;
            </button>

            <span onClick={handleChangeView}>
              {activeView === 'year' ? (
                <>
                  {dateFormatter.format(viewRange.start)}-{dateFormatter.format(viewRange.end)}
                </>
              ) : (
                dateFormatter.format(viewRange.start)
              )}
            </span>

            <button
              disabled={!canNavigateTo(candidateNext)}
              onClick={handleNavigateToNextView}
              style={{ visibility: nextHidden ? 'hidden' : undefined }}
            >
              &gt;
            </button>
          </div>
        </th>
      </tr>
    </thead>
  )
}

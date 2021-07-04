import { useRef } from 'react'
import { useCalendarCell } from 'react-web-platform'

export const Cell = (props) => {
  const { state, children } = props
  const ref = useRef(null)

  const { cellState, cellProps, buttonProps } = useCalendarCell(props, state, ref)
  const {
    isFocused,
    isSelected,
    isToday,
    isSameView,
    isDisabled,
    isRangeSelected,
    isRangePreview,
    isSelectionStart,
    isSelectionEnd,
    isRangePreviewStart,
    isRangePreviewEnd,
  } = cellState

  return (
    <td className="Cell" {...cellProps}>
      <span
        ref={ref}
        className="CellButton"
        {...buttonProps}
        data-today={isToday}
        data-focused={state.isCalendarFocused && isFocused}
        data-selected={isSelected}
        data-range-selected={isRangeSelected}
        data-range-preview={isRangePreview}
        data-range-preview-start={isRangePreviewStart}
        data-range-preview-end={isRangePreviewEnd}
        data-range-selection-start={isSelectionStart}
        data-range-selection-end={isSelectionEnd}
        data-outside-view={!isSameView}
        data-disabled={isDisabled}
      >
        {children}
      </span>
    </td>
  )
}

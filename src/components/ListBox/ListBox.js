import { forwardRef, useRef } from 'react'
import { useListBox, useOption, useHover, useForkRef } from 'react-web-platform'
import { Check } from 'ui-kit'

import './ListBox.css'

export const ListBoxBase = forwardRef((props, ref) => {
  const { state } = props
  const listBoxRef = useRef(null)
  const { listBoxProps } = useListBox(props, state, ref)
  const forkedRef = useForkRef(listBoxRef, ref)

  return (
    <ul {...listBoxProps} ref={forkedRef} className="ListBox">
      {state.collection.map((item) => (
        <Option {...item} state={state} />
      ))}
    </ul>
  )
})

const Option = (props) => {
  const { children, state } = props
  const ref = useRef(null)
  const { itemProps, isFocused, isSelected } = useOption(props, state, ref)
  const { isHovered, hoverProps } = useHover(props)

  return (
    <li
      {...itemProps}
      {...hoverProps}
      ref={ref}
      className="ListBox-Item"
      data-selected={isSelected}
      data-focused={isFocused}
      data-hovered={isHovered}
    >
      {children}
      {isSelected && <Check />}
    </li>
  )
}

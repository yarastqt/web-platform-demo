import { useRef } from 'react'
import { useButton, useHover } from 'react-web-platform'

export const FieldButton = (props) => {
  const { children } = props
  const ref = useRef(null)
  const { isPressed, buttonProps } = useButton(props, ref)
  const { isHovered, hoverProps } = useHover(props)

  return (
    <button
      {...buttonProps}
      {...hoverProps}
      ref={ref}
      className="TextField-Button"
      data-hovered={isHovered}
      data-pressed={isPressed}
    >
      {children}
    </button>
  )
}

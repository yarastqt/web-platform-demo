import { useRef } from 'react'
import { useHover, useButton, mergeProps } from 'react-web-platform'

import './Button.css'

export const Button = (props) => {
  const { children, addonAfter, ...otherProps } = props
  const buttonRef = useRef(null)
  const { isHovered, hoverProps } = useHover(otherProps)
  const { isPressed, buttonProps } = useButton(otherProps, buttonRef)

  return (
    <button
      {...mergeProps(buttonProps, hoverProps)}
      ref={buttonRef}
      className="Button"
      data-disabled={otherProps.disabled}
      data-hovered={isHovered}
      data-pressed={isPressed}
    >
      {typeof children === 'string' ? <span className="Button-Text">{children}</span> : children}
      {addonAfter}
    </button>
  )
}

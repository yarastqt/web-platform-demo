import { useRef, forwardRef } from 'react'
import { useHover, useTextField, useForkRef } from 'react-web-platform'

import './TextField.css'

export const TextField = forwardRef((props, ref) => {
  const { addonAfter, ...otherProps } = props
  const inputRef = useRef(null)
  const { isHovered, hoverProps } = useHover(otherProps)
  const { inputProps } = useTextField(otherProps, inputRef)
  const forkedRef = useForkRef(inputRef, ref)

  return (
    <div {...hoverProps} className="TextField" data-hovered={isHovered}>
      <input {...inputProps} ref={forkedRef} className="TextField-Control" />
      {addonAfter}
    </div>
  )
})

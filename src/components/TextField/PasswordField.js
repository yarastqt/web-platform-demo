import { useRef, forwardRef } from 'react'
import { usePasswordField, useForkRef } from 'react-web-platform'
import { Eye, EyeOff } from 'ui-kit'

import { TextField } from './TextField'
import { FieldButton } from './FieldButton'

export const PasswordField = forwardRef((props, ref) => {
  const inputRef = useRef(null)
  const { isShown, inputProps, buttonProps } = usePasswordField(props, inputRef)
  const forkedRef = useForkRef(inputRef, ref)

  return (
    <TextField
      {...inputProps}
      ref={forkedRef}
      addonAfter={
        <FieldButton
          {...buttonProps}
          aria-label={
            isShown ? 'Password is shown (press for hide)' : 'Password is hidden (press for show)'
          }
        >
          {isShown ? <EyeOff /> : <Eye />}
        </FieldButton>
      }
    />
  )
})

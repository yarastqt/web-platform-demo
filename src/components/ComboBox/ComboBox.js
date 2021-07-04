import { useRef } from 'react'
import { useComboBoxState, useComboBox } from 'react-web-platform'
import { Button, TextField, Popup, ArrowShortBottom, ListBoxBase } from 'ui-kit'

import './ComboBox.css'

export const ComboBox = (props) => {
  const inputRef = useRef(null)
  const listBoxRef = useRef(null)
  const state = useComboBoxState(props)
  const { inputProps, buttonProps, listBoxProps } = useComboBox(props, state, {
    inputRef,
    listBoxRef,
  })

  return (
    <div className="ComboBox">
      <TextField {...inputProps} ref={inputRef} />
      <Button {...buttonProps}>
        <ArrowShortBottom />
      </Button>
      <Popup visible={state.isOpened}>
        <ListBoxBase {...listBoxProps} ref={listBoxRef} />
      </Popup>
    </div>
  )
}

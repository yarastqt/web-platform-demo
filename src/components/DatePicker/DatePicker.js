import { useDatePicker, useDatePickerState } from 'react-web-platform'
import { DateField, Popup, SingleCalendar, FieldButton, Calendar as CalendarIcon } from 'ui-kit'

export const DatePicker = (props) => {
  const state = useDatePickerState(props)
  const { groupProps, triggerProps } = useDatePicker(props, state)

  return (
    <div {...groupProps}>
      <DateField
        value={state.value}
        onChange={state.setValue}
        addonAfter={
          <FieldButton {...triggerProps}>
            <CalendarIcon />
          </FieldButton>
        }
      />
      <Popup visible={state.isOpen}>
        <SingleCalendar autoFocus value={state.value} onChange={state.setValue} />
      </Popup>
    </div>
  )
}

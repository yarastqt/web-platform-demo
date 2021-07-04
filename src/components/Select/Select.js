import { useSelectState, useSelect } from 'react-web-platform'
import { Button, ArrowShortBottom, ArrowShortTop, Popup, ListBoxBase } from 'ui-kit'

export const Select = (props) => {
  const state = useSelectState(props)
  const { triggerProps, listBoxProps } = useSelect(props, state)
  const arrowIcon = state.isOpened ? <ArrowShortTop /> : <ArrowShortBottom />

  return (
    <>
      <Button {...triggerProps} addonAfter={arrowIcon}>
        {state.selected.option ?? 'Select option'}
      </Button>
      <Popup visible={state.isOpened}>
        <ListBoxBase {...listBoxProps} />
      </Popup>
    </>
  )
}

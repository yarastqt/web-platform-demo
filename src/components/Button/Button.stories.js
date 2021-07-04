import { Button } from 'ui-kit'

export default {
  title: 'Button',
}

export const Default = (props) => {
  return <Button {...props}>Button</Button>
}

Default.argTypes = {
  onPress: { action: 'press' },
  onPressStart: { action: 'press start' },
  onPressEnd: { action: 'press end' },
  onPressUp: { action: 'press up' },
}

Default.args = {
  disabled: false,
}

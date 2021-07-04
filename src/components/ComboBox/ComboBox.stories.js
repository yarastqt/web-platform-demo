import { Option } from 'react-web-platform'
import { ComboBox } from 'ui-kit'

export default {
  title: 'ComboBox',
}

export const Default = () => {
  return (
    <ComboBox>
      <Option value="red">Red</Option>
      <Option value="orange">Orange</Option>
      <Option value="yellow">Yellow</Option>
      <Option value="green">Green</Option>
      <Option value="cyan">Cyan</Option>
      <Option value="blue">Blue</Option>
      <Option value="purple">Purple</Option>
    </ComboBox>
  )
}

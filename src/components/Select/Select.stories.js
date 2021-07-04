import { Option } from 'react-web-platform'
import { Select } from 'ui-kit'

export default {
  title: 'Select',
}

export const Default = () => {
  return (
    <Select>
      <Option value="red">Red</Option>
      <Option value="orange">Orange</Option>
      <Option value="yellow">Yellow</Option>
      <Option value="green">Green</Option>
      <Option value="cyan">Cyan</Option>
      <Option value="blue">Blue</Option>
      <Option value="purple">Purple</Option>
    </Select>
  )
}

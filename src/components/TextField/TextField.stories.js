import { useState } from 'react'
import { TextField, PasswordField } from 'ui-kit'

export default {
  title: 'TextField',
}

export const Default = () => {
  const [value, setValue] = useState()
  const onChange = (event) => setValue(event.target.value)

  return <TextField value={value} onChange={onChange} />
}

export const Password = () => {
  const [value, setValue] = useState()
  const onChange = (event) => setValue(event.target.value)

  return <PasswordField value={value} onChange={onChange} />
}

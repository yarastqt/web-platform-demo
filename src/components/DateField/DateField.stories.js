import { useState } from 'react'
import { DateField } from 'ui-kit'

export default {
  title: 'DateField',
}

export const Default = () => {
  const [value, setValue] = useState()

  return <DateField value={value} onChange={(event) => setValue(event.value)} />
}

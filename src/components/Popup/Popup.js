import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { useFocusTrap } from 'react-web-platform'

import './Popup.css'

export const Popup = (props) => {
  const { children, visible } = props
  const scopeRef = useRef(null)

  useFocusTrap({ enabled: visible, scopeRef: scopeRef })

  if (!visible) {
    return null
  }

  return createPortal(
    <div ref={scopeRef} className="Popup">
      {children}
    </div>,
    document.body,
  )
}

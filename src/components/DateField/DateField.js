import { forwardRef, useRef } from 'react'
import {
  useDateTimeField,
  useDateTimeFieldState,
  useDateTimeFieldSegment,
  useHover,
} from 'react-web-platform'
import { FocusManagerScope } from 'react-web-platform/libs/focus'

import '../TextField/TextField.css'
import './DateField.css'

export const DateField = (props) => {
  const { addonAfter } = props
  const scopeRef = useRef(null)
  const state = useDateTimeFieldState(props)
  const { hoverProps, isHovered } = useHover(props)

  return (
    <div {...hoverProps} className="TextField" data-hovered={isHovered}>
      <FocusManagerScope scopeRef={scopeRef}>
        <DateFieldControl ref={scopeRef} state={state} />
      </FocusManagerScope>
      {addonAfter}
    </div>
  )
}

const DateFieldControl = forwardRef((props, innerRef) => {
  const { state } = props
  const { fieldProps, segmentProps } = useDateTimeField(props)

  return (
    <div {...fieldProps} ref={innerRef}>
      {state.segments.map((segment, key) => {
        if (segment.isEditable) {
          return <EditableSegment key={key} {...segmentProps} segment={segment} state={state} />
        }

        return (
          <span className="DateField-Segment" key={key}>
            {segment.text}
          </span>
        )
      })}
    </div>
  )
})

const EditableSegment = (props) => {
  const { state, segment, ...otherProps } = props
  const { segmentProps } = useDateTimeFieldSegment(props, state)

  return (
    <span {...segmentProps} {...otherProps} className="DateField-Segment">
      {segment.text}
    </span>
  )
}

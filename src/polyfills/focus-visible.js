class PointerFocus {
  static create() {
    return new PointerFocus()
  }

  constructor() {
    this.timeoutId = 0
    this.isPointer = false

    window.addEventListener('blur', this.onBlur, false)
    window.document.addEventListener('keydown', this.onKeyDown, true)
    window.document.addEventListener('mousedown', this.onPointerCall, true)
    window.document.addEventListener('mouseup', this.onPointerCall, true)
    window.document.addEventListener('focusin', this.onFocus, true)
    window.document.addEventListener('pointerdown', this.onPointerCall, true)
    window.document.addEventListener('pointerup', this.onPointerCall, true)

    if (
      !window.document.body.classList.contains('pointerfocus') &&
      !window.document.documentElement.classList.contains('pointerfocus')
    ) {
      window.document.body.classList.add('utilityfocus')
    }
  }

  dispose() {
    window.removeEventListener('blur', this.onBlur, false)
    window.document.removeEventListener('keydown', this.onKeyDown, true)
    window.document.removeEventListener('mousedown', this.onPointerCall, true)
    window.document.removeEventListener('mouseup', this.onPointerCall, true)
    window.document.removeEventListener('focusin', this.onFocus, true)
    window.document.removeEventListener('pointerdown', this.onPointerCall, true)
    window.document.removeEventListener('pointerup', this.onPointerCall, true)
    window.document.body.classList.remove('pointerfocus', 'utilityfocus')
  }

  onKeyDown = () => {
    window.clearTimeout(this.timeoutId)
    this.isPointer = false
  }

  onPointerCall = () => {
    this.isPointer = true
    window.clearTimeout(this.timeoutId)
    this.timeoutId = window.setTimeout(() => (this.isPointer = false), 600)
  }

  onFocus = () => {
    if (this.isPointer) {
      window.document.body.classList.add('pointerfocus')
      window.document.body.classList.remove('utilityfocus')
    } else {
      window.document.body.classList.add('utilityfocus')
      window.document.body.classList.remove('pointerfocus')
    }
  }

  onBlur = () => {
    window.addEventListener('focus', this.setIsPointerOnTabFocus, true)
  }

  setIsPointerOnTabFocus = () => {
    window.removeEventListener('focus', this.setIsPointerOnTabFocus, true)

    if (window.document.body.classList.contains('pointerfocus')) {
      this.isPointer = true
      window.setTimeout(() => (this.isPointer = false))
    }
  }
}

let pointerFocusInstance = null
let disposed = false

function setupPointerFocus() {
  if (disposed || pointerFocusInstance) {
    return
  }

  pointerFocusInstance = PointerFocus.create()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupPointerFocus)
} else {
  setupPointerFocus()
}

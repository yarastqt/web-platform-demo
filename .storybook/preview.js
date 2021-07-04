import '../src/polyfills/focus-visible'
import '../src/tokens.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

function createNullProxy(target) {
  return new Proxy(target, {
    apply(target, thisArg, args) {
      if (
        typeof args[0] === 'string' &&
        (args[0].match(/uncontrolled/) || args[1].match(/onPress|onPressStart|preventFocusOnPress/))
      ) {
        return null
      }
      return Reflect.apply(target, thisArg, args)
    },
  })
}

console.error = createNullProxy(console.error)

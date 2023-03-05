import { Dimensions } from 'react-native'

const window = Dimensions.get('window')

export const SIZE = {
  windowHeight: window.height,
  windowWidth: window.width,
  windowFontScale: window.fontScale,
  windowScale: window.scale,
}

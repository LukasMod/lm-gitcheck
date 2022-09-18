import { TextStyle } from 'react-native'
import { color } from './color'

export const typography = {
  regular: 'Roboto-Regular', // 400 weight
  medium: 'Roboto-Medium', // 500 weight
  bold: 'Roboto-Bold', // 700 weight
}

export const fontSize = {
  s: 10,
  m: 14,
  l: 16,
}

// text presets
export const tpBoldTextL: TextStyle = {
  fontFamily: typography.bold,
  fontSize: fontSize.l,
  lineHeight: 24,
  color: color.text,
}
export const tpMediumTextM: TextStyle = {
  fontFamily: typography.medium,
  fontSize: fontSize.m,
  lineHeight: 20,
  color: color.text,
}


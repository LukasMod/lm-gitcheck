import { TextStyle } from 'react-native'
import { color } from './color'

export const typography = {
  regular: 'Montserrat-Regular', // 400 weight
  medium: 'Montserrat-Medium', // 500 weight
  bold: 'Montserrat-SemiBold', // 700 weight
}

export const fontSize = {
  s: 10,
  m: 12,
  l: 16,
}

// text presets
export const tpBoldTextL: TextStyle = {
  fontFamily: typography.bold,
  fontSize: fontSize.l,
  lineHeight: 26,
  color: color.text,
}
export const tpBoldTextM: TextStyle = {
  fontFamily: typography.bold,
  fontSize: fontSize.m,
  lineHeight: 15,
  color: color.text,
}
export const tpMediumDescriptionM: TextStyle = {
  fontFamily: typography.medium,
  fontSize: fontSize.m,
  lineHeight: 15,
  color: color.descriptionText,
}
export const tpMediumPrimaryM: TextStyle = {
  fontFamily: typography.medium,
  fontSize: fontSize.m,
  lineHeight: 15,
  color: color.primary,
}
export const tpMediumTextM: TextStyle = {
  fontFamily: typography.medium,
  fontSize: fontSize.m,
  lineHeight: 15,
  color: color.text,
}
export const tpMediumDescriptionS: TextStyle = {
  fontFamily: typography.medium,
  fontSize: fontSize.s,
  lineHeight: 15,
  color: color.descriptionText,
}

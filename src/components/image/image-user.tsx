import * as React from 'react'
import { ImageStyle, TouchableOpacity, StyleProp, ViewStyle, Image } from 'react-native'
import { color } from '../../theme'
import { metrics } from '../../utils'
import { icons, Icons } from '../icon/icons'
import { observer } from 'mobx-react-lite'

export interface IUserImage {
  style?: StyleProp<ImageStyle>
  containerStyle?: StyleProp<ViewStyle>
  onPress?: () => void
  imageUrl?: string
  withBorder?: boolean
}

const CONTAINER: ViewStyle = {
  height: 48,
  width: 48,
  borderRadius: 48,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: 'transparent',
}
const BORDER: ViewStyle = {
  borderColor: color.white,
}
const IMAGE: ImageStyle = {
  resizeMode: 'contain',
  height: 45,
  width: 45,
  borderRadius: 45,
}

export const ImageUser = observer(
  ({ style, imageUrl, containerStyle, onPress, withBorder }: IUserImage) => {
    return (
      <TouchableOpacity
        style={[CONTAINER, withBorder && BORDER, containerStyle]}
        onPress={onPress}
        disabled={!onPress}
        activeOpacity={metrics.activeOpacity}>
        {imageUrl ? (
          <Image style={[IMAGE, style]} source={{ uri: imageUrl }} />
        ) : (
          <Image style={[IMAGE, style]} source={icons[Icons.DEFAULT_USER_IMAGE]} />
        )}
      </TouchableOpacity>
    )
  }
)

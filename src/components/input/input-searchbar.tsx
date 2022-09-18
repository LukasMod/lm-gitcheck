import * as React from 'react'
import { ImageStyle, TouchableOpacity, ViewStyle, TextInput, TextStyle } from 'react-native'
import { color, rounding, tpMediumTextM } from '../../theme'
import { metrics } from '../../utils'
import { Icon } from '../icon/icon'
import { Icons } from '../icon/icons'
import { observer } from 'mobx-react-lite'

export interface IInputSearchBar {
  setText: (text: string) => void
  text: string
}

const CONTAINER: ViewStyle = {
  backgroundColor: color.white,
  height: 40,
  marginHorizontal: 23,
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: 12,
  flexDirection: 'row',
  borderRadius: rounding.regular,
}
const ICON: ImageStyle = {}
const TEXT: TextStyle = {
  ...tpMediumTextM,
  paddingHorizontal: 10,
  flex: 1,
}

export const InputSearchbar = observer(({ setText, text }: IInputSearchBar) => {
  const inputRef = React.useRef<TextInput>()

  const onPressSearchbar = () => {
    inputRef.current.focus()
  }

  return (
    <TouchableOpacity
      style={CONTAINER}
      activeOpacity={metrics.activeOpacity}
      onPress={onPressSearchbar}>
      <Icon style={ICON} icon={Icons.SEARCH} size={19} />
      <TextInput style={TEXT} ref={inputRef} onChangeText={setText} value={text} />
    </TouchableOpacity>
  )
})

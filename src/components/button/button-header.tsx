import * as React from 'react'
import { TouchableOpacity, ViewStyle, Text, TextStyle } from 'react-native'
import { metrics } from '../../utils'
import { observer } from 'mobx-react-lite'
import { tpBoldTextM } from '../../theme'

const TEXT: TextStyle = {
  ...tpBoldTextM,
}

export interface IButtonHeader {
  onPress: () => void
  title: string
}

export const ButtonHeader = observer(({ onPress, title }: IButtonHeader) => {
  return (
    <TouchableOpacity activeOpacity={metrics.activeOpacity} onPress={onPress}>
      <Text style={TEXT}>{title}</Text>
    </TouchableOpacity>
  )
})

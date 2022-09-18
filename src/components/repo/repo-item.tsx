import * as React from 'react'
import { TouchableOpacity, ViewStyle, TextStyle, Text, View, ImageStyle, Image } from 'react-native'
import {
  color,
  rounding,
  spacing,
  tpMediumDescriptionM,
  tpMediumDescriptionS,
  tpMediumPrimaryM,
  tpMediumTextM,
} from '../../theme'
import { HomeScreenNavProp, IRepo } from '../../types'
import { metrics, formatDateString } from '../../utils'
import { Icon } from '../icon/icon'
import { icons, Icons } from '../icon/icons'
// import { ImageUser } from '../image/image-user'
import { observer } from 'mobx-react-lite'
import { useNavigation } from '@react-navigation/native'
import { useStores } from '../../hooks'
import { ModalLoading } from '../modal/modal-loading'

const CONTAINER: ViewStyle = {
  marginVertical: 15,
}
const HEADER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
}

const HEADER_TEXT: ViewStyle = {
  ...tpMediumTextM,
  marginLeft: spacing.item,
}
const TITLE_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const TITLE_TEXT: TextStyle = {
  ...tpMediumTextM,
  marginLeft: spacing.item,
}

const IMAGE: ImageStyle = {
  width: '100%',
  tintColor: undefined,
  borderRadius: rounding.regular,
  marginVertical: spacing.item,
}
const ICON_LIKED: ImageStyle = {
  tintColor: color.error,
}
const DESCRIPTION_CONTAINER: ViewStyle = {
  paddingHorizontal: spacing.item,
}
const DESCRIPTION_FOOTER_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: spacing.itemSmall,
}

const DESCRIPTION_TEXT: TextStyle = {
  ...tpMediumDescriptionM,
}
const DESCRIPTION_DATE_TEXT: TextStyle = {
  ...tpMediumDescriptionS,
}

const DESCRIPTION_MORE_TEXT: TextStyle = {
  ...tpMediumPrimaryM,
}

export interface IRepoItem {
  item: IRepo
  open?: boolean
}

export const RepoItem = observer(({ item, open }: IRepoItem) => {
  const navigation = useNavigation<HomeScreenNavProp>()

  return (
    <View style={CONTAINER}>
      {/* <View style={HEADER_CONTAINER}>
        <ImageUser imageUrl={item.avatarImageUrl} />
        <Text style={HEADER_TEXT}>{item.name}</Text>
      </View>
      {!!item.imageUrl && <Image style={IMAGE} source={icons[Icons.IMAGE_VIEW]} />}
      <View style={TITLE_CONTAINER}>
        <Text style={TITLE_TEXT}>{item.title}</Text>
        <Icon
          icon={item.isLiked ? Icons.HEART_RED : Icons.HEART}
          style={item.isLiked && ICON_LIKED}
          onPress={onPressLike}
        />
      </View>
      <View style={DESCRIPTION_CONTAINER}>
        <Text style={DESCRIPTION_TEXT} numberOfLines={open ? undefined : 2}>
          {item.description}
        </Text>
        <View style={DESCRIPTION_FOOTER_CONTAINER}>
          <Text style={DESCRIPTION_DATE_TEXT}>{formatDateString(item.date)}</Text>
          {!open && (
            <TouchableOpacity onPress={onPressMore} activeOpacity={metrics.activeOpacity}>
              <Text style={DESCRIPTION_MORE_TEXT}>Więcej</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <ModalLoading show={showLoading} /> */}
    </View>
  )
})

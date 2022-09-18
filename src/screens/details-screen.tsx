import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, ViewStyle, Text, TextStyle } from 'react-native'
import { spacing } from '../theme'
import { DetailsScreenRouteProp, DetailsScreenNavProp } from '../types/navigation'
import { observer } from 'mobx-react-lite'

import { useStores } from '../hooks'

const FULL: ViewStyle = {
  flex: 1,
  padding: spacing.screen,
}
const TEXT_NO_DATA: TextStyle = {
  padding: spacing.screen,
}

export const DetailsScreen = observer(() => {
  const navigation = useNavigation<DetailsScreenNavProp>()
  const route = useRoute<DetailsScreenRouteProp>()

  const postId = route.params?.repoId || '' // FIXME: postID

  const {
    stores: {
      postStore: { posts },
    },
  } = useStores()

  const post = posts.find(p => p.id === postId)

  if (!post) {
    return <Text style={TEXT_NO_DATA}>Brak danych</Text>
  }

  return (
    <View style={FULL}>
      {/* <PostItem item={post} open /> */}
    </View>
  )
})

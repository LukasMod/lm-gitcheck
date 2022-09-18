import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, ViewStyle, Text, TextStyle } from 'react-native'
import { spacing } from '../theme'
import { DetailsScreenRouteProp } from '../types/navigation'
import { observer } from 'mobx-react-lite'

import { useStores } from '../hooks'

const FULL: ViewStyle = {
  flex: 1,
  padding: spacing.screenTop,
}
// const TEXT_NO_DATA: TextStyle = {
//   padding: spacing.screenTop,
// }

export const DetailsScreen = observer(() => {
  const route = useRoute<DetailsScreenRouteProp>()

  const repoId = route.params?.repoId || ''

  const {
    stores: {
      repoStore: { repos },
    },
  } = useStores()

  const repo = repos.find(r => r.id === repoId)

  // if (!repo) {
  //   return <Text style={TEXT_NO_DATA}>Brak danych</Text>
  // }

  return <View style={FULL}>{/* <RepoItem item={repo} open /> */}</View>
})

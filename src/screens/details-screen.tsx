import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, ViewStyle, Text, TextStyle } from 'react-native'
import { spacing } from '../theme'
import { DetailsScreenRouteProp, DetailsScreenNavProp } from '../types/navigation'
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
  const navigation = useNavigation<DetailsScreenNavProp>()

  const repoId = route.params?.repoId || ''

  const {
    stores: {
      repoStore: { repos },
    },
  } = useStores()

  const repo = repos.find(r => r.id === repoId)

  useEffect(() => {
    if (repo) {
      navigation.setOptions({ headerTitle: repo.name })
    }
  }, [repo])


  return <View style={FULL}>{/* <RepoItem item={repo} open /> */}</View>
})

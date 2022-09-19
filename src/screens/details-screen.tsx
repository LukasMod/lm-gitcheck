import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, ViewStyle, Text, TextStyle, Image, ImageStyle } from 'react-native'
import { spacing, tpMediumTextL, tpRegularTextM } from '../theme'
import { DetailsScreenRouteProp, DetailsScreenNavProp } from '../types/navigation'
import { observer } from 'mobx-react-lite'

import { useStores } from '../hooks'
import { mock } from '../services/repo-api'
import { Section } from '../components'
import { Icons } from '../components/icon/icons'
import { metrics } from '../utils'

const FULL: ViewStyle = {
  flex: 1,
  paddingVertical: spacing.item,
  paddingHorizontal: spacing.screenHorizontal,
}
// const TEXT_NO_DATA: TextStyle = {
//   padding: spacing.screenTop,
// }
const IMAGE: ImageStyle = {
  width: '100%',
  height: metrics.screenHeight * 0.4,
  resizeMode: 'contain',
}
const TEXT_CONTAINER: ViewStyle = {
  marginTop: spacing.item,
}

const TITLE_TEXT: TextStyle = {
  ...tpMediumTextL,
}
const DESCRIPTION_TEXT: TextStyle = {
  ...tpRegularTextM,
}

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

  // const repo = mock[0]

  useEffect(() => {
    if (repo) {
      navigation.setOptions({ headerTitle: repo.name })
    }
  }, [repo])

  return (
    <View style={FULL}>
      <Image source={{ uri: repo.owner.avatar_url }} style={IMAGE} />
      <View style={TEXT_CONTAINER}>
        <Text style={TITLE_TEXT}>About</Text>
        <Text style={DESCRIPTION_TEXT}>{repo.description}</Text>
      </View>
      <Section title="Forks" value={repo.forks_count} icon={Icons.FORK} />
      <Section title="Stars" value={repo.stargazers_count} icon={Icons.STAR} />
      <Section title="Watchers" value={repo.watchers_count} icon={Icons.EYE} />
    </View>
  )
})

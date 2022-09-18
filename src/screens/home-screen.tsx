import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { InputSearchbar } from '../components'
import { spacing } from '../theme'
import { HomeScreenNavProp } from '../types/navigation'
import { observer, useLocalObservable } from 'mobx-react-lite'

import { useStores } from '../hooks'
import { makeAutoObservable } from 'mobx'

const FULL: ViewStyle = {
  flex: 1,
  paddingTop: spacing.screenTop,
}

class LocalStore {
  constructor() {
    makeAutoObservable(this)
  }

  searchText = ''

  setSearchText = (text: string) => {
    this.searchText = text
  }
}

export const HomeScreen = observer(() => {
  const navigation = useNavigation<HomeScreenNavProp>()

  const { searchText, setSearchText } = useLocalObservable(() => new LocalStore())

  const {
    stores: {
      repoStore: { getRepos },
    },
  } = useStores()

  useEffect(() => {
    // getRepos()
  }, [])

  const navigateToDetails = () => {
    navigation.navigate('Details')
  }

  return (
    <View style={FULL}>
      <InputSearchbar setText={setSearchText} text={searchText} />
      <TouchableOpacity onPress={navigateToDetails}>
        <Text>next screen</Text>
      </TouchableOpacity>
      {/* <PostList /> */}
    </View>
  )
})

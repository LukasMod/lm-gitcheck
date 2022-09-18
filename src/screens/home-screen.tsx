import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, ViewStyle } from 'react-native'
import { InputSearchbar, PostList } from '../components'
import { spacing } from '../theme'
import { HomeScreenNavProp } from '../types/navigation'
import { observer, useLocalObservable } from 'mobx-react-lite'

import { useStores } from '../hooks'
import { makeAutoObservable } from 'mobx'

const FULL: ViewStyle = {
  flex: 1,
  paddingTop: spacing.screen,
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
      postStore: { badges, getPosts },
    },
  } = useStores()

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <View style={FULL}>
      <InputSearchbar setText={setSearchText} text={searchText} />
      {/* <PostList /> */}
    </View>
  )
})

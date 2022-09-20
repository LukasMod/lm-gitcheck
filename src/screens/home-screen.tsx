import React, { useEffect } from 'react'
import { View, ViewStyle } from 'react-native'
import { InputSearchbar, RepoList } from '../components'
import { spacing } from '../theme'
import { observer, useLocalObservable } from 'mobx-react-lite'

import { useStores } from '../hooks'
import { makeAutoObservable } from 'mobx'

const FULL: ViewStyle = {
  flex: 1,
  paddingTop: spacing.screenTop,
  paddingHorizontal: spacing.screenHorizontal,
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
  const { searchText, setSearchText } = useLocalObservable(() => new LocalStore())

  const {
    stores: {
      repoStore: { getReposDebounce },
    },
  } = useStores()

  useEffect(() => {
    getReposDebounce(searchText)
  }, [searchText])

  return (
    <View style={FULL}>
      <InputSearchbar setText={setSearchText} text={searchText} />
      <RepoList searchText={searchText} />
    </View>
  )
})

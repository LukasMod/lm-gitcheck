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
      repoStore: { setRepos, getReposDebounce },
    },
  } = useStores()

  useEffect(() => {
    if (searchText.length) {
      getReposDebounce(searchText)
    } else {
      setRepos([])
    }
  }, [searchText])

  return (
    <View style={FULL}>
      <InputSearchbar setText={setSearchText} text={searchText} />
      <RepoList searchText={searchText} />
    </View>
  )
})

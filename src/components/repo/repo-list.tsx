import { makeAutoObservable } from 'mobx'
import { observer, useLocalObservable } from 'mobx-react-lite'
import * as React from 'react'
import { ActivityIndicator, FlatList, ViewStyle, Text } from 'react-native'
import { useStores } from '../../hooks'
import { color, spacing } from '../../theme'
import { IRepo } from '../../types'
const CONTENT: ViewStyle = {
  backgroundColor: color.background,
  paddingHorizontal: spacing.screenTop,
}
const LOADING: ViewStyle = {
  marginVertical: 30,
}

const keyExtractor = (item: IRepo) => item.id

const renderItem = ({ item }: { item: IRepo }) => {
  // return <RepoItem item={item} />
}

class LocalStore {
  constructor() {
    makeAutoObservable(this)
  }

  isRefreshing = false

  setIsRefreshing = (isRefreshing: boolean) => {
    this.isRefreshing = isRefreshing
  }
}

export const RepoList = observer(() => {
  return (
    // <FlatList
    //   contentContainerStyle={CONTENT}
    //   data={repos}
    //   // renderItem={renderItem}
    //   keyExtractor={keyExtractor}
    //   onRefresh={onRefresh}
    //   refreshing={isRefreshing}
    //   onEndReached={loadMorePosts}
    //   onEndReachedThreshold={0.7}
    //   ListFooterComponent={
    //     repoLoading && <ActivityIndicator style={LOADING} color={color.primary} />
    //   }
    //   ListEmptyComponent={<Text>Brak danych</Text>}
    // />
    <></>
  )
})

import { makeAutoObservable } from 'mobx'
import { observer, useLocalObservable } from 'mobx-react-lite'
import * as React from 'react'
import {
  ActivityIndicator,
  FlatList,
  ViewStyle,
  Text,
  View,
  ImageStyle,
  Image,
  TextStyle,
} from 'react-native'
import { useStores } from '../../hooks'
import { color, spacing, tpRegularTextXL } from '../../theme'
import { IRepo } from '../../types'
import { metrics } from '../../utils'
import { Icon } from '../icon/icon'
import { icons, Icons } from '../icon/icons'
import { RepoItem } from './repo-item'

const CONTENT: ViewStyle = {
  // paddingHorizontal: spacing.screenTop,
}
const LOADING: ViewStyle = {
  marginVertical: 30,
}
const EMPTY_CONTAINER: ViewStyle = {
  marginTop: 60,
  justifyContent: 'center',
  alignItems: 'center',
  // backgroundColor: 'red',
}
const TEXT: TextStyle = {
  ...tpRegularTextXL,
  marginBottom: 40,
  marginHorizontal: 40,
  textAlign: 'center',
}
const IMAGE: ImageStyle = {
  resizeMode: 'contain',
  width: metrics.screenWidth * 0.7,
  // backgroundColor: 'blue',
}
const SEPARATOR: ViewStyle = {
  height: 20,
}

const keyExtractor = (item: IRepo) => `${item.id}`

const renderItem = ({ item }: { item: IRepo }) => {
  return <RepoItem item={item} />
}

const separatorItem = () => <View style={SEPARATOR} />

class LocalStore {
  constructor() {
    makeAutoObservable(this)
  }

  isRefreshing = false

  setIsRefreshing = (isRefreshing: boolean) => {
    this.isRefreshing = isRefreshing
  }
}

interface IRepoList {
  searchText: string
}

export const RepoList = observer(({ searchText }: IRepoList) => {
  const {
    stores: {
      repoStore: { repos },
    },
  } = useStores()

  // if (!repos) {
  //   return (
  //     <View>
  //       <Text>`We couldn’t find anything for ${searchText}`</Text>
  //     </View>
  //   )
  // }

  return (
    <FlatList
      contentContainerStyle={CONTENT}
      data={repos}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      // onRefresh={onRefresh}
      // refreshing={isRefreshing}
      // onEndReached={loadMorePosts}
      onEndReachedThreshold={0.7}
      ItemSeparatorComponent={separatorItem}
      ListEmptyComponent={
        !searchText && (
          <View style={EMPTY_CONTAINER}>
            <Text style={TEXT}>{`We couldn’t find anything for ${searchText}`}</Text>
            <Image source={icons[Icons.IMAGE_QUESTION_MARK]} style={IMAGE} />
          </View>
        )
      }
    />
  )
})

import React from 'react'
import { DetailsScreen, HomeScreen } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackNavigatorParamList } from '../types/navigation'
import { color, fontSize, typography } from '../theme'
import { ButtonHeader, ImageUser } from '../components'
import { observer } from 'mobx-react-lite'

export const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>()

const headerTitleStyle = {
  fontFamily: typography.bold,
  fontSize: fontSize.l,
  color: color.text,
}
const headerStyle = {
  backgroundColor: color.background,
}

export const HomeStackNavigator = observer(() => {
  return (
    <HomeStack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerStyle,
        headerTitleStyle,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Gitcheck',
          headerRight: () => <ImageUser withBorder />,
          headerLeft: () => {
            const onPressAddPost = () => {
              navigation.navigate('CreatePost')
            }

            return <ButtonHeader onPress={onPressAddPost} title="Dodaj post" />
          },
        })}
      />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  )
})

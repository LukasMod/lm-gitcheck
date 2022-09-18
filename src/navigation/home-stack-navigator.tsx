import React from 'react'
import { DetailsScreen, HomeScreen } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackNavigatorParamList } from '../types/navigation'
import { color, fontSize, typography } from '../theme'
import { Icon } from '../components'
import { observer } from 'mobx-react-lite'
import { Icons } from '../components/icon/icons'

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
        options={() => ({
          headerShown: false,
        })}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ navigation }) => ({
          headerLeft: () => {
            return <Icon onPress={navigation.goBack} icon={Icons.ARROW} />
          },
        })}
      />
    </HomeStack.Navigator>
  )
})

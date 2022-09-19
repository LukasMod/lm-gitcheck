import React from 'react'
import { DetailsScreen, HomeScreen } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackNavigatorParamList } from '../types/navigation'
import { color, fontSize, tpRegularTextXL, typography } from '../theme'
import { Icon } from '../components'
import { observer } from 'mobx-react-lite'
import { Icons } from '../components/icon/icons'

export const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>()

const headerTitleStyle = {
  fontFamily: typography.regular,
  fontSize: fontSize.xl,
  color: color.text,
}

export const HomeStackNavigator = observer(() => {
  return (
    <HomeStack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerTitleStyle,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        contentStyle: { backgroundColor: color.white },
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

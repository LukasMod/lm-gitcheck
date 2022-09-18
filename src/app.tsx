import React, { useCallback, useEffect, useState } from 'react'
import { RootNavigator } from './navigation/root-navigator'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from './hooks'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await useFonts()
        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <>
      <RootNavigator onReady={onLayoutRootView} />
      <StatusBar style="auto" />
    </>
  )
}

export default App

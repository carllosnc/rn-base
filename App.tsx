import './global.css'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStaticNavigation } from '@react-navigation/native'
import { HomePage } from 'pages/home'

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false
  },
  screens: {
    Home: {
      screen: HomePage
    },
  },
})

const Navigation = createStaticNavigation(RootStack)

export default function App() {
  return (
    <Navigation />
  )
}

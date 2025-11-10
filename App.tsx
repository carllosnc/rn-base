import './global.css'
import { createStaticNavigation } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomePage } from 'pages/home'
import { Drawer } from 'pages/drawer';
import colors from 'settings/colors.json'

const RootStack = createDrawerNavigator({
  screenOptions: {
    drawerHideStatusBarOnOpen: true,
    drawerStyle: {
      backgroundColor: colors.base,
      borderTopEndRadius: 0,
      borderBottomEndRadius: 0,
      shadowRadius: 0,
      borderRadius: 0
    },
    headerShown: false
  },
  drawerContent(props) {
    return (<Drawer {...props} />)
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

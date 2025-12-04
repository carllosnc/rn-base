import './global.css'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePage } from 'pages/home'
// import { Drawer } from 'pages/drawer';
import { AboutPage } from 'pages/about';

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screenOptions: {
    drawerHideStatusBarOnOpen: true,
    drawerStyle: {
      borderTopEndRadius: 0,
      borderBottomEndRadius: 0,
      shadowRadius: 0,
      borderRadius: 0
    },
    headerShown: false
  },
  // drawerContent(props) {
  //   return (<Drawer {...props} />)
  // },
  screens: {
    Home: { screen: HomePage },
    About: { screen: AboutPage }
  },
})

const Navigation = createStaticNavigation(RootStack)

export default function App() {
  return (
    <Navigation />
  )
}

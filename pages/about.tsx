import { View, Text } from 'react-native'
import { Scaffold } from '../components/scaffold'
import { TopBar } from 'components/top-bar'

function AboutTopBar(){
  return (
    <TopBar
      backButton={true}
      title="About Page"
    />
  )
}

export function AboutPage() {
  return (
    <Scaffold
      topBar={<AboutTopBar/>}
      className="bg-white dark:bg-neutral-800 w-full h-full relative"
      >
      <View className="justify-center items-center w-full bg-emerald-400 h-screen">
        <Text> Hello world </Text>
      </View>
    </Scaffold>
  )
}

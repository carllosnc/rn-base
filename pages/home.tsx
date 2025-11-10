import { Text, View } from 'react-native'
import { Scaffold } from '../components/scaffold'
import { TopBar } from 'components/top-bar'
import { IconButton } from 'components/icon-buttons'
import { Ionicons } from '@expo/vector-icons'
import { key } from 'utils/hash'
import { Button } from 'components/button'
import { TextField } from 'components/text-field'

function HomeTopBar(){
  return (
    <TopBar
      backButton={true}
      actions={[
        <IconButton key={key()} onPress={() => {}}>
          <Ionicons name="bluetooth-sharp" size={20} color="#333333" />
        </IconButton>,
        <IconButton key={key()} onPress={() => {}}>
          <Ionicons name="airplane" size={20} color="#333333" />
        </IconButton>,
        <IconButton key={key()} onPress={() => {}}>
          <Ionicons name="american-football" size={20} color="#333333" />
        </IconButton>,
        <IconButton key={key()} onPress={() => {}}>
          <Ionicons name="bag-handle" size={20} color="#333333" />
        </IconButton>,
      ]}
      titleLimitChars={20}
      title="this is another item lets work with that"
    />
  )
}

export function HomePage() {
  return (
    <Scaffold
      topBar={<HomeTopBar/>}
      className="bg-base w-full h-full"
      >
      <View className="gap-[30px] p-[20px] pb-[80px]">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque culpa cumque cupiditate! Ut neque ratione adipisci dolorem mollitia, tempore molestias harum ipsam, quam voluptatum, aliquid dolor delectus sit cum corporis?
        </Text>

        <Button
          leftIcon={
            <Ionicons name="bag-handle" size={16} color="white" />
          }> Hello world! </Button>

        <TextField isError label="Label" placeholder="Placeholder" />
        <TextField label="Label" placeholder="Placeholder" />
        <TextField
          label="Label"
          placeholder="Placeholder"
          errorMessage="this is a error message"
        />

        <View className="gap-[10px]">
          <View className="gap-[10px] flex-row">
            <TextField placeholder="Placeholder" />
            <TextField placeholder="Placeholder" />
          </View>
          <View className="gap-[10px] flex-row">
            <TextField placeholder="Placeholder" />
            <TextField placeholder="Placeholder" />
            <TextField placeholder="Placeholder" />
          </View>
          <View className="gap-[10px] flex-row">
            <TextField placeholder="Placeholder" />
            <TextField placeholder="Placeholder" />
            <TextField placeholder="Placeholder" />
            <TextField placeholder="Placeholder" />
          </View>
        </View>

        <View className="flex-row gap-[20px]">
          <IconButton className="bg-primary w-[50px] h-[50px]" key={key()} onPress={() => {}}>
            <Ionicons name="bag-handle" size={25} color="white" />
          </IconButton>
          <IconButton className="bg-primary w-[50px] h-[50px]" key={key()} onPress={() => {}}>
            <Ionicons name="calculator-outline" size={25} color="white" />
          </IconButton>
          <IconButton className="bg-primary w-[50px] h-[50px]" key={key()} onPress={() => {}}>
            <Ionicons name="bug-sharp" size={25} color="white" />
          </IconButton>
          <IconButton className="bg-primary w-[50px] h-[50px]" key={key()} onPress={() => {}}>
            <Ionicons name="thumbs-down" size={25} color="white" />
          </IconButton>
        </View>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat, quia, error veniam unde sint pariatur nisi numquam aspernatur quisquam natus, sed ex! Assumenda aspernatur adipisci accusamus ex harum nisi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat, quia, error veniam unde sint pariatur nisi numquam aspernatur quisquam natus, sed ex! Assumenda aspernatur adipisci accusamus ex harum nisi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat, quia, error veniam unde sint pariatur nisi numquam aspernatur quisquam natus, sed ex! Assumenda aspernatur adipisci accusamus ex harum nisi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat, quia, error veniam unde sint pariatur nisi numquam aspernatur quisquam natus, sed ex! Assumenda aspernatur adipisci accusamus ex harum nisi.
        </Text>

      </View>
    </Scaffold>
  )
}

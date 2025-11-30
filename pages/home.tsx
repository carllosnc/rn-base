import { View } from 'react-native'
import { Scaffold } from '../components/scaffold'
import { TopBar } from 'components/top-bar'
import { IconButton } from 'components/icon-buttons'
import { Ionicons } from '@expo/vector-icons'
import { key } from 'utils/hash'
import { Button } from 'components/button'
import { TextField } from 'components/text-field'
import { useTheme } from 'hooks/color-theme-hook'
import { P } from 'components/text'

function HomeTopBar(){
  const { contentColor } = useTheme()

  return (
    <TopBar
      drawerButton={true}
      actions={[
        <IconButton key={key()} onPress={() => {}}>
          <Ionicons name="bluetooth-sharp" size={20} color={contentColor} />
        </IconButton>,
        <IconButton key={key()} onPress={() => {}}>
          <Ionicons name="airplane" size={20} color={contentColor} />
        </IconButton>,
        <IconButton key={key()} onPress={() => {}}>
          <Ionicons name="american-football" size={20} color={contentColor} />
        </IconButton>,
        <IconButton key={key()} onPress={() => {}}>
          <Ionicons name="bag-handle" size={20} color={contentColor} />
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
      className="bg-white dark:bg-neutral-800 w-full h-full"
      >
      <View className="gap-[30px] p-[20px] pb-[80px]">
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquid alias quae molestias at repellat inventore rerum cumque perferendis, animi ullam, autem consequuntur debitis reiciendis voluptatibus ipsam a cum nemo?
        </P>

        <Button
          leftIcon={ <Ionicons name="bag-handle" size={16} color="white" /> }> Hello world!
        </Button>

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
          <IconButton className="bg-blue-500 w-[50px] h-[50px]" key={key()} onPress={() => {}}>
            <Ionicons name="bag-handle" size={25} color="white" />
          </IconButton>
          <IconButton className="bg-blue-500 w-[50px] h-[50px]" key={key()} onPress={() => {}}>
            <Ionicons name="calculator-outline" size={25} color="white" />
          </IconButton>
          <IconButton className="bg-blue-500 w-[50px] h-[50px]" key={key()} onPress={() => {}}>
            <Ionicons name="bug-sharp" size={25} color="white" />
          </IconButton>
          <IconButton className="bg-blue-500 w-[50px] h-[50px]" key={key()} onPress={() => {}}>
            <Ionicons name="thumbs-down" size={25} color="white" />
          </IconButton>
        </View>

        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat, quia, error veniam unde sint pariatur nisi numquam aspernatur quisquam natus, sed ex! Assumenda aspernatur adipisci accusamus ex harum nisi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat, quia, error veniam unde sint pariatur nisi numquam aspernatur quisquam natus, sed ex! Assumenda aspernatur adipisci accusamus ex harum nisi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat, quia, error veniam unde sint pariatur nisi numquam aspernatur quisquam natus, sed ex! Assumenda aspernatur adipisci accusamus ex harum nisi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat, quia, error veniam unde sint pariatur nisi numquam aspernatur quisquam natus, sed ex! Assumenda aspernatur adipisci accusamus ex harum nisi.
        </P>

      </View>
    </Scaffold>
  )
}

import { View } from 'react-native'
import { Scaffold } from '../components/scaffold'
import { TopBar } from 'components/top-bar'
import { IconButton } from 'components/icon-buttons'
import { Ionicons } from '@expo/vector-icons'
import { key } from 'utils/hash'
import { Button } from 'components/button'
import { TextField } from 'components/text-field'
import { useColor, useTheme } from 'hooks/color-theme-hook'
import { P } from 'components/p'
import { ListTile } from 'components/list-tile'
import { Dialog } from 'components/dialog'

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
          <Ionicons name="airplane-outline" size={20} color={contentColor} />
        </IconButton>,
        <IconButton key={key()} onPress={() => {}}>
          <Ionicons name="american-football-outline" size={20} color={contentColor} />
        </IconButton>,
        <IconButton key={key()} onPress={() => {}}>
          <Ionicons name="bag-handle-outline" size={20} color={contentColor} />
        </IconButton>,
      ]}
      titleLimitChars={20}
      title="this is another item lets work with that"
    />
  )
}

export function HomePage() {
  const iconColor = useColor({ light: "black", dark: "white" })

  return (
    <Scaffold
      topBar={<HomeTopBar/>}
      className="bg-white dark:bg-neutral-800 w-full h-full relative"
      >
      <View className="gap-[30px] p-[20px] pb-[80px]">
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquid alias quae molestias at repellat inventore rerum cumque perferendis, animi ullam, autem consequuntur debitis reiciendis voluptatibus ipsam a cum nemo?
        </P>

        <View>
          <Dialog
            contentClass="p-[30px]"
            target={<Button disabled> Open modal </Button>}
          >
            <P className="font-bold text-[20px]"> Modal title </P>

            <P className="text-neutral-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </P>
          </Dialog>
        </View>

        <View>
          <ListTile
            leftContent={ <Ionicons name="star-outline" size={25} color={iconColor} /> }
            rightContent={ <Ionicons name="chevron-forward" size={20} color={iconColor} /> }
            title="Lorem Ipsum is simply dummy"
            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <ListTile
            leftContent={ <Ionicons name="settings-outline" size={25} color={iconColor} /> }
            rightContent={ <Ionicons name="chevron-forward" size={20} color={iconColor} /> }
            title="This is my second ListTile"
            subTitle="This is my subtitle"
          />
          <ListTile
            leftContent={ <Ionicons name="bag-outline" size={25} color={iconColor} /> }
            rightContent={ <Ionicons name="chevron-forward" size={20} color={iconColor} /> }
            title="This is my second ListTile"
            subTitle="This is my subtitle"
          />
        </View>

        <View className="flex-row flex flex-wrap gap-[10px]">
          <Button> Button </Button>
          <Button leftIcon={ <Ionicons name="bag-handle" size={16} color="white" /> }>
              Button with icon
          </Button>
          <Button isLoading> Loading </Button>
        </View>

        <View className="flex-row gap-[20px]">
          <IconButton className="bg-blue-600 w-[50px] h-[50px]" key={key()} onPress={() => {}}>
            <Ionicons name="bag-handle" size={25} color="white" />
          </IconButton>
          <IconButton className="bg-blue-600 w-[50px] h-[50px]" key={key()} onPress={() => {}}>
            <Ionicons name="calculator-outline" size={25} color="white" />
          </IconButton>
          <IconButton className="bg-blue-600 w-[50px] h-[50px]" key={key()} onPress={() => {}}>
            <Ionicons name="bug-sharp" size={25} color="white" />
          </IconButton>
          <IconButton className="bg-blue-600 w-[50px] h-[50px]" key={key()} onPress={() => {}}>
            <Ionicons name="thumbs-down" size={25} color="white" />
          </IconButton>
        </View>

        <TextField isError label="Label" placeholder="Placeholder" />

        <TextField label="Label" placeholder="Disabled text field" editable={false} />

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

      </View>
    </Scaffold>
  )
}

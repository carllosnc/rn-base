import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export function Drawer({ navigation }: DrawerContentComponentProps){
  return (
    <SafeAreaProvider>
      <SafeAreaView className="p-[20px]">
        <View>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.Provident tempore dolore quisquam sunt impedit quos a tenetur amet ratione animi? Incidunt nisi a mollitia enim assumenda autem facere animi doloremque?
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
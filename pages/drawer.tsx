import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export function Drawer({ navigation }: DrawerContentComponentProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView className={'flex-1 bg-white p-[20px] dark:bg-neutral-800'}>
        <View>
          <Text className="text-black dark:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.Provident tempore dolore
            quisquam sunt impedit quos a tenetur amet ratione animi? Incidunt nisi a mollitia enim
            assumenda autem facere animi doloremque?
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

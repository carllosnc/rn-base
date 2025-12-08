import { View, Modal, Pressable } from "react-native"
import { ReactElement, ReactNode, useState } from "react"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { clsx } from "clsx";
import { scheduleOnRN } from "react-native-worklets";

interface BottomSheetProps {
  target: ReactElement
  children: ReactNode
  containerClass?: string,
  contentClass?: string
  height?: number
}

export function BottomSheet(
  { target, children, containerClass, contentClass, height = 700 }: BottomSheetProps
){
  const translateY = useSharedValue(height)
  const [modalVisible, setModalVisible] = useState(false)

  const animatedStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: translateY.value }] }
  })

  function show(){
    setModalVisible(true)
    translateY.value = withSpring(0)
  };

  function hide(){
    translateY.value = withTiming(height, {duration: 300}, (isFinished) => {
      if(isFinished) scheduleOnRN(setModalVisible, false)
    })
  }

  const containerStyle = clsx(
    "bg-black/75 blur-lg h-full w-fit flex justify-end",
    containerClass
  )

  const contentStyle = clsx(
    "w-full gap-[10px] rounded-tl-[20px] rounded-tr-[20px] max-h-full bg-white dark:bg-neutral-800",
    contentClass
  )

  return (
    <View>
      <Modal
        allowSwipeDismissal={true}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        hardwareAccelerated={true}
        onRequestClose={() => {
          hide()
        }}
        statusBarTranslucent={true}>
        <Pressable onPress={hide}  className={containerStyle}>
          <Pressable>
            <Animated.View className={contentStyle} style={[{height: height}, animatedStyle]}>
              {children}
            </Animated.View>
          </Pressable>
        </Pressable>
      </Modal>

      <Pressable
        onPress={show}
      >
        {target}
      </Pressable>
    </View>
  )
}
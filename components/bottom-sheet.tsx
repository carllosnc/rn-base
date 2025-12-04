import { View, Modal, Pressable } from "react-native";
import { ReactElement, ReactNode, useState } from "react";
import { clsx } from "clsx";

interface BottomSheetProps {
  target: ReactElement
  children: ReactNode
  containerClass?: string,
  contentClass?: string
}

export function BottomSheet(
  { target, children, containerClass, contentClass }: BottomSheetProps
){
  const [modalVisible, setModalVisible] = useState(false)

  const containerStyle = clsx(
    "bg-black/75 blur-lg h-full w-fit flex justify-end",
    containerClass
  )

  const contentStyle = clsx(
    "w-full p-[20px] gap-[10px] rounded-tl-[20px] rounded-tr-[20px] min-h-[80%] max-h-full bg-white dark:bg-neutral-800",
    contentClass
  )

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        hardwareAccelerated={true}
        statusBarTranslucent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}>
        <Pressable onPress={() => { setModalVisible(false) }}  className={containerStyle}>
          <Pressable className={contentStyle}>
            { children }
          </Pressable>
        </Pressable>
      </Modal>

      <Pressable
        onPress={() => {
          setModalVisible(true)
        }}
      >
        {target}
      </Pressable>
    </View>
  )
}
import { View, Modal, Pressable } from "react-native";
import { ReactElement, ReactNode, useState } from "react";
import { clsx } from "clsx";

interface DialogProps {
  target: ReactElement
  children: ReactNode
  containerClass?: string,
  contentClass?: string
}

export function Dialog({ target, children, containerClass, contentClass }: DialogProps){
  const [modalVisible, setModalVisible] = useState(false)

  const containerStyle = clsx(
    "bg-black/60 dark:bg-neutral-400/70 blur-lg h-full w-fit p-[20px] flex justify-center items-center",
    containerClass
  )

  const contentStyle = clsx(
    "w-full p-[20px] max-w-[360px] gap-[10px] rounded-lg min-h-[150px] max-h-full bg-white dark:bg-neutral-800",
    contentClass
  )

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
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
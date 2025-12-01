import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { TouchableOpacityProps, Text, TouchableOpacity, View } from "react-native";

interface ListTileProps extends TouchableOpacityProps {
  listTileClass?: string
  title?: string
  titleClass?: string
  subTitle?: string
  subTitleClass?: string
  leftContent?: ReactElement
  rightContent?: ReactElement
}

export function ListTile ({
  listTileClass,
  title = "Title",
  titleClass,
  subTitle,
  subTitleClass,
  leftContent,
  rightContent,
  ...props
}: ListTileProps){
  const listTileStyle = clsx(
    "border-b border-neutral-200 gap-[15px] items-center w-full py-[14px] px-[5px] flex flex-row",
    listTileClass
  )

  const titleStyle = clsx(
    "font-bold text-[15px]",
    titleClass
  )

  const subTitleStyle = clsx(
    "text-neutral-500 text-[14px]",
    subTitleClass
  )

  return (
    <TouchableOpacity
      {...props}
      className={listTileStyle}
      activeOpacity={0.7}
      >
      { leftContent && leftContent }
      <View className="flex-1">
        <Text className={titleStyle}>{title}</Text>
        { subTitle && <Text className={subTitleStyle}>{subTitle}</Text> }
      </View>
      { rightContent && rightContent }
    </TouchableOpacity>
  )
}
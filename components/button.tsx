import { ReactNode } from "react";
import { TouchableOpacityProps, Text, ActivityIndicator, View, TouchableOpacity } from "react-native";
import { clsx } from 'clsx';

interface ButtonProps extends TouchableOpacityProps {
  leftIcon?: ReactNode
  children: ReactNode
  className?: string
  isLoading?: boolean
  disabled?: boolean
}

export function Button({
  children,
  className,
  leftIcon,
  isLoading,
  disabled,
  ...props
} : ButtonProps){

  const buttonStyle = clsx(
    "px-[20px] bg-blue-600 flex justify-center items-center w-auto py-[9px] rounded-full text-primary-content",
    { "bg-black": isLoading },
    className
  )

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{alignSelf: 'flex-start'}}
      onPress={() => {}}
      className={buttonStyle}
      disabled={isLoading || disabled}
      {...props}
    >
      <View className="flex-row gap-[5px] items-center">
        { leftIcon && leftIcon }
        <Text className="text-white font-bold">{ children }</Text>
        { isLoading && <ActivityIndicator className="ml-[10px]" size="small" color="white" /> }
      </View>
    </TouchableOpacity>
  )
}

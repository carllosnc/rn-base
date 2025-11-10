import { ReactNode } from "react";
import { TouchableHighlight, TouchableHighlightProps, Text, ActivityIndicator, View } from "react-native";
import { clsx } from 'clsx';

interface ButtonProps extends TouchableHighlightProps {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
  className?: string
  isLoading?: boolean
  disabled?: boolean
}

export function Button({ children, className, leftIcon, rightIcon, isLoading, disabled, ...props } : ButtonProps){
  return (
    <TouchableHighlight
      style={{alignSelf: 'flex-start'}}
      onPress={() => {}}
      className={clsx("px-[20px] bg-primary flex justify-center items-center w-auto py-[9px] rounded-full text-primary-content", className)}
      disabled={isLoading || disabled}
      {...props}
    >
      <View className="flex-row gap-[5px] items-center">
        { leftIcon }
        <Text className="text-white font-bold">{ children }</Text>
        { isLoading && <ActivityIndicator className="ml-[10px]" size="small" color="white" /> }
      </View>
    </TouchableHighlight>
  )
}

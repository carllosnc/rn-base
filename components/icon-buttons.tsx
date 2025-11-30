import { clsx } from "clsx";
import { ReactNode } from "react";
import { TouchableOpacityProps, TouchableOpacity } from "react-native";

interface IconButtonProps extends TouchableOpacityProps {
  className?: string
  children: ReactNode
}

export function IconButton({ className, children, ...props }: IconButtonProps){
  const iconButtonStyle = clsx(
    "flex h-[34px] w-[34px] items-center justify-center rounded-full",
    className
  )

  return  (
    <TouchableOpacity
      activeOpacity={0.7}
      className={iconButtonStyle}
      {...props}
    >
      { children }
    </TouchableOpacity>
  )
}

import { clsx } from 'clsx'
import { Text, TextProps } from 'react-native'

interface PProps extends TextProps {
  children: any
  className?: string
}

export function P({ children, className, ...props }: PProps){
  const pStyle = clsx("text-black dark:text-neutral-400", className)

  return (
    <Text className={pStyle} {...props}>
      {children}
    </Text>
  )
}

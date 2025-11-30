import { clsx } from 'clsx'
import { Text, TextProps } from 'react-native'

interface PProps extends TextProps {
  children: string
  className?: string
}

export function P({ children, className, ...props }: PProps){
  return (
    <Text className={clsx("text-black dark:text-neutral-400", className)} {...props}>
      {children}
    </Text>
  )
}

import { clsx } from 'clsx';
import { TextInput, View } from 'react-native';
import { type TextInputProps } from 'react-native';
import { P } from './text';

interface TextFieldProps extends TextInputProps {
  label?: string;
  isError?: boolean;
  errorMessage?: string;
  className?: string;
}

export function TextField({
  label,
  className,
  isError = false,
  errorMessage,
  ...props
}: TextFieldProps) {
  const textInputClasses = clsx(
    'px-[12px] py-[10px] border border-neutral-400 dark:border-neutral-600 rounded-[8px] placeholder:text-neutral-400',
    { 'border-red-600 bg-red-50 dark:bg-neutral-900 dark:border-red-300': isError },
    className
  );

  return (
    <View className="flex-1 gap-[5px]">
      {label && <P className="text-[12px]">{label}</P>}
      <TextInput className={textInputClasses} {...props} />

      {errorMessage && (
        <P className="text-[12px] text-red-600 dark:text-red-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </P>
      )}
    </View>
  );
}

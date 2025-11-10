import { clsx } from 'clsx';
import { TextInput, View, Text } from 'react-native';
import { type TextInputProps } from 'react-native';

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
    'px-[12px] py-[10px] border border-neutral-400 rounded-[8px] placeholder:text-neutral-400',
    { 'border-red-600 bg-red-50': isError },
    className
  );

  return (
    <View className="flex-1 gap-[5px]">
      {label && <Text className="text-[12px]">{label}</Text>}
      <TextInput className={textInputClasses} {...props} />

      {errorMessage && (
        <Text className="text-[12px] text-red-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      )}
    </View>
  );
}

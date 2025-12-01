import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { IconButton } from './icon-buttons';
import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'hooks/color-theme-hook';

type TopBarProps = {
  title: string
  titleLimitChars?: number
  titleClass?: string
  topBarClass?: string
  backButton?: boolean
  drawerButton?: boolean
  actions?: ReactNode[]
};

export function TopBar({
  title,
  titleClass,
  topBarClass,
  drawerButton = false,
  titleLimitChars = 30,
  backButton = false, actions,
  }: TopBarProps) {
  const navigation = useNavigation()
  const { contentColor } = useTheme()

  function getTitle() {
    if (title.length > titleLimitChars) {
      return `${title.slice(0, titleLimitChars)}...`;
    }
    return title;
  }

  const titleClasses = clsx(
    "truncate text-[16px] font-bold dark:text-white",
    titleClass
  );

  const topBarClasses = clsx(
    "bg-white dark:bg-neutral-800 flex h-[60px] w-full flex-row items-center justify-between px-[12px] pl-[20px]",
    topBarClass
  )

  return (
    <View className={topBarClasses}>
      <View className="flex flex-row items-center gap-[10px]">

        { drawerButton && (
          <TouchableOpacity
            className='py-[5px]'
            activeOpacity={0.7}
            onPress={() => { (navigation as any).openDrawer() }}>
            <Ionicons name="menu-outline" size={32} color={contentColor} />
          </TouchableOpacity>
        )}

        {backButton && (
          <IconButton>
            <Ionicons name="chevron-back" size={18} color={contentColor} />
          </IconButton>
        )}

        <View className="flex h-[30px] justify-center">
          <Text className={titleClasses}>{getTitle()}</Text>
        </View>
      </View>

      <View className="flex flex-row items-center gap-[5px]">
        {actions?.map((item, index) => item)}
      </View>
    </View>
  );
}

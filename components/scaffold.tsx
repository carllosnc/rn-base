import { StatusBar } from "expo-status-bar";
import { Fragment, ReactNode } from "react";
import { ScrollView, KeyboardAvoidingView } from "react-native";
import { SafeAreaProvider, SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";
import colors from '../settings/colors.json'

interface ScaffoldProps extends SafeAreaViewProps {
  statusBarColor?: string,
  statusBarStyle?: 'light' | 'dark' | 'auto' | 'inverted'
  children: ReactNode
  topBar: ReactNode
}

export function Scaffold({
  statusBarColor = colors.base,
  statusBarStyle = "dark",
  topBar,
  children,
  ...props
}: ScaffoldProps){
  return (
    <SafeAreaProvider>
      <SafeAreaView {...props} >
        <KeyboardAvoidingView>
            <StatusBar style={statusBarStyle} backgroundColor={statusBarColor} />
            { topBar }

            <ScrollView>
              <Fragment>
                { children }
              </Fragment>
            </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

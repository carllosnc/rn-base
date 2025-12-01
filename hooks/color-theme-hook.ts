import { useColorScheme } from "react-native";

export function useTheme(){
  let colorScheme = useColorScheme()
  let contentColor = "black"
  let drawerColor = "white"

  if(colorScheme === "dark"){
    contentColor = "white"
    drawerColor = "black"
  }

  return {
    contentColor,
    drawerColor
  }
}

export function useColor({light, dark}: {light: string, dark: string}){
  let colorScheme = useColorScheme()
  let color = light

  if(colorScheme === "dark"){
    color = dark
  }

  return color
}
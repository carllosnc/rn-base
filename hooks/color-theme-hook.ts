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
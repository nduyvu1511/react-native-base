import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type StackParamsList = {
  Home: undefined
}

export type StackParamsListKey = keyof StackParamsList
export type Navigation = NativeStackNavigationProp<StackParamsList, keyof StackParamsList>

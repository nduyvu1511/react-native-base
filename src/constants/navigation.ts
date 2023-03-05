import { StackParamsList } from '@/types'

type NavigationType = {
  [property in keyof StackParamsList]: keyof StackParamsList
}
export const TABS = {
  Home: 'HomeTab',
}

export const NAVIGATION: NavigationType = {
  Home: 'Home',
}

export const SCREEN_HIDE_TAB_BAR = ['']

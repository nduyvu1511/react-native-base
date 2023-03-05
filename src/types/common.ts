export interface Option<T> {
  label: string
  value: T
}

export interface PayloadType<T> {
  payload: T
}

export type OnSubmitForward = {
  onSubmit: () => void
}

export type OnResetForward = {
  onReset: () => void
}

export type OnDismissForward = {
  onDismiss: (cb: (_: boolean) => void) => void
}

export type ForwardModalRef = {
  onClose: () => void
  onOpen: () => void
}

export type ForwardFormRef = OnSubmitForward & OnResetForward & Partial<OnDismissForward>

export interface DateRange {
  startDate: Date | string
  endDate: Date | string
}

export interface IdAndName {
  id: number | string
  name: string
}

export type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>

export interface LngLat {
  longitude: number
  latitude: number
}

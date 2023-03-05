import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type State = {
  backdropVisible: boolean
  setBackdropVisible: (_: boolean) => void
}

export const useComonSlice = create<State, [['zustand/devtools', never], ['zustand/immer', never]]>(
  devtools(
    immer((set) => ({
      backdropVisible: false,
      setBackdropVisible: (backdropVisible: boolean) =>
        set((state) => {
          state.backdropVisible = backdropVisible
        }),
    }))
  )
)

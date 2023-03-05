import { ArrowRightIcon } from '@/assets'
import { ModalSelectItem, TextInput, TextInputProps } from '@/components'
import { useModal } from '@/hooks'
import { IdAndName } from '@/types'
import React from 'react'
import { Modal } from '../../modal'

interface InputSelectModalItemProps extends TextInputProps {
  data: IdAndName[] | undefined
}

export function InputSelectModalItem({ data, ...attributes }: InputSelectModalItemProps) {
  const { onClose, onOpen, isVisible } = useModal()

  return (
    <>
      <TextInput
        {...attributes}
        editable={false}
        pointerEvents="none"
        onPress={onOpen}
        rightIcon={<ArrowRightIcon />}
      />

      <Modal onDismiss={onClose} isVisible={isVisible} style={{ width: 320, height: 400 }}>
        <ModalSelectItem title={attributes?.label || ''} data={data} />
      </Modal>
    </>
  )
}

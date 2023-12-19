import type { IProduct } from '@/types'
import { create } from 'zustand'

type TUsePreviewModalStore = {
	isOpen: boolean
	product?: IProduct
	onOpen: (product: IProduct) => void
	onClose: () => void
}

const usePreviewModal = create<TUsePreviewModalStore>((set) => ({
	isOpen: false,
	product: undefined,
	onOpen: (product?: IProduct) => set(() => ({ isOpen: true, product })),
	onClose: () => set(() => ({ isOpen: false })),
}))

export { usePreviewModal }

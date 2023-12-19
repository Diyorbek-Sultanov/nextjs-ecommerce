'use client'

import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog'

type TModalProps = {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

const Modal: React.FC<TModalProps> = ({ children, isOpen, onClose }) => {
	return (
		<Dialog open={isOpen} onOpenChange={onClose} modal>
			<DialogOverlay>
				<DialogContent className='w-full max-w-3xl overflow-hidden rounded-lg'>
					{children}
				</DialogContent>
			</DialogOverlay>
		</Dialog>
	)
}

export default Modal

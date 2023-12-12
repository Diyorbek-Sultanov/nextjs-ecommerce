import { cn } from '@/lib/utils'
import type { MouseEventHandler } from 'react'

type TIconButtonProps = {
	className?: string
	icon: React.ReactElement
	onClick?: MouseEventHandler<HTMLButtonElement | undefined>
}

const IconButton: React.FC<TIconButtonProps> = ({
	icon,
	className,
	onClick,
}) => {
	return (
		<button
			className={cn(
				'rounded-full bg-white hover:scale-110 transition flex items-center justify-center border shadow-md',
				className
			)}
			onClick={onClick}>
			{icon}
		</button>
	)
}

export default IconButton

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
	({ children, className, type = 'button', disabled }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(
					'w-auto disabled:cursor-not-allowed disabled:opacity-50 flex items-center',
					className
				)}
				type={type}
				disabled={disabled}>
				{children}
			</button>
		)
	}
)

Button.displayName = 'Button'

export default Button

import { cn } from '@/lib/utils'

interface ISkeleton extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton: React.FC<ISkeleton> = ({ className, ...rest }) => {
	return (
		<div
			className={cn('animate-pulse rounded bg-gray-200', className)}
			{...rest}
		/>
	)
}

export default Skeleton

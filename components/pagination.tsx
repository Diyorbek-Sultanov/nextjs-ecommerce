import Button from '@/components/ui/button'

type TPaginationProps = {
	totalPages?: number[]
}

const Pagination: React.FC<TPaginationProps> = ({ totalPages }) => {
	console.log(totalPages)

	return (
		<div className='flex items-center justify-center mt-8'>
			<ul className='flex items-center gap-3'>
				{totalPages?.map((page) => (
					<Button key={page}>{page}</Button>
				))}
			</ul>
		</div>
	)
}

export default Pagination

'use client'

import Button from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { IColor, ISize } from '@/types'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'

type TFilterProps = {
	valueKey: string
	data: (ISize | IColor)[]
	name: string
}

const Filter: React.FC<TFilterProps> = ({ data, valueKey, name }) => {
	const searchParams = useSearchParams()
	const router = useRouter()

	const selectedValue = searchParams.get(valueKey)

	const onClick = (id: string) => {
		const currentQuery = qs.parse(searchParams.toString())

		const query = {
			...currentQuery,
			[valueKey]: id,
		}

		if (currentQuery[valueKey] === id) {
			query[valueKey] = null
		}

		const url = qs.stringifyUrl(
			{
				url: window.location.href,
				query,
			},
			{ skipNull: true }
		)

		router.replace(url)
	}

	return (
		<div className='mb-8'>
			<h1 className='text-lg font-bold'>{name}</h1>
			<hr className='my-4' />
			<div className='flex flex-wrap gap-2'>
				{data.map((filter) => (
					<div key={filter.id} className='flex items-center'>
						<Button
							className={cn(
								'p-2 rounded-md border bg-white border-gray-300 text-sm text-gray-800',
								selectedValue === filter.id &&
									'bg-black text-white border-transparent'
							)}
							onClick={() => onClick(filter.id)}>
							{filter.name}
						</Button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Filter

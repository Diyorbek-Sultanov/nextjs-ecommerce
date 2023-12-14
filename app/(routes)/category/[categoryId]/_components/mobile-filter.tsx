'use client'

import IconButton from '@/components/icon-button'
import Button from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { IColor, ISize } from '@/types'
import { FilterIcon, X } from 'lucide-react'
import { useState } from 'react'
import Filter from './filter'

type TMobileFilters = {
	sizes: ISize[]
	colors: IColor[]
}

const MobileFilters: React.FC<TMobileFilters> = ({ sizes, colors }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<Button
				className='gap-x-2 lg:hidden flex border border-slate-400 font-medium rounded-md p-2'
				onClick={() => {
					console.log('click')
					setIsOpen(true)
				}}>
				Filters <FilterIcon size={20} />
			</Button>

			<div
				className={cn(
					'lg:hidden transition',
					isOpen ? 'opacity-100 z-40 relative' : 'opacity-0 -z-10'
				)}>
				<div
					className={cn(
						'transition',
						isOpen ? 'fixed inset-0 bg-black bg-opacity-25' : 'opacity-0 -z-10'
					)}
				/>
				<div
					className={cn(
						isOpen ? 'fixed inset-0 z-40 flex' : 'opacity-0 -z-10'
					)}>
					<div
						className={cn(
							isOpen
								? 'relative ml-auto flex h-full max-w-xs w-full flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition'
								: 'opacity-0 -z-10'
						)}>
						<div
							className={cn(
								isOpen
									? 'flex items-center justify-end px-4'
									: 'opacity-0 -z-10'
							)}>
							<IconButton
								icon={<X size={15} />}
								onClick={() => setIsOpen(false)}
								className='p-2'
							/>
						</div>
						{isOpen && (
							<div className='p-4'>
								<Filter valueKey='sizeId' name='Sizes' data={sizes} />
								<Filter valueKey='colorId' name='Colos' data={colors} />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default MobileFilters

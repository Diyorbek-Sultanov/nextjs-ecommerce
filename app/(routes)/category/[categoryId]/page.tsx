import { fetchCategory } from '@/actions/fetch-category'
import { fetchColors } from '@/actions/fetch-colors'
import { fetchSizes } from '@/actions/fetch-sizes'
import Billboards from '@/components/billboards'
import Container from '@/components/container'
import Filter from './_components/filter'
import FilteredProducts from './_components/filtered-products'
import MobileFilters from './_components/mobile-filter'

type TCategoryPageProps = {
	params: {
		categoryId: string
	}
}

const CategoryPage: React.FC<TCategoryPageProps> = async ({ params }) => {
	const category = await fetchCategory(params.categoryId)
	const sizes = await fetchSizes()
	const colors = await fetchColors()

	return (
		<div className='bg-white'>
			<Container>
				<Billboards data={category.billboard} />
				<div className='px-4 sm:px-6 lg:px-8 pb-24'>
					<div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
						<MobileFilters sizes={sizes} colors={colors} />

						<div className='hidden lg:block'>
							<Filter valueKey='sizeId' name='Sizes' data={sizes} />
							<Filter valueKey='colorId' name='Colos' data={colors} />
						</div>

						<FilteredProducts />
					</div>
				</div>
			</Container>
		</div>
	)
}

export default CategoryPage

import Container from '@/components/container'
import Link from 'next/link'
import MainNav from './main-nav'
import { fetchCategory } from '@/actions/fetch-categories'
import NavbarActions from './navbar-actions'

const Navbar: React.FC = async () => {
	const categories = await fetchCategory()

	return (
		<header className='border-b'>
			<Container>
				<div className='h-16 relative px-4 sm:px-6 lg:px-8 flex items-center'>
					<Link href={'/'} className='uppercase font-bold text-xl'>
						store
					</Link>
					<MainNav data={categories} />
					<NavbarActions />
				</div>
			</Container>
		</header>
	)
}

export default Navbar

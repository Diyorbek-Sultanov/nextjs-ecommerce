'use client'

import { Loader } from 'lucide-react'

const Spinner: React.FC = () => {
	return (
		<div className='flex items-center justify-center w-full'>
			<Loader className='h-5 w-5 animate-spin' />
		</div>
	)
}

export default Spinner

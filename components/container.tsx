'use client'

import type { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <div className='w-full max-w-7xl px-4 mx-auto'>{children}</div>
}

export default Container

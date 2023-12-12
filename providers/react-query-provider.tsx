'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { type FC, type PropsWithChildren, useState } from 'react'

const ReactQueryProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools
				initialIsOpen={false}
				position='bottom'
				buttonPosition='bottom-right'
			/>
		</QueryClientProvider>
	)
}

export default ReactQueryProvider

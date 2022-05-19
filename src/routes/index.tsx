import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import SearchPage from './SearchPage'
import SearchResultPage from './SearchResultPage'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='search/:keyword' element={<SearchResultPage />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App

import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import SearchPage from './SearchPage'
import SearchResultPage from './SearchResultPage'
import Header from 'components/Header'
import Footer from 'components/Footer'

import styles from './Routes.module.scss'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <QueryClientProvider client={queryClient}>
        <div className={styles.page}>
          <Header />
          <main className={styles.main}>
            <Routes>
              <Route path='/' element={<SearchPage />} />
              <Route path='search/:keyword' element={<SearchResultPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App

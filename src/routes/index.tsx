import { Routes, BrowserRouter, Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import SearchResultPage from './SearchResultPage'

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path='search/:keyword' element={<SearchResultPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

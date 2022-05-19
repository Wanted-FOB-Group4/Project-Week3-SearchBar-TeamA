import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './SearchBar.module.scss'

interface ISearchBar {
  keyword: string
  setKeyword: Dispatch<SetStateAction<string>>
}

const SearchBar = ({ keyword, setKeyword }: ISearchBar) => {
  const navigate = useNavigate()

  const handleKeywordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/search/${keyword}`)
  }

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value)
  }

  const handleKeywordClick = () => {
    navigate(`/search/${keyword}`)
  }

  return (
    <form className={styles.form} onSubmit={handleKeywordSubmit}>
      <input
        className={styles.input}
        type='search'
        placeholder='질환명을 입력해주세요.'
        value={keyword}
        onChange={handleKeywordChange}
      />
      <div className={styles.icon} />
      <button className={styles.button} type='button' onClick={handleKeywordClick}>
        검색
      </button>
    </form>
  )
}

export default SearchBar

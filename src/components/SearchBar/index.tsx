import { ChangeEvent, Dispatch, KeyboardEventHandler, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './SearchBar.module.scss'

interface ISearchBar {
  keyword: string
  setKeyword: Dispatch<SetStateAction<string>>
  handleKeyDown: any // KeyboardEventHandler<HTMLInputElement> | undefined
}

const SearchBar = ({ keyword, setKeyword, handleKeyDown }: ISearchBar) => {
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
        onKeyDown={handleKeyDown}
      />
      <div className={styles.icon}>
        <MagnifyingGlassIcon />
      </div>
      <button className={styles.button} type='button' onClick={handleKeywordClick}>
        검색
      </button>
    </form>
  )
}

export default SearchBar

import { ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './SearchBar.module.scss'
import { ISearchInputState, searchInput, setSearchInputValue } from 'store/slices/searchInputSlice'

const SearchBar = ({ onKeyPress }: { onKeyPress: React.KeyboardEventHandler<HTMLInputElement> }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputValue = useSelector(searchInput)

  const handleKeywordSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/search/${inputValue}`)
  }

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    dispatch(setSearchInputValue({ searchInputValue: value } as ISearchInputState))
  }

  return (
    <form className={styles.form} onSubmit={handleKeywordSubmit}>
      <div className={styles.icon}>
        <MagnifyingGlassIcon />
      </div>
      <input
        onKeyUp={onKeyPress}
        className={styles.input}
        type='search'
        placeholder='질환명을 입력해주세요.'
        value={inputValue}
        onChange={handleKeywordChange}
      />
      <button className={styles.button} type='submit'>
        검색
      </button>
    </form>
  )
}

export default SearchBar

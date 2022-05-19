import { ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { searchWord, ISearchState, setSearchWord } from 'store/slices/searchSlice'
import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './SearchBar.module.scss'

const SearchBar = ({ onKeyPress }: any) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const keyword = useSelector(searchWord)

  const handleKeywordSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/search/${keyword}`)
  }

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    dispatch(setSearchWord({ keyword: value } as ISearchState))
  }

  return (
    <form className={styles.form} onSubmit={handleKeywordSubmit}>
      <div className={styles.icon}>
        <MagnifyingGlassIcon />
      </div>
      <input
        onKeyDown={onKeyPress}
        className={styles.input}
        type='search'
        placeholder='질환명을 입력해주세요.'
        value={keyword}
        onChange={handleKeywordChange}
      />
      <button className={styles.button} type='submit'>
        검색
      </button>
    </form>
  )
}

export default SearchBar

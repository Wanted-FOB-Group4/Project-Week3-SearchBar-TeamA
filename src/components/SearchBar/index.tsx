import { ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { searchWord, ISearchState, setSearchToggle, setSearchWord } from 'store/slices/searchSlice'
import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './SearchBar.module.scss'

const SearchBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const keyword = useSelector(searchWord)

  const handleKeywordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/search/${keyword}`)
  }

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget

    dispatch(setSearchWord({ keyword: value } as ISearchState))

    if (value === '') {
      dispatch(setSearchToggle({ isOpen: false } as ISearchState))
      return
    }

    dispatch(setSearchToggle({ isOpen: true } as ISearchState))
  }

  const handleKeywordClick = () => {
    navigate(`/search/${keyword}`)
  }

  return (
    <form className={styles.form} onSubmit={handleKeywordSubmit}>
      <div className={styles.icon}>
        <MagnifyingGlassIcon />
      </div>
      <input
        className={styles.input}
        type='search'
        placeholder='질환명을 입력해주세요.'
        value={keyword}
        onChange={handleKeywordChange}
      />
      <button className={styles.button} type='button' onClick={handleKeywordClick}>
        검색
      </button>
    </form>
  )
}

export default SearchBar

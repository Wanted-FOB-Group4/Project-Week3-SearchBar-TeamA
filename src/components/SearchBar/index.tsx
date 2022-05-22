import { ChangeEvent, FormEvent, SetStateAction, Dispatch } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { searchWord, recommendsCount, setSearchWord, ISearchState } from 'store/slices/searchSlice'
import { ISearchInputState, searchInput, setSearchInputValue } from 'store/slices/searchInputSlice'
import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './SearchBar.module.scss'

interface ISearchBar {
  keywordIndex: number
  setKeywordIndex: Dispatch<SetStateAction<number>>
}

const SearchBar = ({ keywordIndex, setKeywordIndex }: ISearchBar) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputValue = useSelector(searchInput)
  const keyword = useSelector(searchWord)
  const count = useSelector(recommendsCount)

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    dispatch(setSearchInputValue({ searchInputValue: value } as ISearchInputState))
  }

  const handleKeywordSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue === '') return
    navigate(`/search/${inputValue}`)
    dispatch(setSearchWord({ keyword: '' } as ISearchState))
  }

  const handleKeyUp = (e: { key: string }) => {
    if (
      e.key !== 'Backspace' &&
      e.key !== 'ArrowDown' &&
      e.key !== 'ArrowUp' &&
      e.key !== 'Escape' &&
      e.key !== 'Enter'
    ) {
      setKeywordIndex(-1)
      dispatch(setSearchWord({ keyword: inputValue } as ISearchState))
      dispatch(setSearchInputValue({ searchInputValue: inputValue } as ISearchInputState))
      return
    }

    if (keyword === '') return

    if (e.key === 'Backspace') {
      setKeywordIndex(-1)
      dispatch(setSearchWord({ keyword: inputValue } as ISearchState))
      dispatch(setSearchInputValue({ searchInputValue: inputValue } as ISearchInputState))
      return
    }

    if (e.key === 'ArrowDown') {
      if (keywordIndex > count - 2) {
        setKeywordIndex(0)
        return
      }

      setKeywordIndex((prevState: number) => prevState + 1)
      return
    }

    if (e.key === 'ArrowUp') {
      if (keywordIndex <= 0) {
        setKeywordIndex(count - 1)
        return
      }

      setKeywordIndex((prevState: number) => prevState - 1)
      return
    }

    if (e.key === 'Escape') {
      setKeywordIndex(-1)
      dispatch(setSearchWord({ keyword: '' } as ISearchState))
      dispatch(setSearchInputValue({ searchInputValue: '' } as ISearchInputState))
    }
  }

  return (
    <form className={styles.form} onSubmit={handleKeywordSubmit}>
      <div className={styles.icon}>
        <MagnifyingGlassIcon />
      </div>
      <input
        onKeyUp={handleKeyUp}
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

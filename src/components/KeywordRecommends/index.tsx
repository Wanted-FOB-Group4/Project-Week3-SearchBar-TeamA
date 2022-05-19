import { Dispatch, SetStateAction } from 'react'
import { IResultDataList } from 'types/search'
import KeywordRecommendItem from 'components/KeywordRecommendItem'

import styles from './KeywordRecommends.module.scss'

interface IKeywordRecommends {
  resultDataList: IResultDataList[]
  setKeyword: Dispatch<SetStateAction<string>>
  keywordIndex: number
  setTarget: any
  showKeywordForm: boolean
  setShowKeywordForm: Dispatch<SetStateAction<boolean>>
}

const KeywordRecommends = ({
  resultDataList,
  setKeyword,
  keywordIndex,
  setTarget,
  showKeywordForm,
  setShowKeywordForm,
}: IKeywordRecommends) => {
  return (
    <div className={styles.keywordListForm}>
      <h5 className={styles.searchKeyword}>추천 검색어</h5>
      <ul className={styles.list} ref={setTarget}>
        {resultDataList.length === 0 ? (
          <div className={styles.noResult}>결과가 없습니다</div>
        ) : (
          resultDataList
            .slice(0, 7)
            .map((resultData: IResultDataList, idx) => (
              <KeywordRecommendItem
                key={resultData.id}
                setKeyword={setKeyword}
                resultData={resultData}
                isFocusTrue={keywordIndex === idx}
                showKeywordForm={showKeywordForm}
                setShowKeywordForm={setShowKeywordForm}
              />
            ))
        )}
      </ul>
    </div>
  )
}

export default KeywordRecommends

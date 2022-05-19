import { Dispatch, SetStateAction } from 'react'
import { IResultDataList } from 'types/search'
import KeywordRecommendItem from 'components/KeywordRecommendItem'

import styles from './KeywordRecommends.module.scss'

interface IKeywordRecommends {
  resultDataList: IResultDataList[]
  setKeyword: Dispatch<SetStateAction<string>>
}

const KeywordRecommends = ({ resultDataList, setKeyword }: IKeywordRecommends) => {
  return (
    <div className={styles.keywordListForm}>
      <h5 className={styles.searchKeyword}>추천 검색어</h5>
      <ul className={styles.list}>
        {resultDataList.length === 0 ? (
          <div className={styles.noResult}>결과가 없습니다</div>
        ) : (
          resultDataList
            .slice(0, 7)
            .map((resultData: IResultDataList) => (
              <KeywordRecommendItem key={resultData.id} setKeyword={setKeyword} resultData={resultData} />
            ))
        )}
      </ul>
    </div>
  )
}

export default KeywordRecommends
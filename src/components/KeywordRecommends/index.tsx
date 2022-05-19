import { IResultDataList } from 'types/search'
import KeywordRecommendItem from 'components/KeywordRecommendItem'

import styles from './KeywordRecommends.module.scss'

interface IKeywordRecommends {
  resultDataList: IResultDataList[]
  keywordIndex: number
  setTarget: any
}

const KeywordRecommends = ({ resultDataList, keywordIndex, setTarget }: IKeywordRecommends) => {
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
              <KeywordRecommendItem key={resultData.id} resultData={resultData} isFocusTrue={keywordIndex === idx} />
            ))
        )}
      </ul>
    </div>
  )
}

export default KeywordRecommends

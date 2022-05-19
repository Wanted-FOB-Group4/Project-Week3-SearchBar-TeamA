import { IDisease } from 'types/search'
import KeywordRecommendItem from 'components/KeywordRecommendItem'

import styles from './KeywordRecommends.module.scss'

interface IKeywordRecommends {
  data: IDisease[]
  keywordIndex: number
  setTarget: any
}

const KeywordRecommends = ({ data, keywordIndex, setTarget }: IKeywordRecommends) => {
  return (
    <div className={styles.keywordListForm}>
      <ul className={styles.list} ref={setTarget}>
        {data?.map((resultData: IDisease, idx) => (
          <KeywordRecommendItem key={resultData.sickCd} resultData={resultData} isFocusTrue={keywordIndex === idx} />
        ))}
      </ul>
    </div>
  )
}

export default KeywordRecommends

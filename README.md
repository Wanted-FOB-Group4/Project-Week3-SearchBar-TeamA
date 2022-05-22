# SearchBar

퍼지 문자열 검색을 이용하여 검색어를 추천해주는 React 앱입니다. 

## Deploy

[배포 주소](https://search-team4a.netlify.app/)

## 실행 방법

1. `git clone https://github.com/Wanted-FOB-Group4/Project-Week3-SearchBar-TeamA.git`
2. `npm i`
3. `npm start`


## Project Tree

```
📦server
 ┣ 📜app.js
 ┗ 📜fuzzy.js
```

```
📦src
 ┣ 📂assets
 ┃ ┗ 📂svgs
 ┃ ┃ ┣ 📜bannerImage.svg
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┣ 📜logo.svg
 ┃ ┃ ┗ 📜search.svg
 ┣ 📂components
 ┃ ┣ 📂Banner
 ┃ ┃ ┣ 📜Banner.module.scss
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜Footer.module.scss
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.module.scss
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂KeywordRecommendItem
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜KeywordRecommendItem.module.scss
 ┃ ┣ 📂KeywordRecommendList
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜KeywordRecommendList.module.scss
 ┃ ┗ 📂SearchBar
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜SearchBar.module.scss
 ┣ 📂hooks
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜useQueryDebounce.ts
 ┣ 📂routes
 ┃ ┣ 📂SearchPage
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜SearchPage.module.scss
 ┃ ┣ 📂SearchResultPage
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜SearchResultPage.module.scss
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜Routes.module.scss
 ┣ 📂services
 ┃ ┗ 📜search.ts
 ┣ 📂store
 ┃ ┣ 📂slices
 ┃ ┃ ┣ 📜searchInputSlice.ts
 ┃ ┃ ┗ 📜searchSlice.ts
 ┃ ┗ 📜store.ts
 ┣ 📂styles
 ┃ ┣ 📂base
 ┃ ┃ ┣ 📜_fonts.scss
 ┃ ┃ ┣ 📜_more.scss
 ┃ ┃ ┗ 📜_reset.scss
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜_colors.scss
 ┃ ┃ ┣ 📜_levels.scss
 ┃ ┃ ┗ 📜_sizes.scss
 ┃ ┣ 📜index.js
 ┃ ┗ 📜index.scss
 ┣ 📂types
 ┃ ┗ 📜search.d.ts
 ┣ 📂utils
 ┃ ┗ 📜fuzzySearch.ts
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┗ 📜reportWebVitals.ts
```


## Core characteristics

## 화면 예시

### 검색

### 캐싱

### 결과 페이지

### 다른 예시 화면들

## 구현한 방법과 이유, 어려웠던 점

### Common

- 팀원 전원이 redux toolkit과 react-query에 대한 경험이 없거나 이해도가 부족하여개념에 대해 숙지하고 바로 적용해야 해서 다소 급하게 진행되야 했던 게 어려웠습니다. 공식 문서를 보며 이것저것 실험을 해보고 필요한 부분을 적용하는 식으로 진행했습니다.

### SearchPage

- 검색창(`SearchBar`)과 입력 값에 따라 추천 검색어 목록(`KeywordRecommends`) 렌더링합니다.
- 쓰인 각 컴포넌트는 `SearchResultPage`에서도 재사용됩니다.

### SearchResultPage

- 검색이 성공적으로 이루어졌음을 나타내기 위해 부가적으로 검색 결과에 대한 페이지를 만들었습니다. 
- 입력받은 검색어에 대한 페이지로 동적으로 라우팅됩니다. e.g., `/search/:keyword`

### SearchBar

- 검색창에서 일어날 수 있는 각 액션에 따른 이벤트 핸들러를 설정하였습니다.
  - `handleKeywordChange`: 검색어 변경을 감지합니다.
  - `handleKeywordSubmit`: 검색어를 제출하여 검색 결과 페이지로 라우팅합니다.
  - `handleKeyUp`: 검색창에서의 각 키 이벤트에 따라 액션을 처리합니다.
    - 값을 입력중일 땐 값에 맞추어 중앙 저장소에 있는 검색어 값을 업데이트 합니다.
    - 위, 아래 방향키를 누르면 추천 검색어 목록 안에서 검색할 타겟 검색어로 이동합니다.

### KeywordRecommendsList

- React Query를 이용하여 입력된 검색어에 따라 추천 검색어 목록을 불러옵니다.
  - 너무 잦은 API 요청을 방지하기 위해 디바운싱을 적용했습니다. 
  - 추천 검색어 목록의 최대 인덱스를 적용하기 위해 쿼리 요청 성공시 추천 검색어의 개수를 업데이트합니다.
  - 로딩 상태이거나 추천 검색어가 없는 경우 그에 맞는 결과를 렌더링합니다.
   - 컴포넌트를 반환하는 부분을 `useMemo`로 감싸 렌더링 부분을 파악하기 편하도록 했습니다.

### KeywordRecommendItem

- 검색창의 값에 따라 각 추천 검색어를 하이라이트하여 렌더링합니다.
- 각 검색어 아이템을 클릭하면 해당 검색어의 결과 페이지로 라우팅합니다.

### store

- 검색창에 입력되고 있는 값 그 자체와 `useQuery`이 반응하게 하는 검색어를 구분하여 `searchInputSlice`와 `searchSlice` 파일로 분류하였습니다.

## Design Reference

https://clinicaltrialskorea.com/

## Tech & Libraries

서버 및 API 통신 관련
- axios
- cors
- express
- react-query

라우팅
- react-router-dom

스타일
- scss
- css module
- classnames

중앙 저장소
- react-redux
- redux toolkit

코딩 컨벤션
- eslint
- prettier
- stylelint

기타
- html-react-parser: `dangerouslySetInnerHTML`의 안전한 대체제
- lodash.escaperegexp: 퍼지 문자열 검색을 위한 정규 표현식

## Contributors

- [김하늘](https://github.com/lazy-sky)
- [양한별](https://github.com/han-byul-yang)
- [이근영](https://github.com/Keunyeong) 
- [이우진](https://github.com/WOOJINLEEdev)

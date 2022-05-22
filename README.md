# SearchBar

퍼지 문자열 검색을 이용하여 검색어를 추천해주는 React 앱입니다. 

## Deploy

[배포 주소](https://search-team4a.netlify.app/)
- 깃헙 code의 git url을 복사한다. 
- 터미널에서 git clone을 받는다.
- npm install을 한다.
- npm start를 한다. 

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

## 실행 방법

## 구현한 방법과 이유, 어려웠던 점

### SearchPage

### SearchResultPage

- 검색이 성공적으로 이루어졌음을 나타내기 위해 부가적으로 검색 결과에 대한 페이지를 만들었습니다. 
- 입력받은 검색어에 대한 페이지로 동적으로 라우팅됩니다. e.g., `/search/:keyword`

### SearchBar

### KeywordRecommendsList

### KeywordRecommendItem

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

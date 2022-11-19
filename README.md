 <div align="center">
 <h1> 신조어 번역 서비스 '잼민어 번역기'</h1> 
 <h2>"야, 너두 잼민이 될 수 있어!"</h2>
 </div>

---

## 서비스 소개

<br/>

- **서비스 가치**  
   하루가 멀다하고 변화하는 신조어 하루가 멀다하고 변화하는 신조어의 의미와 활용방법을, 쉽고 빠르게 알 수 있습니다.

<br/>

- **서비스 문제정의**  
  하루가 멀다하고 변화하는 신조어, 무슨뜻인지 알기 어렵고 세대간의 소통이 점점 힘들어지지 않나요?  
  여러 검색엔진을 사용하지만, 지나치게 많은 정보(ex.블로그 글, 유튜브 영상 ect.)를 마주해야 해 원하는 정보에 곧바로 접근하지 못하는 문제를 겪으시지 않으셨나요?

<br/>

- **서비스 타겟정의**  
  저희는 이런 분들을 위한 서비스입니다.  
  신세대 용어 혹은 유행어의 의미를 이해하지 못해 검색해본 경험이 있는 사람.  
  신세대 용어 혹은 유행어를 따라하기 위해 사용 방법을 물어보거나 찾아본 적 있는 사람.

<br/>

## 개발자 소개 및 역할 분배

|                     김형겸                      |                    정재욱                     |                       류성경                        |
| :---------------------------------------------: | :-------------------------------------------: | :-------------------------------------------------: |
| [@Hyeongkyeom Kim](https://github.com/Brokyeom) | [@Jaewook Jeong](https://github.com/woogisea) | [@Seonggyeong Ryu](https://github.com/Seong-Gyeong) |
|                    형겸담당                     |                   재욱담당                    |                      성경담당                       |

## 협업 방식

### 1. ⌨️ Code Convention

- ESLint, prettier 사용
- 폴더명은 소문자로 시작
- Event handler 이름 : `on`으로 시작, 복잡한 네이밍의 경우 `handle~`
- 배열과 관련된 변수명은 `__List` (ex. reservationList)
- 변수, 함수 : Camel case 사용
- container와 wrapper 구분해서 사용하기
  `container`: <b>여러 개의 요소</b>를 감싸는 div.
  `wrapper`: <b>단일 요소</b>의 레이아웃을 위한 div.
- 함수
  - 함수명은 동사로 시작
  - `const 함수명 = () => {}` 형식으로 작성
- 컴포넌트
  - 컴포넌트를 정의한 파일 : Pascal case 사용
  - `function 컴포넌트명() {}` 형식으로 작성
- styled-components
  - 코드 하단에 작성
  - px 대신 rem 사용 (ex. 10px = 1rem)
  - 항상 맨 앞에 `St` 붙여주기
  - 최상단 태그 이름은 `St[컴포넌트명]`
    ```jsx
    function Home() {
      return <StHome>...</StHome>;
    }
    ```
  - 색상은 항상 아래처럼 ThemeProvider 활용해서 설정
    ```jsx
    button {
      background-color: ${(props) => props.theme.colors.blue01};
      color: ${(props) => props.theme.colors.gray700};
    }
    ```
- API 호출 함수 : api.js에 작성하기
- 피그마에서 svg를 export해서 `src/assets/icons` 혹은 `src/assets/images`에 저장.

  <br/>

## 2. commit message

```
- init: 개발 환경 초기 세팅
- feat: 새로운 기능 추가
- design: UI를 위한 스타일링
- fix: 버그 수정
- docs: 문서 추가, 수정, 삭제
- style: 코드 포맷팅(코드 순서 변경, 세미콜론 추가)
- refactor: 코드 리팩토링
- chore: 그 외 자잘한 수정
```

<br/>

## 3. Git Branch Strategy

- **main - feature**
  - main : 배포
  - feat/[기능] : 기능별로 개발을 진행하는 브랜치
- 브랜치명 : **feat/페이지 지름-구현할 기능** (ex. 카페고리 페이지의 뷰 작업일 경우 _category-ui_, 홈 화면의 베스트 상품 작업일 경우 _home-bestitem_)
- 뷰 구현 : **feat/[기능]-ui**
- api 연결 : **[기능]-api**
  - task 목록 작성

<br/>

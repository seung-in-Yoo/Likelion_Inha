# 과제 설명

현재 아래 4문제가 주어져있고, 어른사자의 길 문제 하나가 있습니다!! 4문제는 필수로 해결해주시고, 어른사자의 길 문제는 선택 문제입니다.

> 모든 과제 문제를 렌더링하는 페이지들은 `App.jsx` 파일 내에 주석으로 처리되어 있으니, 주석 해제하여 테스트해보시면 됩니다.

## 1번 문제 (난이도 하)

pages 폴더의 `BoxAlign.jsx`에서 제시된 박스의 색깔을 바꿔봅시다. -> props 의 연결이 제공되어져 있습니다. 연결 형태를 파악한 후 어떻게 값을 전달해야 될지 고민해보세요!! 박스 배경색 조건: 1번째 박스: red, 2번째 박스: blue, 3번째 박스: green, 4번째 박스: pink

> 힌트: 다른 파일은 건들지 마시고, `BoxAlign.jsx` 안에서만 해결하시면 됩니다.

## 2번 문제 (난이도 하)

`BoxAlign.jsx`의 박스 안에 텍스트를 바꿔봅시다. -> 1번 문제와 달리 props제공이 되어있지 않습니다. 직접 props를 줘야합니다!!

> 텍스트 조건: 텍스트는 하고 싶은걸로 4개의 박스에 넣으시면 됩니다. 단, 모두 다르게 해주세요!!

## 3번 문제 (난이도 중)

프론트엔드 개발자는 서버에서 넘겨준 배열 데이터를 `map`을 통해 렌더링해줄 때가 아주 많습니다. 다음의 데이터가 넘어온다고 가정해봅시다.

```javascript
const circleColorArr = [
  "pink",
  "red",
  "black",
  "gray",
  "green",
  "blue",
  "orange",
];
```

`components` 폴더에 `Circle` 폴더와 그 안의 `Circle.jsx`을 만든 후, `map`을 통해 배열의 각 색깔 요소들을 `props`로 넘겨주어 다음과 같은 이미지처럼 출력되도록 만들어주세요.
**출력은 `BoxAlign.jsx` 에서 해주시면 됩니다.**

<img width="1276" alt="image" src="https://github.com/likelion-Inha-12/FE-react-component-props/assets/121484561/061d7ecf-178c-4d69-9ba3-663565efde91">

> 주어진 배열을 통해 Circle.jsx에 색깔을 넣어주시고, 원들의 정렬을 맞춰주세요 !

### 결과물

<img width="827" alt="image" src="https://github.com/likelion-Inha-12/FE-react-component-props/assets/121484561/121cb2f2-faa0-4509-b80c-e0b0c39893bb">

## 4번 문제 (난이도 중상)

다음과 같은 영상처럼 작동하도록 구현해주세요 ! `SelectButtons` 페이지 컴포넌트에 하나의 `useState`를 선언하시고, `Button` 컴포넌트를 구현하여 단 2가지의 props 만을 받도록 구현해주시면 됩니다 !

<img src="https://github.com/likelion-Inha-12/FE-react-component-props/assets/121484561/bb99a1da-51b7-444d-8ecd-28d5b8300752" />

> 조건 : 클릭되었을 때 색깔은 자유롭게 해주시고, Button.css 파일은 건들지 말아주세요.
> 
> 힌트 : 각 button을 구별할 수 있는 구별자가 있어야 하지 않을까요 ? 또한 클릭 이벤트와 관련있지 않을까요 ?

## 어른사자의 길 문제

해당 문제는 어른사자 문제이므로 풀이하지 않으셔도 무방합니다.
다만, 현재 리액트의 컴포넌트 디자인 패턴 중 중요하다고 생각하는 개념을 이용할 수 있는 문제이며 `props`를 공부하기에도 적합하다고 생각하여 출제하였으니 풀어보시길 추천드립니다. 모르는 부분은 운영진에게 !!

> Label, SupportingText, Input 컴포넌트를 구현하여, Input 컴포넌트의 내용이 없을 때 Submit 버튼이 클릭되면, Input의 테두리 색과 SupportingText 색을 빨간색으로 하게끔 한다.

### 상세

1. `Label` 컴포넌트를 구현한다. Label 컴포넌트는 `label` 태그를 리턴하는데, `id` prop을 받아 `label` 태그만의 속성인 `htmlFor` 프로퍼티에 넘겨준다. 또한 `children` prop을 이용하여 라벨 텍스트를 표시한다.
   (해당 `htmlFor` 속성은 특정 `input` HTML 요소에 라벨을 연결해줄 수 있는 속성으로, 자세한 내용은 꼭 구글링을 통해 찾아보세요.)
2. `SupportingText` 컴포넌트를 구현한다.
   - 해당 컴포넌트는 특정 `input` 태그 요소에 대한 설명을 나타내주는 컴포넌트이다.
   - children prop을 받아 화면에 표시한다.
   - `isError`라는 prop을 전달 받는데, `isError`가 `true`일 시 글자 색을 `red`로 `false`라면 검은색으로 표시한다.
3. `Input` 컴포넌트를 구현한다.
   - Label 컴포넌트의 id prop으로 넘겨줄 `label` prop을 받는다. 이는 label 태그의 `id` prop이면서, label로 표시할 텍스트이다.
   - SupportingText 컴포넌트에서 표시할 text로 `supportingText` prop을 전달 받는다.
   - 추가로 `isError`, `placeholder` prop을 전달 받는다. -> `placeholder`는 input의 placeholder 속성에 연결해준다. (인풋 태그에 아무것도 입력하지 않았을 때 표시되는 텍스트 역할의 프로퍼티입니다.)
   - label prop이 있을 때만 `Label` 컴포넌트를 렌더링한다.
   - supportingText prop이 있을 때만 `SupportingText` 컴포넌트를 렌더링한다.
   - `Label`, `SupportingText` 컴포넌트가 전달받을 prop을 `Input` 컴포넌트가 먼저 전달받은 이후, 두 컴포넌트에 `prop`으로 전달해준다.
4. `Input` 컴포넌트와 `Button` 컴포넌트가 있을 때, `Input`의 내용이 없는데 `Submit` 버튼을 클릭하면 error가 발생하며 `isError`가 true가 된다. 이 때 `useRef` 훅을 사용하여 `Input` 컴포넌트에 `ref`를 전달하여 구현한다. (Input 컴포넌트의 ref 참조 연결은 미리 해두었습니다.)
5. `PlayGround.jsx` 파일에 출력하되, 해당 페이지에는 `Input`과 `Button` 두 개의 컴포넌트만 존재해야 한다.

<img src="https://github.com/likelion-Inha-12/FE-react-component-props/assets/121484561/5de5f490-40b7-468d-b178-d4bbebf8cc4b" />

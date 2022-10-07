# 원티드 프리온보딩 챌린지 10월 1-1 과제

## 과제 설명

### React와 History API 사용하여 SPA Router 기능 구현하기

1. 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.

    - `/` → `root` 페이지
    - `/about` → `about` 페이지

2. 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.
    - 힌트) window.onpopstate, window.location.pathname History API(pushState)
3. Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.

    ```typescript
    ReactDOM.createRoot(container).render(
        <Router>
            <Route path="/" component={<Root />} />
            <Route path="/about" component={<About />} />
        </Router>
    );
    ```

4. 최소한의 push 기능을 가진 useRouter Hook을 작성한다.

    ```typescript
    const { push } = useRouter();
    ```

## 프로젝트 세팅

```shell
$ npm create vite@latest

> pre-onboarding-challenge-fe-3
> React
> TypeScript
```

```
$ cd pre-onboarding-challenge-fe-3
$ npm i
$ npm run dev
```

## 참고자료

-   https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event
-   https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname
-   https://developer.mozilla.org/en-US/docs/Web/API/History_API

-   https://ko.reactjs.org/docs/hooks-custom.html

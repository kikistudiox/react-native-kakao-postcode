# react-native-kakao-postcode

[![npm version](https://img.shields.io/npm/v/react-native-kakao-postcode.svg)](https://www.npmjs.com/package/react-native-kakao-postcode)
[![license](https://img.shields.io/npm/l/react-native-kakao-postcode.svg)](https://github.com/kikistudiox/react-native-kakao-postcode/blob/main/LICENSE)
[![platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey.svg)](https://reactnative.dev/)

[카카오 (다음) 우편번호 서비스](https://postcode.map.daum.net/guide)를 React Native에서 사용할 수 있는 컴포넌트입니다.

[공식 마이그레이션 공지](https://github.com/daumPostcode/QnA/issues/1498)에 따라 새로운 카카오 도메인(`t1.kakaocdn.net`, `kakao.Postcode`)을 사용합니다.

## 특징

- 카카오 우편번호 서비스 최신 SDK 사용
- TypeScript 지원
- 커스텀 테마 지원
- 초기 검색어 설정 가능
- WebView props 커스터마이징 가능

## 설치

```bash
npm install react-native-kakao-postcode
```

### 필수 의존성

`react-native-webview`가 필요합니다:

```bash
npm install react-native-webview
```

iOS의 경우 설치 후 `npx pod-install`을 실행하세요.

## 사용법

```tsx
import KakaoPostcode from 'react-native-kakao-postcode';

const AddressSearch = () => (
  <KakaoPostcode
    style={{ width: '100%', height: 400 }}
    onSelected={(data) => {
      console.log(data.zonecode);     // 우편번호
      console.log(data.roadAddress);  // 도로명주소
      console.log(data.jibunAddress); // 지번주소
    }}
    onError={(error) => console.error(error)}
    options={{
      hideMapBtn: true,
      animation: true,
    }}
  />
);
```

### 초기 검색어 설정

```tsx
<KakaoPostcode
  style={{ width: '100%', height: 400 }}
  defaultQuery="판교역로 166"
  onSelected={(data) => { /* ... */ }}
/>
```

### 커스텀 테마

```tsx
<KakaoPostcode
  style={{ width: '100%', height: 400 }}
  onSelected={(data) => { /* ... */ }}
  options={{
    theme: {
      bgColor: '#162525',
      searchBgColor: '#162525',
      contentBgColor: '#162525',
      pageBgColor: '#162525',
      textColor: '#FFFFFF',
      queryTextColor: '#FFFFFF',
      postcodeTextColor: '#FA4256',
      emphTextColor: '#FA4256',
      outlineColor: '#444444',
    },
  }}
/>
```

## Props

| Prop | 타입 | 필수 | 설명 |
|------|------|------|------|
| `onSelected` | `(data: PostcodeData) => void` | O | 주소 선택 완료 콜백 |
| `onError` | `(error: unknown) => void` | X | 에러 발생 콜백 |
| `onClose` | `() => void` | X | 닫기 콜백 |
| `options` | `PostcodeOptions` | X | 카카오 Postcode 생성자 옵션 |
| `defaultQuery` | `string` | X | 초기 검색어 |
| `style` | `StyleProp<ViewStyle>` | X | 컨테이너 스타일 |
| `webViewProps` | `WebViewProps` | X | WebView에 전달할 추가 props |

## PostcodeOptions

| 옵션 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `animation` | `boolean` | `false` | 애니메이션 효과 |
| `shorthand` | `boolean` | `true` | 시/도 축약 표시 |
| `hideMapBtn` | `boolean` | `false` | 지도 버튼 숨김 |
| `hideEngBtn` | `boolean` | `false` | 영문보기 버튼 숨김 |
| `alwaysShowEngAddr` | `boolean` | `false` | 영문 주소 동시 표시 |
| `autoMapping` | `boolean` | `true` | 1:N 주소 자동 매핑 |
| `theme` | `PostcodeTheme` | `null` | 커스텀 색상 테마 |

전체 옵션은 [공식 가이드](https://postcode.map.daum.net/guide)를 참고하세요.

## PostcodeData

`onSelected` 콜백으로 전달되는 주요 필드:

| 필드 | 타입 | 설명 |
|------|------|------|
| `zonecode` | `string` | 우편번호 (5자리) |
| `address` | `string` | 기본 주소 |
| `roadAddress` | `string` | 도로명 주소 |
| `jibunAddress` | `string` | 지번 주소 |
| `buildingName` | `string` | 건물명 |
| `sido` | `string` | 도/시 |
| `sigungu` | `string` | 시/군/구 |
| `bname` | `string` | 법정동/법정리 |
| `query` | `string` | 사용자 검색어 |

전체 데이터 구조는 [types.ts](src/types.ts)를 참고하세요.

## 기여하기

기여를 환영합니다! [CONTRIBUTING.md](CONTRIBUTING.md)를 참고하세요.

## 라이선스

MIT

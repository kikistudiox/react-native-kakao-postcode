# 기여 가이드

react-native-kakao-postcode에 기여해 주셔서 감사합니다!

## 이슈 등록

버그를 발견하거나 새로운 기능을 제안하고 싶다면 [GitHub Issues](https://github.com/kikistudiox/react-native-kakao-postcode/issues)에 등록해 주세요.

### 버그 리포트

- React Native 버전
- react-native-webview 버전
- iOS / Android 플랫폼 및 버전
- 재현 단계
- 예상 동작과 실제 동작

### 기능 요청

- 해결하려는 문제 설명
- 제안하는 해결 방법

## Pull Request

1. 이 레포지토리를 Fork 합니다.
2. 새 브랜치를 생성합니다: `git checkout -b feature/my-feature`
3. 변경 사항을 커밋합니다: `git commit -m "Add my feature"`
4. 브랜치를 푸시합니다: `git push origin feature/my-feature`
5. Pull Request를 생성합니다.

### 로컬 개발 환경

```bash
# 레포지토리 클론
git clone https://github.com/kikistudiox/react-native-kakao-postcode.git
cd react-native-kakao-postcode

# 의존성 설치
npm install

# TypeScript 빌드
npm run build
```

### 코드 컨벤션

- TypeScript strict 모드를 사용합니다.
- 커밋 메시지는 명확하게 작성합니다.
- 새로운 기능에는 타입 정의를 포함합니다.

## 라이선스

기여하신 코드는 [MIT 라이선스](LICENSE)에 따라 배포됩니다.

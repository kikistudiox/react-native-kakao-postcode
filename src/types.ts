import { StyleProp, ViewStyle } from 'react-native';
import type { WebViewProps } from 'react-native-webview';

/**
 * 카카오 우편번호 서비스 주소 선택 결과 데이터
 * @see https://postcode.map.daum.net/guide
 */
export interface PostcodeData {
  /** 국가기초구역번호 (5자리 우편번호) */
  zonecode: string;
  /** 기본 주소 (검색어 타입에 따라 도로명/지번) */
  address: string;
  /** 기본 영문 주소 */
  addressEnglish: string;
  /** 검색된 기본 주소 타입: R(도로명), J(지번) */
  addressType: 'R' | 'J';
  /** 사용자가 선택한 주소 타입 */
  userSelectedType: 'R' | 'J';
  /** 연관 주소에서 "선택 안함" 선택 여부 */
  noSelected: 'Y' | 'N';
  /** 사용자가 선택한 주소의 언어 타입: K(한글), E(영문) */
  userLanguageType: 'K' | 'E';
  /** 도로명 주소 */
  roadAddress: string;
  /** 영문 도로명 주소 */
  roadAddressEnglish: string;
  /** 지번 주소 */
  jibunAddress: string;
  /** 영문 지번 주소 */
  jibunAddressEnglish: string;
  /** 자동 매핑된 도로명 주소 (1:N 매핑 시) */
  autoRoadAddress: string;
  /** 자동 매핑된 영문 도로명 주소 */
  autoRoadAddressEnglish: string;
  /** 자동 매핑된 지번 주소 (1:N 매핑 시) */
  autoJibunAddress: string;
  /** 자동 매핑된 영문 지번 주소 */
  autoJibunAddressEnglish: string;
  /** 건물관리번호 */
  buildingCode: string;
  /** 건물명 */
  buildingName: string;
  /** 공동주택 여부 (아파트, 연립주택 등) */
  apartment: 'Y' | 'N';
  /** 도/시 이름 */
  sido: string;
  /** 도/시 영문 이름 */
  sidoEnglish: string;
  /** 시/군/구 이름 */
  sigungu: string;
  /** 시/군/구 영문 이름 */
  sigunguEnglish: string;
  /** 시/군/구 코드 (5자리) */
  sigunguCode: string;
  /** 도로명 코드 (7자리) */
  roadnameCode: string;
  /** 법정동/법정리 코드 */
  bcode: string;
  /** 도로명 */
  roadname: string;
  /** 영문 도로명 */
  roadnameEnglish: string;
  /** 법정동/법정리 이름 */
  bname: string;
  /** 법정동/법정리 영문 이름 */
  bnameEnglish: string;
  /** 법정리의 읍/면 이름 (동 지역은 공백) */
  bname1: string;
  /** 법정리의 읍/면 영문 이름 */
  bname1English: string;
  /** 법정동/법정리 이름 */
  bname2: string;
  /** 법정동/법정리 영문 이름 */
  bname2English: string;
  /** 행정동 이름 */
  hname: string;
  /** 사용자가 입력한 검색어 */
  query: string;
}

/** 우편번호 찾기 화면 색상 테마 */
export interface PostcodeTheme {
  /** 바탕 배경색 */
  bgColor?: string;
  /** 검색창 배경색 */
  searchBgColor?: string;
  /** 본문 배경색 (검색결과, 결과없음, 첫화면) */
  contentBgColor?: string;
  /** 페이지 배경색 */
  pageBgColor?: string;
  /** 기본 글자색 */
  textColor?: string;
  /** 검색창 글자색 */
  queryTextColor?: string;
  /** 우편번호 글자색 */
  postcodeTextColor?: string;
  /** 강조 글자색 */
  emphTextColor?: string;
  /** 테두리 색 */
  outlineColor?: string;
}

/** kakao.Postcode 생성자 옵션 */
export interface PostcodeOptions {
  /** 애니메이션 효과 (기본값: false) */
  animation?: boolean;
  /** 검색어 입력박스 자동 포커스 - PC만 (기본값: true) */
  focusInput?: boolean;
  /** 1:N 매핑 주소 자동 선택 (기본값: true) */
  autoMapping?: boolean;
  /** 도로명 주소 자동 매핑 (기본값: true) */
  autoMappingRoad?: boolean;
  /** 지번 주소 자동 매핑 (기본값: true) */
  autoMappingJibun?: boolean;
  /** 시/도 축약 표시 (기본값: true) */
  shorthand?: boolean;
  /** 가이드 영역 강조 시작 페이지 (3~20, 기본값: 0 비활성) */
  pleaseReadGuide?: number;
  /** 가이드 강조 지속 시간 초 (0.1~60, 기본값: 1.5) */
  pleaseReadGuideTimer?: number;
  /** 자동완성 최대 개수 (1~10, 기본값: 10) */
  maxSuggestItems?: number;
  /** 행정동 정보 추가 표시 (기본값: false) */
  showMoreHName?: boolean;
  /** 지도 버튼 숨김 (기본값: false) */
  hideMapBtn?: boolean;
  /** 영문보기 버튼 숨김 (기본값: false) */
  hideEngBtn?: boolean;
  /** 한글/영문 주소 동시 표시 (기본값: false) */
  alwaysShowEngAddr?: boolean;
  /** form submit 방식 사용 (기본값: true) */
  submitMode?: boolean;
  /** 하단 가이드 페이지 링크 (기본값: true) */
  useBannerLink?: boolean;
  /** 색상 테마 */
  theme?: PostcodeTheme;
}

/** KakaoPostcode 컴포넌트 Props */
export interface KakaoPostcodeProps {
  /** 주소 선택 완료 콜백 */
  onSelected: (data: PostcodeData) => void;
  /** 에러 발생 콜백 */
  onError?: (error: unknown) => void;
  /** 닫기 콜백 */
  onClose?: () => void;
  /** kakao.Postcode 생성자 옵션 */
  options?: PostcodeOptions;
  /** 초기 검색어 */
  defaultQuery?: string;
  /** 컨테이너 스타일 */
  style?: StyleProp<ViewStyle>;
  /** WebView에 전달할 추가 props */
  webViewProps?: Omit<
    WebViewProps,
    'source' | 'onMessage' | 'injectedJavaScript'
  >;
}

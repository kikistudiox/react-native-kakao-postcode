import React, { useCallback, useMemo } from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import WebView, { type WebViewNavigation } from 'react-native-webview';
import { generateHTML } from './html';
import type { KakaoPostcodeProps } from './types';

const html = generateHTML();

const ALLOWED_ORIGINS = [
  'https://postcode.map.kakao.com',
  'https://postcode.map.daum.net',
  'http://postcode.map.daum.net',
  'https://t1.kakaocdn.net',
];

const KakaoPostcode: React.FC<KakaoPostcodeProps> = ({
  onSelected,
  onError,
  onClose,
  options,
  defaultQuery,
  style,
  webViewProps,
}) => {
  const injectedJavaScript = useMemo(
    () =>
      `initPostcode(${JSON.stringify(options ?? {})}, ${JSON.stringify(defaultQuery ?? '')});`,
    [options, defaultQuery],
  );

  const onMessage = useCallback(
    ({ nativeEvent: { data } }: { nativeEvent: { data: string } }) => {
      try {
        const message = JSON.parse(data);
        switch (message.type) {
          case 'complete':
            onSelected(message.data);
            break;
          case 'close':
            onClose?.();
            break;
          case 'error':
            onError?.(new Error(message.message));
            break;
        }
      } catch (error) {
        onError?.(error);
      }
    },
    [onSelected, onError, onClose],
  );

  const onShouldStartLoadWithRequest = useCallback(
    (request: WebViewNavigation) => {
      if (request.url === 'about:blank') {
        return false;
      }

      if (ALLOWED_ORIGINS.some((origin) => request.url.startsWith(origin))) {
        return true;
      }

      if (request.url.startsWith('http')) {
        Linking.openURL(request.url).catch(() => {});
        return false;
      }

      return true;
    },
    [],
  );

  return (
    <View style={[styles.container, style]}>
      <WebView
        mixedContentMode="compatibility"
        originWhitelist={['*']}
        {...webViewProps}
        source={{ html, baseUrl: 'https://postcode.map.kakao.com' }}
        onMessage={onMessage}
        injectedJavaScript={injectedJavaScript}
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default KakaoPostcode;

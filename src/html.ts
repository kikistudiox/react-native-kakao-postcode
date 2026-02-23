const KAKAO_POSTCODE_SDK_URL =
  'https://t1.kakaocdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

export const generateHTML = (): string => `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <style>
    * { box-sizing: border-box; }
    html, body { width: 100%; height: 100%; margin: 0; padding: 0; background-color: #ececec; }
  </style>
</head>
<body>
  <div id="layer" style="width:100%;min-height:100%;"></div>
  <script>
    function initPostcode(options, defaultQuery) {
      var el = document.getElementById('layer');
      el.innerHTML = '';
      var script = document.createElement('script');
      script.src = '${KAKAO_POSTCODE_SDK_URL}';
      script.onload = function() {
        new kakao.Postcode({
          ...options,
          oncomplete: function(data) {
            window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'complete', data: data }));
          },
          onclose: function() {
            window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'close' }));
          },
          onsearch: function() {
            window.scrollTo(0, 0);
          },
          onresize: function(size) {
            el.style.height = size.height + 'px';
          },
          width: '100%',
          height: '100%'
        }).embed(el, { q: defaultQuery || '', autoClose: false });
      };
      script.onerror = function() {
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'error', message: 'Failed to load Kakao Postcode SDK' }));
      };
      document.head.appendChild(script);
    }
  </script>
</body>
</html>`;

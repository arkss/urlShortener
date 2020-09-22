# URL shortener

url 단축 서비스

예시

* https://bitly.com/



billy 사용 결과

1. www

   www 의 존재 여부는 url 에는 영향이 없지만 `shorten url` 에는 영향을 미친다.

|       origin url       |      shorten url       |
| :--------------------: | :--------------------: |
|   https://naver.com/   | https://bit.ly/2rWCQ5C |
| https://www.naver.com/ | https://bit.ly/2QOadQG |



2. http / https

   http와 https 이 다르면 shorten url 이 다르다. 

|     origin url     |      shorten url       |
| :----------------: | :--------------------: |
| https://naver.com/ | https://bit.ly/2rWCQ5C |
| http://naver.com/  | https://bit.ly/39L6Ylo |

> naver.com/ 이라고 입력해도 http://naver.com/ 이 된다.



3. 해당 url 에 대해서 request 가 400 대여도 shorten url 을 만들어준다.

* 결론

  url path 만을 filtering할 필요없이 전체 문제열에 대해 변환을 해주면 된다.



4. base64 가 아닌 base62를 사용하는 이유
   * base64 는 base62에 비해서 +,/,= 3개를 더 쓰고 있다. (= 은 padding: 값이 없음을 의미)
   * 위 3개는 url 의 query string으로 넘겼을 때 제대로 처리가 되지 않는다. 



5. 알고리즘

   랜덤 숫자 생성 -> 6

   "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" 에 대해서 8자로 표현할 수 있는 최대 62진수는 99999999(62) 이를 10진수로 표현하면 218340105584895, 

# Binary Search (이분 탐색)

**이분 탐색이란?** 탐색 범위를 절반씩 줄여가면서 최적해를 구하는 방법

> 1. 탐색에 대한 성공/실패 여부를 반환하는 함수 fn()을 작성
> 1. main에서는 start, end, mid를 선언한 후 반복문 작성
>    - `if (fn(mid))` => `end = mid - 1`
>    - `if (!fn(mid))` => `start = mid + 1`

|   날짜   | 플랫폼 | 난이도  |    문제 이름     |                            문제 링크                             |                                   풀이 링크                                    |
| :------: | :----: | :-----: | :--------------: | :--------------------------------------------------------------: | :----------------------------------------------------------------------------: |
| 21-12-03 |   PG   | Level 3 | 금과 은 운반하기 | [문제](https://programmers.co.kr/learn/courses/30/lessons/86053) | [코드](https://github.com/LeeMir/Algorithm/blob/main/BinarySearch/PG-86053.js) |
| 21-12-22 |   PG   | Level 3 |     입국심사     | [문제](https://programmers.co.kr/learn/courses/30/lessons/43238) | [코드](https://github.com/LeeMir/Algorithm/blob/main/BinarySearch/PG-43238.js) |

# Binary Search (이분 탐색)

**이분 탐색이란?** 탐색 범위를 절반씩 줄여가면서 최적해를 구하는 방법

> 1. 탐색에 대한 성공/실패 여부를 반환하는 함수 fn()을 작성
> 1. main에서는 start, end, mid를 선언한 후 반복문 작성
>    - `if (fn(mid))` => `end = mid - 1`
>    - `if (!fn(mid))` => `start = mid + 1`

|   날짜   |  플랫폼  | 난이도  |                        문제 이름                        |                                           문제 링크                                           |                                     풀이 링크                                     |
| :------: | :------: | :-----: | :-----------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: |
| 21-12-03 |    PG    | Level 3 |                    금과 은 운반하기                     |               [문제](https://programmers.co.kr/learn/courses/30/lessons/86053)                |  [코드](https://github.com/LeeMir/Algorithm/blob/main/BinarySearch/PG-86053.js)   |
| 21-12-22 |    PG    | Level 3 |                        입국심사                         |               [문제](https://programmers.co.kr/learn/courses/30/lessons/43238)                |  [코드](https://github.com/LeeMir/Algorithm/blob/main/BinarySearch/PG-43238.js)   |
| 22-12-29 | LeetCode | Medium  | Find First and Last Position of Element in Sorted Array | [문제](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array) | [코드](https://github.com/LeeMir/Algorithm/blob/main/BinarySearch/Leetcode-34.js) |
| 22-12-29 | LeetCode |  Easy   |                 Search Insert Position                  |                 [문제](https://leetcode.com/problems/search-insert-position)                  | [코드](https://github.com/LeeMir/Algorithm/blob/main/BinarySearch/Leetcode-35.js) |
| 23-05-01 | LeetCode | Medium  |                   Search a 2D Matrix                    |                   [문제](https://leetcode.com/problems/search-a-2d-matrix)                    | [코드](https://github.com/LeeMir/Algorithm/blob/main/BinarySearch/Leetcode-74.ts) |

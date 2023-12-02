# 자바스크립트 입력값 받기

## 입력값이 한 개일 때 (한 줄)

```jsx
// 10
let i=require('fs').readFileSync("dev/stdin").toString().trim()
```

## 입력값이 여러개일 때 (한 줄에 공백으로 구분)

```jsx
// 1 2 3 4
let i=require('fs').readFileSync("dev/stdin").toString().trim().split` `
```

## 입력값이 여러 줄일 때

```jsx
/* 
110
789
23
*/
let i=require('fs').readFileSync("dev/stdin").toString().trim().split`\n`
```

## 입력값이 첫 번째 줄에는 입력값이 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때

```jsx
/*
3
1 2 3
*/
let [n,i]=require('fs').readFileSync("dev/stdin").toString().trim().split`\n`
a=i.trim().split` `
```

## 입력값이 첫 번째 줄에는 입력 값이 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때

```jsx
/*
3
10
20
30
*/
let [n,i]=require('fs').readFileSync("dev/stdin").toString().trim().split` `
```

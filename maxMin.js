// 배열 중에서 최솟값 찾기

const array = [1,5,3,2,10];

function solution(array) {
  
  let answer = Math.min(...array);

  return answer
}

// ...copy

console.log(solution(array));

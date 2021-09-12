// 중복 문자 제거

const str = "ksekkset";

function solution(str) {

  let answer = "";

  for(let i=0; i<str.length; i++) {
      
    // console.log(str[i], i, str.indexOf(str[i]));
    
    if(str.indexOf(str[i]) === i) {
      answer+=str[i];
    }
  }
  
  return answer;
}

// indexOf 문자열의 인덱스를 찾아 리턴한다.

console.log(solution(str));
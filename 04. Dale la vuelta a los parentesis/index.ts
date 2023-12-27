function decode(message: string): string {
  const MAP = {
    "(": ")",
    ")": "("
  };
  let answer = "";
  let reversed = "";
  let stack = 0;
  for(let i = 0; i < message.length; i++){
    const char = message[i];
    if(char === "("){
      stack++;
      if(stack === 1){
        continue;
      }
    } else if(char === ")"){
      stack--;
      if(stack === 0){
        answer += reversed;
        reversed = "";
        continue;
      }
    }

    if(stack > 0) {
      reversed = (MAP[char] ?? char) + reversed;
    } else {
      answer += char;
    }
  }

  return answer.match(/[()]/) ? decode(answer) : answer;
}

const a = decode('((nta)(sa))')
console.log(a) // santa

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus
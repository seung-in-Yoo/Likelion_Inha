/* 2번 문제 답안을 작성해주세요. */
function solution(n) {
    let answer = 1;
    
    for (let i=1;i<=n;i++) {
        answer*=i;
        
        if (answer>n) {
            return i-1;
        }
        else if (answer===n) {
            return i;
        }
    }
}
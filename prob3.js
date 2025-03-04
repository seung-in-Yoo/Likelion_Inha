/* 3번 문제 답안을 작성해주세요. */
function solution(arr) {
    let min=arr[0];
    let min_del=0;
    
    if(arr.length<=1) {
        return [-1];
    }
    
    for(let i=1;i<arr.length;i++) {
        if(arr[i]<min) {
            min=arr[i];
            min_del=i;
        }
    }
    
    arr.splice(min_del,1);
    
    return arr;
}
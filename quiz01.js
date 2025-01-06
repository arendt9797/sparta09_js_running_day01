// 1. 
let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
// 변수가 선언만 되고 초기화가 되지 않아 undefined가 된다.


// 2. 
const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// 재할당 과정에서서 에러가 나왔으므로 const 변수를 사용한 것을 알 수 있다. 


//3.
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// 배열의 인덱스는 항상 0부터 시작하기 때문에 lotto[3]은 4번째 원소를 가리킨다. 


4.
let mySchedule = "";
console.log(mySchedule || false); // < false >
// || 연산자는 전자가 falsy할 경우 후자로 넘어가고, truthy할 경우 true를 반환한다. 
// 빈 문자열은 false이므로 후자로 넘어가고, 후자도 마찬가지로 false 이기 때문에 결국 false가 된다. 

console.log(!!mySchedule); // < false >
// !! 는 해당 값이 truthy한지 falsy한지 판단할 수 있는 가장 확실한 방법으로, 빈 문자열은 falsy하기 때문에 false가 된다. 

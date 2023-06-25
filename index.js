var tt = "ts-practice";
console.log(tt);
/*********************************************************************************************************************************/
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
// type alias로 만들어보셈
// type TestType01 = {
//   color?: string;
//   size: number;
//   readonly position: number[];
// };
// const testVariable01: TestType01 = {
//   size: 100,
//   position: [1, 2, 3],
// };
/*********************************************************************************************************************************/
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.
// type TestType02 = {
//   name: string;
//   phone: number;
//   email: string;
// };
// const testVariable02 = {
//   name: "userName",
//   phone: 123456789,
//   email: "user@email.com",
// };
/*********************************************************************************************************************************/
// 1. 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
// 3. 멋있게 숙제2에서 만들어둔 type alias를 재활용해봅시다 (extends).
// type testType03 = {
//   adult: boolean;
// } & TestType02;
// const testVariable03: testType03 = {
//   name: "userName",
//   phone: 123456789,
//   email: "user@email.com",
//   adult: true,
// };
/*********************************************************************************************************************************/
// Q. literal 타입을 활용하여 함수 만들기
// 1. 가위 or 바위 or 보 중 1개 입력가능
// 2. 가위 or 바위 or 보 만 들어올 수 있는 array를 return 해야함
// const testFunction = (
//   choice: "rock" | "paper" | "scissors"
// ): ("rock" | "paper" | "scissors")[] => {
//   return [choice];
// };
// testFunction("rock");
/*********************************************************************************************************************************/
// Q. object 자료속 함수에 타입 지정하기.
// 1. plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
// 2. changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.
// 3. type 키워드를 쓰든 말든 알아서 합시다.
// type TestUserInfoType = {
//   name: string;
//   age: number;
//   plusOne: (x: number) => number;
//   changeName: () => void;
// };
// const testUserInfo: TestUserInfoType = {
//   name: "kim",
//   age: 30,
//   plusOne: (x) => {
//     return x + 1;
//   },
//   changeName: () => {
//     console.log("hello");
//   },
// };
// testUserInfo.plusOne(1);
// testUserInfo.changeName();
/*********************************************************************************************************************************/
// Q. 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
// 1. cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// 2. removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
// 3. 함수에 타입지정시 type alias를 꼭 써보도록 합시다.
// type CutZeroType = (x: string) => string;
// const cutZero: CutZeroType = (x) => {
//   let arr = x.split("");
//   if (arr[0] === "0") {
//     let sliceTo = 0;
//     for (let i = 0; i <= arr.length; i++) {
//       if (arr[i] !== "0") break;
//       sliceTo = i + 1;
//     }
//     arr = arr.slice(sliceTo);
//   }
//   console.log(arr.join(""));
//   return arr.join("");
// };
// cutZero("000000앞빵처리000000");
// type RemoveDashType = (x: string) => number;
// const removeDash: RemoveDashType = (x) => {
//   const arr = x.split("");
//   const filterDash: string[] = [];
//   arr.forEach((val, _) => {
//     if (val !== "-") {
//       filterDash.push(val);
//     }
//   });
//   console.log(parseInt(filterDash.join(""), 10));
//   return parseInt(filterDash.join(""), 10);
// };
// removeDash("010-1234-5678");

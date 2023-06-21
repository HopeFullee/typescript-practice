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

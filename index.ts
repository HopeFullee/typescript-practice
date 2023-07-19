const tt: string = "ts-practice";

console.log(tt);

/*********************************************************************************************************************************/

/**************************************************************************************************** 
  1. 이 타입은 object 자료형이어야합니다.
  2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
  3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
  4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
  type alias로 만들어보셈
*****************************************************************************************************/

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

/*********************************************************************************************** 
  1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. 
    { name : 'kim', phone : 123, email : 'abc@naver.com' }
  2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
  3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.
************************************************************************************************/

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

/********************************************************************************************
  1. 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
  2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
  3. 멋있게 숙제2에서 만들어둔 type alias를 재활용해봅시다 (extends).
*********************************************************************************************/

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

/*************************************************************
  Q. literal 타입을 활용하여 함수 만들기
  1. 가위 or 바위 or 보 중 1개 입력가능
  2. 가위 or 바위 or 보 만 들어올 수 있는 array를 return 해야함
**************************************************************/

// const testFunction = (
//   choice: "rock" | "paper" | "scissors"
// ): ("rock" | "paper" | "scissors")[] => {
//   return [choice];
// };

// testFunction("rock");

/*********************************************************************************************************************************/

/****************************************************************************
  Q. object 자료속 함수에 타입 지정하기.
  1. plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
  2. changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.
  3. type 키워드를 쓰든 말든 알아서 합시다.
*****************************************************************************/

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

/*************************************************************************** 
  Q. 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
  1. cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 
    '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
  2. removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 
    '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
  3. 함수에 타입지정시 type alias를 꼭 써보도록 합시다.
***************************************************************************/

// 정규식으로 풀면 쉬운걸 엄청 배배꼬아서 풀어버린 나는 바보

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

//   return arr.join("");
// };

// type RemoveDashType = (x: string) => number;

// const removeDash: RemoveDashType = (x) => {
//   const arr = x.split("");
//   const filterDash: string[] = [];

//   arr.forEach((val, _) => {
//     if (val !== "-") {
//       filterDash.push(val);
//     }
//   });

//   return parseInt(filterDash.join(""), 10);
// };

// type GetPhoneNumberType = (
//   number: string,
//   cutZero: CutZeroType,
//   removeDash: RemoveDashType
// ) => void;

// const getPhoneNumber: GetPhoneNumberType = (number, cutZero, removeDash) => {
//   const cutZeroRes = cutZero(number);
//   const removeDashRes = removeDash(cutZeroRes);
//   console.log(removeDashRes);
// };

// getPhoneNumber("010-1234-5678", cutZero, removeDash);

/*********************************************************************************************************************************/

/*********************************************************************************************************************
  Q. Car 클래스를 만들고 싶습니다.
  1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
  2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.
  3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요.
**********************************************************************************************************************/

// class Car {
//   model: string;
//   price: number;

//   constructor() {
//     this.model = "소나타";
//     this.price = 3000;
//   }

//   tax = (): number => {
//     const taxRes = this.price / 10;
//     console.log(taxRes);
//     return taxRes;
//   };
// }

// const sonata = new Car();
// sonata.tax();

/*********************************************************************************************  
  Q2. class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
  1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면
  2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고
  3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
  4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈
**********************************************************************************************/

// class Words {
//   str: string[] = [];
//   num: number[] = [];
//   constructor(...rest: (string | number)[]) {
//     rest.forEach((v) => {
//       if (typeof v === "string") {
//         this.str.push(v);
//       } else if (typeof v === "number") {
//         this.num.push(v);
//       }
//     });
//   }
// }

// const wordsObj = new Words("kim", 123, 122, "lee");
// console.log(wordsObj.num);
// console.log(wordsObj.str);

/*********************************************************************************************************************************/

/********************************************************************************************* 
  Q. interface 이용해서 간단하게 타입을 만들어봅시다
  const 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
  이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?
  무슨 타입일지는 알아서 기입합시다. 
**********************************************************************************************/

// interface Product {
//   brand: string;
//   serialNumber: number;
//   model: string[];
// }

// const product: Product = {
//   brand: "Samsung",
//   serialNumber: 1360,
//   model: ["TV", "phone"],
// };

/***********************************************************************************************
  Q2. array 안에 object 여러개가 필요합니다.
  쇼핑몰 장바구니를 구현하려고 하는데
  const 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]
  이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?
  오늘 배운 interface 문법을 써봅시다.
************************************************************************************************/

// interface Cart {
//   product: string;
//   price: number;
// }

// const cart: Cart[] = [
//   { product: "청소기", price: 7000 },
//   { product: "삼다수", price: 800 },
// ];

/**********************************************************************
  Q3. 위에서 만든 타입을 extends 해봅시다.
  갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.
  { product : '청소기', price : 7000, card : false }
  위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
***********************************************************************/

// interface Card extends Cart {
//   card?: boolean;
// }

// const cart2: Card[] = [
//   { product: "청소기", price: 7000 },
//   { product: "삼다수", price: 800 },
//   { product: "청소기", price: 7000, card: false },
// ];

/************************************************************************************************************* 
  Q4. object 안에 함수를 2개 넣고 싶은데요 
  1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
  2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
  이 object 자료를 어떻게 만들면 될까요? 
  interface를 이용해서 object에 타입지정도 해보십시오. 
**************************************************************************************************************/

// interface Calculator {
//   plus: (x: number, y: number) => number;
//   minus: (x: number, y: number) => number;
// }

// const calculatorObj: Calculator = {
//   plus: (x, y) => {
//     return x + y;
//   },
//   minus: (x, y) => {
//     return x - y;
//   },
// };

/*********************************************************************************************************************************/

/******************************************************************* 
  Q1. 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
  최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
  (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
  (조건2) Math.max() 사용금지 반복문이나 쓰셈 
********************************************************************/

// const getMaxNum = (...nums: number[]): number => {
//   let maxNum = 0;
//   nums.forEach((v) => {
//     if (maxNum < v) maxNum = v;
//   });

//   console.log(maxNum);
//   return maxNum;
// };

// getMaxNum(-1, 1, 5, 10);

/***********************************************************************************************
  Q2. 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
  함수( { user : 'kim', comment : [3,5,4], admin : false } )
  어떻게 코드를 짜야할까요?
  (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
  (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
************************************************************************************************/

// type GetObjParam = {
//   user: string;
//   comment: number[];
//   admin: boolean;
// };

// const testObj = { user: "kim", comment: [3, 5, 4], admin: false };

// const getObj = ({ user, comment, admin }: GetObjParam): void => {
//   console.log(user, comment, admin);
// };

// getObj(testObj);

/************************************************************************
  Q3. 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
  함수( [40, 'wine', false] )
  어떻게 코드를 짜야할까요?
  (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
  (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
*************************************************************************/

// type getArrayType = (number | string | boolean)[];

// const testArray = [40, "wine", false];

// const getArray = ([a, b, c]: getArrayType): void => {
//   console.log(a, b, c);
// };

// getArray(testArray);

/*********************************************************************************************************************************/

/*************************************************** 
  Q. 다음 x, y, z 속성의 특징을 설명해보십시오.

  class User {
    private static x = 10;
    public static y = 20;
    protected z = 30;
  }

  누가 쓸 수 있고, 어디서 수정할 수 있는지 이런 것들이요. 
*****************************************************/

// public : 변수가 선언된 class 의 필드와 extends 된 자식 sub class 에서 this 로 접근 가능하며,
// new 로 생성된 instance 에서도 접근 가능.

// private : ※ 오로지 private 변수가 선언된 클래스의 필드내에서만 접근 가능 ※

// protected: 변수가 선언된 클래스의 필드와 extends 된 자식 sub class 에서 this 로 접근 가능하지만,
// new 로 생성된 instance 에서는 접근 불가능.

// static : static 이 선언된 class 의 정적 변수이므로 this 로 호출이 불가능.
// ※ 오로지 static 이 선언된 class 또는 extends시 sub class 의 이름으로 만 접근 가능 ※
// 또한 public static, private static, protected static 의 경우 앞의 접근제한자의 특성과 static 의 특성이 합쳐짐.

// public static : 변수가 선언된 class와 extends된 sub class 의 이름으로 접근 가능.
// private static : 변수가 선언된 class 의 필드내에서만 해당 class의 이름으로 접근 가능.
// protected static : 변수가 선언된 class 와 extends된 sub class 의 이름으로 접근 가능.

// 언젠간 이걸 100% 다 이해하고 쓸날이 오길...

/**************************************************************************
  Q2. x 속성에 숫자를 더해주는 함수가 필요합니다.

  class User {
    private static x = 10;
    public static y = 20;
  }

  User.addOne(3) //이렇게 하면 x가 3 더해져야함
  User.addOne(4) //이렇게 하면 x가 4 더해져야함
  User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
  저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요? 

  그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.

  (조건) private static x = 10; 이 코드 수정금지
**************************************************************************/

// class User {
//   private static x = 10;
//   public static y = 20;

//   addOne = (num?: number) => {
//     if (typeof num === "number") {
//       User.x += num;
//     } else {
//       User.x += 1;
//     }
//   };

//   showX = () => {
//     console.log(User.x);
//   };
// }

// const newUser = new User();
// newUser.addOne();
// newUser.showX();

/*******************************************************************
  Q3. 이런거 어떻게 만들게요 

  웹 요소 애니메이팅하는거 이런 것의 기초 격인데 

  let 네모 = new Square(30, 30, 'red');
  네모.draw()
  네모.draw()
  네모.draw()
  네모.draw()
  이렇게 네모.draw()를 할 때마다

  index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가

  가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
*******************************************************************/

// class Square {
//   width: number = 0;
//   height: number = 0;
//   color: string;

//   constructor(w: number, h: number, c: string) {
//     this.width = w;
//     this.height = h;
//     this.color = c;
//   }

//   draw = () => {
//     const randomX = Math.floor(Math.random() * 400);
//     const randomY = Math.floor(Math.random() * 400);

//     const squreDiv = `<div style="
//       position: absolute;
//       top: ${randomY}px;
//       left: ${randomX}px;
//       width: ${this.width}px;
//       height: ${this.height}px;
//       background: ${this.color};">
//     </div>`;

//     document.body.insertAdjacentHTML("beforeend", squreDiv);
//   };
// }

// const square = new Square(30, 30, "red");

// square.draw();
// square.draw();
// square.draw();
// square.draw();
// square.draw();
// square.draw();
// square.draw();

/*********************************************************************************************************************************/

/***************************************************************************
  Q. 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 
  array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
  연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요 

  (동작 예시)
  함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다. 
  함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다.
****************************************************************************/

// const idxCounter = <T extends string | string[]>(x: T): void => {
//   console.log(x.length);
// };

// idxCounter<string>("asd");
// idxCounter<string[]>(["asd", "asd", "asd"]);

/**********************************************************************************
Q2. Animal 이라는 타입이 있습니다.

interface Animal {
  name : string;
  age : number 
}

let data = '{"name" : "dog", "age" : 1 }'
그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다. 

data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
오늘 배운 Generic을 이용해서 구현해보도록 합시다.  

(동작 예시)
함수<Animal>(data) 이렇게 쓰면 이 자리에 
{ name : 'dog' , age : 1 } 이런 object 자료가 남아야합니다. 근데 타입은 Animal임
**********************************************************************************/

// interface Animal {
//   name: string;
//   age: number;
// }

// const data = '{"name" : "dog", "age" : 1 }';

// const jsonToObj = <T>(x: string): T => {
//   const obj = JSON.parse(x);
//   return obj;
// };

// const obj = jsonToObj<Animal>(data);

// console.log(obj);

/*******************************************************************************
Q3. class 를 수정해봅시다.

class Person {
  name;
  constructor(a){
    this.name = a;
  }
}

let a = new Person('어쩌구');
a.name //any 타입이 되었넹 
 
지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 
any 타입이 name 속성에 부여됩니다.
이게 싫어서 파라미터에 string을 집어넣으면 string 타입
number를 집어넣으면 number 타입
string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요? 
오늘 배운 Generic을 이용해봅시다. 
********************************************************************************/

// class Person<T> {
//   name;
//   constructor(a: T) {
//     this.name = a;
//   }
// }

// const Person1 = new Person<string>("lee");
// const Person2 = new Person<number>(123);
// const Person3 = new Person<boolean>(false);

/*********************************************************************************************************************************/

/**************************************************************************
  Q. 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 
  3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
  오늘 배운 tuple 타입으로 타입지정합시다. 
  쉬워서 답은 생략합니다. 

  (예시) [ '동서녹차', 4000, true ] 이런 자료 만들고 타입지정하라는 소리입니다.
***************************************************************************/

// const foodArr: [string, number, boolean] = ["마라탕", 12000, true];

/***************************************************************************
Q2. 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?

let arr = ['동서녹차', 4000, true, false, true, true, false, true]
몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다. 

tuple 타입과 spread 연산자를 써보도록 합시다.
****************************************************************************/

// const arr: [string, number, ...boolean[]] = [
//   "동서녹차",
//   4000,
//   true,
//   false,
//   true,
//   true,
//   false,
//   true,
// ];

/****************************************************************
Q3. 함수에 타입지정을 해보도록 합시다.

1. 이 함수의 첫째 파라미터는 문자,
2. 둘째 파라미터는 boolean,
3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다. 
그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요? 
오늘 배운 tuple 타입과 rest parameter를 사용해봅시다.
*****************************************************************/

// type tupleType = [string, boolean, ...(string | number)[]];

// const tupleFunc = (...restParam: tupleType) => {
//   console.log(restParam);
// };

// tupleFunc("123", true, 123, "456", 789);

/**************************************************************************************************
Q4. 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 
함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다. 

(동작예시)
함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.
***************************************************************************************************/

// type FilterType = (...restParam: (string | number)[]) => [string[], number[]];

// const strNumFilter: FilterType = (...restParam) => {
//   const strArr: string[] = [];
//   const numArr: number[] = [];
//   restParam.forEach((v) => {
//     if (typeof v === "string") {
//       strArr.push(v);
//     } else if (typeof v === "number") {
//       numArr.push(v);
//     }
//   });

//   return [strArr, numArr];
// };

// const filteredResult = strNumFilter(123, "asd", 456, 789, "qwer");

// console.log(filteredResult);

/*********************************************************************************************************************************/

/********************************************************************************
  Q. 다음 타입을 변환기 돌려보십시오.

  type Bus = {
    color : string,
    model : boolean,
    price : number
  }

  동료가 잘못 만든 타입입니다.
  color, model, price 속성은 전부 string 또는 number 타입이어야합니다.

  1. 변환기 하나 만드시고
  2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.
*********************************************************************************/

// type Bus = {
//   color: string;
//   model: boolean;
//   price: number;
// };

// type TypeChanger<MyType> = {
//   [key in keyof MyType]: string | number;
// };

// type newType = TypeChanger<Bus>;

/***************************************************************************
Q2. 이런 변환기는 어떻게 만들어야할까요?

object안에 들어있는 모든 속성을
string, number 이렇게 고정된 타입으로 변환해주는게 아니라
내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.
****************************************************************************/

// type TestType = {
//   test: undefined;
//   test2: undefined;
//   test3: undefined;
// };

// type TypeChangerTwo<MyType, T> = {
//   [key in keyof MyType]: T;
// };

// type newTypeTwo = TypeChangerTwo<TestType, number>;

/*********************************************************************************************************************************/

/********************************************************************************************** 
Q. 타입 파라미터로 
1. array 타입을 입력하면
2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 
3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?

(동작예시)
let age1 :Age<[string, number]>;
let age2 :Age<[boolean, number]>; 
이러면 age1의 타입은 string, age2의 타입은 unknown이 되어야합니다. (array나 tuple이나 그게 그거임)
이걸 만족하는 type Age를 만들어봅시다.
**********************************************************************************************/

// type FirstItem<T> = T extends [string, ...any] ? T[0] : unknown;

// type TT = FirstItem<[string, number]>;

/***********************************************************
Q2. 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오. 

타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음
아무튼 함수의 파라미터타입이 남아야합니다.
************************************************************/

// type ParamType<T> = T extends (x: infer R) => any ? R : undefined;

// type SS = ParamType<(x: boolean) => void>;

//data.js를 참조 하여 작업

import { questions } from "./data.js";
const numberElement = document.querySelector(".number");
const questionElement = document.querySelector(".question");
const choice1 = document.querySelector(".choice1");
const choice2 = document.querySelector(".choice2");
const progressValue = document.querySelector(".value");

//현재 문제 번호를 변수로 만들자
let currentNumber = 0;

//MBTI 결과응 저장할 변수
let mbti = "";

function rederQuestion() {
  let question = questions[currentNumber];

  // data.js 의 첫번째 질문의 번호
  progressValue.style.width = (currentNumber + 1) * 10 + "%";
  numberElement.innerHTML = question.number;
  questionElement.innerHTML = question.question;
  choice1.innerHTML = question.choices[0].text;
  choice2.innerHTML = question.choices[1].text;
}
//현재 페이지 로딩시 실행되는 스크립트
rederQuestion();

//처리 절차
//1. 어느 버튼이 눌렸는지 확인이 가능해야함(이벤트 리스너를 달아줘야함)
//2. 아래쪽 버튼 두개중 한개를 클릭하면
// --> 다음 문제를 보여줘야함...
// -- MBTI 타입을 저장...

//버튼에 이벤트 리스너 달기
//()=>{} 익면 함수라고 함
choice1.addEventListener("click", 
  //콜백 함수(Callback funcyion)
  ()=>{nextQuestion(0)});
choice2.addEventListener("click", ()=>{nextQuestion(1)});
function nextQuestion(choice) {

  //1.mbti = 결과가 나와야함
  //2. 10문제 문항을 모두 선택 하면 출력 
  // 다음 문제가 없습니다 alert 로 출력
  // 전체 배열의 수 출력
  if(currentNumber < (questions.length-1)){
    
    let question = questions[currentNumber];
  
    //mbti 결과 생성(버튼 눌렀을때 처리);
    mbti = mbti + question.choices[choice].value;
    console.log('MBTI : ' + mbti);
    
    // console.log("MBTI: " + question.choices[choice].value);
    currentNumber++;
    rederQuestion();
  }else{
    //mbti검사 결과를 보여줄 페이지로 이동한다
    window.location.href = './results.html?str='+mbti+'&name=장원영';

    return;
  }


 

}














// console.log(questions[0].question);
// console.log(questions[0].choices[0].text);
// console.log(questions[0].choices[1].text);
//mbti 결과 생성(버튼 눌렀을때 처리);
// mbti = mbti + question.choices[1].value;
// console.log("MBTI: " + question.choices[1].value);
// currentNumber ++;
// rederQuestion();

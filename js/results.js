import {results , mbtis} from './data.js'




//127.0.0.1:5500/results.html?str=infj
// 1. str=infj 중에 infj 추출
// 2. infj 가 data.js mbtis 값 중 몇번째 값인지 확인
//      결과 infj=2
// 3. 결과 값과 일치 하는 results 배열에서
//      2번째 배열값을 가져와서 출력
// str=infj === 쿼리 스트링
const resultMBTI = new URLSearchParams(location.search).get("str");
console.log('resultMBTI =' + resultMBTI);

console.log(resultMBTI+"의 MBTI 값은 : "+ mbtis[resultMBTI]);

//MBTI 값을 색인값으로 전환 처리
let findIndex = mbtis[resultMBTI];
//색인 값으로 results에서 찾기
let find = results[findIndex];
const title = results[mbtis[resultMBTI]].title;
const title1 = results[findIndex].title;
const title3 = find.title;
console.log(title);


// 각 위치에 있는 태그 위치 가져오기
const titleEl = document.querySelector('.page-title');
titleEl.innerHTML = title;

//캐릭터 종류
const characterEl = document.querySelector('.character');
// src="./images/result_character1.png"
// date.js = character: '/images/result_character1.png'
const resultImgUrl = results[mbtis[resultMBTI]].character;

console.log(resultImgUrl);
characterEl.src = resultImgUrl;

//결과 4개 얻어오기
const boxEl = document.querySelectorAll('.box');
console.log(boxEl[0]);
//boxEl의 배열을 순회 하면서 값을 넣어주면 된다.
boxEl.forEach((x,index)=>{
  console.log(find.results[index]);
  x.innerHTML = find.results[index];
});
//직업상자 결과 연결 해야함
const jobEl = document.querySelectorAll('.job');
console.log(jobEl);

jobEl.forEach((x,i)=>{
  x.innerHTML = find.jobs[i];
});

//결과에 따른 lecturimg 연결
const imgEl = document.querySelector('.jobss');
const jobImg = results[mbtis[resultMBTI]].lectureImg;
console.log(imgEl);
console.log(jobImg)
imgEl.src = jobImg;

//결과에 따른 lecturUrl 열결
const urlEl = document.querySelector('.lecture');
const urlLec = results[mbtis[resultMBTI]].lectureUrl;
urlEl.href = urlLec;

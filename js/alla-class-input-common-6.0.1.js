// 제    목 : alla-input-common-6.0.1.js
// 작 성 자 : 김현수
// 작 성 일 : 2024.04.02

// 전역 변수 셋팅 : 프론트페이지 텍스트박스 주소값
let txt_info = document.getElementById('txt_info');
let txt_inputData = document.getElementById('txt_inputData');
let txt_outputArray = document.getElementById('txt_outputArray');
let txt_outputHtml = document.getElementById('txt_outputHtml');

// 전역 변수 셋팅 : 프론트페이지 DIV 주소값
let div_postView = document.getElementById('postView');

// 전역 변수 셋팅 : 문제정보 정리에 사용할 변수
let infoData_object;
let infoData_kind;
let infoData_year;
let infoData_seme;
let infoData_grade;
let infoData_prof;
let infoData_range;
let infoData_sNum;
let infoData_eNum;
let infoData_countNum;
let infoData_thumb;
let infoData_answer;

// 실행문 : 문제정보 입력 텍스트박스(txt_info)에 기초정보 제공
txt_info.value = '[과목명] \n[종  류] \n[연  도] \n[학  기] \n[학  년] \n[교수명] \n[셤범위] \n[시작넘] 1\n[종료넘] 101\n[썸네일] \n[정  답] ';

// --------------------------------------------------------------------------------------
// --------------------------------- INFO INPUT FUNCTION --------------------------------
// --------------------------------------------------------------------------------------

// 함수 : 입력한 문제정보를 수집하고, 문제정보 전역변수에 값을 할당하는 함수
let fnGetInfoData = () => {
  let infoData_all = txt_info.value;
  let infoIndex_object = infoData_all.indexOf('[과목명]');
  let infoIndex_kind = infoData_all.indexOf('[종  류]');
  let infoIndex_year = infoData_all.indexOf('[연  도]');
  let infoIndex_seme = infoData_all.indexOf('[학  기]');
  let infoIndex_grade = infoData_all.indexOf('[학  년]');
  let infoIndex_prof = infoData_all.indexOf('[교수명]');
  let infoIndex_range = infoData_all.indexOf('[셤범위]');
  let infoIndex_sNum = infoData_all.indexOf('[시작넘]');
  let infoIndex_eNum = infoData_all.indexOf('[종료넘]');
  let infoIndex_thumb = infoData_all.indexOf('[썸네일]');
  let infoIndex_answer = infoData_all.indexOf('[정  답]');
  let infoIndex_length = infoData_all.length;

  infoData_object = infoData_all.substring(infoIndex_object + 5, infoIndex_kind).trim();
  infoData_kind = infoData_all.substring(infoIndex_kind + 6, infoIndex_year).trim();
  infoData_year = infoData_all.substring(infoIndex_year + 6, infoIndex_seme).trim();
  infoData_seme = infoData_all.substring(infoIndex_seme + 6, infoIndex_grade).trim();
  infoData_grade = infoData_all.substring(infoIndex_grade + 6, infoIndex_prof).trim();
  infoData_prof = infoData_all.substring(infoIndex_prof + 5, infoIndex_range).trim();
  infoData_range = infoData_all.substring(infoIndex_range + 5, infoIndex_sNum).trim();
  infoData_sNum = infoData_all.substring(infoIndex_sNum + 5, infoIndex_eNum).trim();
  infoData_eNum = infoData_all.substring(infoIndex_eNum + 5, infoIndex_thumb).trim();
  infoData_countNum = Number(infoData_eNum) - Number(infoData_sNum) + 1;
  infoData_thumb = infoData_all.substring(infoIndex_thumb + 5, infoIndex_answer).trim();
  infoData_answer = infoData_all.substring(infoIndex_answer + 6, infoIndex_length).trim();

  // 포스팅 시, 편의를 위한 포스팅 제목 생성 : 텍스트박스(txt_title)에 뿌려주기
  let txt_title = document.getElementById('txt_title');
  txt_title.value = `방송대 방통대 ${infoData_object} ${infoData_kind}시험 20${infoData_year}년도 ${infoData_seme}학기 ${infoData_grade}학년 / 올에이클래스 기출문제 모의고사`;

  // 포스팅 시, 편의를 위한 포스팅 태그 생성 : 텍스트박스(txt_tag)에 뿌려주기
  let txt_tag = document.getElementById('txt_tag');
  txt_tag.value = `${infoData_object} ${infoData_kind}시험`;
};

// 함수 : inputData에서 처리한 문제내용 삭제
let fnDeleteUsedInputData = (origin) => {
  let inputDataValue = txt_inputData.value;
  txt_inputData.value = inputDataValue.replace(origin, '');
};

// --------------------------------------------------------------------------------------
// -------------------------------- GIHO CHANGE FUNCTION --------------------------------
// --------------------------------------------------------------------------------------

//replaceAll prototype 선언
String.prototype.replaceAll = function (org, dest) {
  return this.split(org).join(dest);
};

// 기호 replace
let fnReplace_gihoChange = (text) => {
  text = text.replaceAll('～', '~');
  text = text.replaceAll('․', 'ㆍ');
  text = text.replaceAll('·', 'ㆍ');
  text = text.replaceAll('⋅', 'ㆍ');
  text = text.replaceAll('󰡔', '『');
  text = text.replaceAll('ꡔ', '『');
  text = text.replaceAll('󰡕', '』');
  text = text.replaceAll('ꡕ', '』');
  text = text.replaceAll('｢', '「');
  text = text.replaceAll('｣', '」');
  text = text.replaceAll('‘', "'");
  text = text.replaceAll('’', "'");
  text = text.replaceAll('<', '&#60;');
  text = text.replaceAll('>', '&#62;');
  text = text.replaceAll(/\s*:\s*/g, '：');
  text = text.replaceAll(/\(\s*\)/g, '(/빈칸)'); // 연속된 괄호들을 /빈칸)으로 대체합니다.
  return text;
};

// 부정문 replace
let fnReplace_notChange = (text) => {
  text = text.replaceAll(' 먼 ', ' /부정먼/.부정 ');
  text = text.replaceAll(' 않은 ', ' /부정않은/.부정 ');
  text = text.replaceAll(' 않는 ', ' /부정않는/.부정 ');
  text = text.replaceAll(' 아닌 ', ' /부정아닌/.부정 ');
  text = text.replaceAll(' 어려운 ', ' /부정어려운/.부정 ');
  text = text.replaceAll(' 틀린 ', ' /부정틀린/.부정 ');
  text = text.replaceAll(' 부적절한 ', ' /부정부적절한/.부정 ');
  text = text.replaceAll(' 부적합한 ', ' /부정부적합한/.부정 ');
  text = text.replaceAll(' 못한 ', ' /부정못한/.부정 ');
  text = text.replaceAll(' 잘못 ', ' /부정잘못/.부정 ');
  text = text.replaceAll(' 잘못된 ', ' /부정잘못된/.부정 ');
  text = text.replaceAll(' 없는 ', ' /부정없는/.부정 ');
  text = text.replaceAll(' 다른 ', ' /부정다른/.부정 ');
  text = text.replaceAll(' 적은 ', ' /부정적은/.부정 ');
  text = text.replaceAll(' 힘든 ', ' /부정힘든/.부정 ');
  return text;
};

// --------------------------------------------------------------------------------------
// -------------------------------- HTML CHANGE FUNCTION --------------------------------
// --------------------------------------------------------------------------------------

// nagative words -> html convertor
let fnToHTML_commandChange = (text) => {
  text = text.replaceAll('/부정', '<span class="iub">');
  text = text.replaceAll('/.부정', '</span>');
  text = text.replaceAll('/밑줄', '<span class="iunder">');
  text = text.replaceAll('/.밑줄', '</span>');
  text = text.replaceAll('/윗줄', '<span class="iover">');
  text = text.replaceAll('/.윗줄', '</span>');
  text = text.replaceAll('/굵게', '<span class="ibold">');
  text = text.replaceAll('/.굵게', '</span>');
  text = text.replaceAll('/기움', '<i>');
  text = text.replaceAll('/.기움', '</i>');
  text = text.replaceAll('/미지수', '<span class="imath">');
  text = text.replaceAll('/.미지수', '</span>');
  text = text.replaceAll('/줄', '<br>');
  text = text.replaceAll('/빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
  text = text.replaceAll('/숏빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
  text = text.replaceAll('/롱빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
  text = text.replaceAll('/윗첨자', '<sup>');
  text = text.replaceAll('/.윗첨자', '</sup>');
  text = text.replaceAll('/아랫첨자', '<sub>');
  text = text.replaceAll('/.아랫첨자', '</sub>');
  text = text.replaceAll('/이미지', '<img src="');
  text = text.replaceAll('/.이미지', '">');
  // 보기문
  text = text.replaceAll('/단락 ', '<div class="allaExampleList_p">');
  text = text.replaceAll('/.단락', '</div>');
  text = text.replaceAll('/좌들 ', '<div class="allaExampleList_pleft">');
  text = text.replaceAll('/.좌들', '</div>');
  text = text.replaceAll('/바 ', '<div class="allaExampleList_bar">');
  text = text.replaceAll('/.바', '</div>');
  text = text.replaceAll('/영소 ', '<div class="allaExampleList_eng">');
  text = text.replaceAll('/.영소', '</div>');
  text = text.replaceAll('/괄호영대 ', '<div class="allaExampleList_eng_big_bra">');
  text = text.replaceAll('/.괄호영대', '</div>');
  text = text.replaceAll('/괄호영소 ', '<div class="allaExampleList_eng_small_bra">');
  text = text.replaceAll('/.괄호영소', '</div>');
  text = text.replaceAll('/한글 ', '<div class="allaExampleList_kor">');
  text = text.replaceAll('/.한글', '</div>');
  text = text.replaceAll('/괄호한글 ', '<div class="allaExampleList_kor_bra">');
  text = text.replaceAll('/.괄호한글', '</div>');
  text = text.replaceAll('/괄호자음 ', '<div class="allaExampleList_kor_con_bra">');
  text = text.replaceAll('/.괄호자음', '</div>');
  text = text.replaceAll('/서클 ', '<div class="allaExampleList_circle">');
  text = text.replaceAll('/.서클', '</div>');
  text = text.replaceAll('/중앙 ', '<div class="allaExampleAlign_center">');
  text = text.replaceAll('/.중앙', '</div>');
  text = text.replaceAll('/우측 ', '<div class="allaExampleAlign_right">');
  text = text.replaceAll('/.우측', '</div>');
  return text;
};

// 모바일 티스토리 접근 방지
let fnToHTML_tistoryMobileNoEntry = () => {
  return `
<!-- 수정: 모바일 방지 -->
<div>
\t<script>
\t\tif (window.location.pathname.split("/")[1] === "m" && navigator.userAgent.indexOf("Tistory") === -1 && navigator.userAgent.indexOf("Android") === -1) {
\t\twindow.location.href = window.location.origin + window.location.pathname.substr(2);
\t\t}
\t</script>
</div>
<!-- /.수정: 모바일 방지 -->
<!-- ------------------------------------------------------------------------------------ -->

`;
};

// [toHTML] 썸네일
let fnToHTML_thumbnail = () => {
  return `
<!-- 썸네일 영역 -->
<div class="alla6ThumbDiv">
\t${infoData_thumb}
</div>
<!-- // 썸네일 영역 -->
<!-- ------------------------------------------------------------------------------------ -->

`;
};

// [toHTML] 공지사항 Header
let fnToHTML_noticeTop = () => {
  return `
<!-- 공지사항 Header 영역 -->
<div class="alla6NoticeHeaderDiv">
</div>
<!-- ------------------------------------------------------------------------------------ -->

`;
};

// [toHTML] 가이드(Img)
let fnToHTML_guide = () => {
  return `
<!-- 가이드 영역 -->
<div class="alla6GuideDiv">
\t<img src="" alt="올에이클래스 이용안내 이미지입니다. 올에이클래스는 인터넷 익스플로러를 제외한 크롬엔진 기반의 브라우저에서만 원활히 이용가능합니다.">
</div>
<!-- ------------------------------------------------------------------------------------ -->

`;
};

// [toHTML] 타이틀
let fnToHTML_title = () => {
  return `
<!-- 타이틀 영역 -->
<div class="alla6TitleDiv">
\t<table class="alla6TitleTbl">
\t\t<tbody>
\t\t\t<colgroup><col width="100px"><col></colgroup>
\t\t\t<tr><td colspan="3"><span class="ibold">20${infoData_year}</span>&nbsp;학년도&nbsp;&nbsp;<span class="ibold">${infoData_seme}</span>&nbsp;학기&nbsp;&nbsp;<span class="ibold">${infoData_grade}</span>&nbsp;학년&nbsp;&nbsp;<span class="ibold">${infoData_countNum}</span>&nbsp;문항</td></tr>
\t\t\t<tr><td colspan="3">${infoData_object}</td></tr>
\t\t\t<tr><td>시험종류&nbsp;&nbsp;&nbsp;:</td><td>${infoData_kind}시험</td></tr>
\t\t\t<tr><td>출제위원&nbsp;&nbsp;&nbsp;:</td><td>${infoData_prof}</td></tr>
\t\t\t<tr><td>출제범위&nbsp;&nbsp;&nbsp;:</td><td>${infoData_range}</td></tr>
\t\t\t<tr><td>자료출처&nbsp;&nbsp;&nbsp;:</td><td>한국방송통신대학교</td></tr>
\t\t\t<tr><td>웹앱제작&nbsp;&nbsp;&nbsp;:</td><td>올에이클래스 김현수</td></tr>
\t\t</tbody>
\t</table>
</div>
<!-- ------------------------------------------------------------------------------------ -->

`;
};

// [toHTML] 그룹 문제 (시작)
let fnToHTML_groupQuestionTop = (question) => {
  question = fnToHTML_commandChange(question);
  return `
<!-- 그룹 문제 -->
<div class="alla6BasicDiv">
\t<form>
\t\t<table class="alla6BasicTbl">
\t\t\t<tbody>
\t\t\t\t<!-- 질의 -->
\t\t\t\t<tr class="alla6GroupQuestionTr">
\t\t\t\t\t<td>
\t\t\t\t\t\t<span class="alla6QuestionNo">※</span>${question}
\t\t\t\t\t</td>
\t\t\t\t</tr>

`;
};

// [toHTML] 그룹 문제 (종료)
let fnToHTML_groupQuestionBottom = () => {
  return `
\t\t\t</tbody>
\t\t</table>
\t</form>
</div>
<!-- //그룹 문제-->
<!-- ------------------------------------------------------------------------------------ -->

`;
};

// [toHTML] 일반 문제
let fnToHTML_normalQuestionQuiz = (questionNo, question) => {
  let number;
  Number(questionNo) < 10 ? (number = '0' + questionNo) : (number = questionNo);
  question = fnToHTML_commandChange(question);
  return `
<!-- 문제 : ${number} -->
<div class="alla6BasicDiv">
\t<form>
\t\t<table class="alla6BasicTbl" id="alla6BasicTbl${number}">
\t\t\t<tbody>
\t\t\t\t<!-- 질의 -->
\t\t\t\t<tr class="alla6QuestionTr">
\t\t\t\t\t<td>
\t\t\t\t\t\t<span class="alla6QuestionNo">${number}</span>${question}
\t\t\t\t\t</td>
\t\t\t\t</tr>

`;
};

// [toHTML] 보기문
let fnToHTML_exampleTxt = (example) => {
  example = fnToHTML_commandChange(example);
  return `
\t\t\t\t<!-- 보기문 -->
\t\t\t\t<tr class="alla6ExampleTr_Txt">
\t\t\t\t\t<td>
\t\t\t\t\t\t${example}
\t\t\t\t\t</td>
\t\t\t\t</tr>
\t\t\t\t<!-- 빈줄 -->
\t\t\t\t<tr class="alla6BlankTr">
\t\t\t\t\t<td></td>
\t\t\t\t</tr>

`;
};

// [toHTML] 보기그림
let fnToHTML_exampleImg = (example) => {
  example = fnToHTML_commandChange(example);
  return `
\t\t\t\t<!-- 보기그림 -->
\t\t\t\t<tr class="alla6ExampleTr_Img">
\t\t\t\t\t<td>
\t\t\t\t\t\t${example}
\t\t\t\t\t</td>
\t\t\t\t</tr>
\t\t\t\t<!-- 빈줄 -->
\t\t\t\t<tr class="alla6BlankTr">
\t\t\t\t\t<td></td>
\t\t\t\t</tr>

`;
};

// [toHTML] 객관식 선택지
let fnToHTML_normalQuestionSelect = (questionNo, answer_1, answer_2, answer_3, answer_4, solve) => {
  let number;
  Number(questionNo) < 10 ? (number = '0' + questionNo) : (number = questionNo);
  answer_1 == undefined ? (answer_1 = '') : (answer_1 = fnToHTML_commandChange(answer_1));
  answer_2 == undefined ? (answer_2 = '') : (answer_2 = fnToHTML_commandChange(answer_2));
  answer_3 == undefined ? (answer_3 = '') : (answer_3 = fnToHTML_commandChange(answer_3));
  answer_4 == undefined ? (answer_4 = '') : (answer_4 = fnToHTML_commandChange(answer_4));
  solve == undefined ? (solve = '') : (solve = fnToHTML_commandChange(solve));

  return `
\t\t\t\t<!-- 객관식 1번 -->
\t\t\t\t<tr class="alla6AnswerTr">
\t\t\t\t\t<td class="alla6AnswerTd">
\t\t\t\t\t\t<label for="radio-${number}-1">
\t\t\t\t\t\t\t<input class="alla6AnswerRadio" type="radio" id="radio-${number}-1" name="question-${number}" value="1">
\t\t\t\t\t\t\t${answer_1}
\t\t\t\t\t\t</label>
\t\t\t\t\t</td>
\t\t\t\t</tr>
\t\t\t\t<!-- 객관식 2번 -->
\t\t\t\t<tr class="alla6AnswerTr">
\t\t\t\t\t<td class="alla6AnswerTd">
\t\t\t\t\t\t<label for="radio-${number}-2">
\t\t\t\t\t\t\t<input class="alla6AnswerRadio" type="radio" id="radio-${number}-2" name="question-${number}" value="2">
\t\t\t\t\t\t\t${answer_2}
\t\t\t\t\t\t</label>
\t\t\t\t\t</td>
\t\t\t\t</tr>
\t\t\t\t<!-- 객관식 3번 -->
\t\t\t\t<tr class="alla6AnswerTr">
\t\t\t\t\t<td class="alla6AnswerTd">
\t\t\t\t\t\t<label for="radio-${number}-3">
\t\t\t\t\t\t\t<input class="alla6AnswerRadio" type="radio" id="radio-${number}-3" name="question-${number}" value="3">
\t\t\t\t\t\t\t${answer_3}
\t\t\t\t\t\t</label>
\t\t\t\t\t</td>
\t\t\t\t</tr>
\t\t\t\t<!-- 객관식 4번 -->
\t\t\t\t<tr class="alla6AnswerTr">
\t\t\t\t\t<td class="alla6AnswerTd">
\t\t\t\t\t\t<label for="radio-${number}-4">
\t\t\t\t\t\t\t<input class="alla6AnswerRadio" type="radio" id="radio-${number}-4" name="question-${number}" value="4">
\t\t\t\t\t\t\t${answer_4}
\t\t\t\t\t\t</label>
\t\t\t\t\t</td>
\t\t\t\t</tr>
\t\t\t\t<!-- 빈줄 -->
\t\t\t\t<tr class="alla6BlankTr">
\t\t\t\t\t<td></td>
\t\t\t\t</tr>
\t\t\t\t<!-- 메인 문제 해설 -->
\t\t\t\t<tr class="alla6SolveTr">
\t\t\t\t\t<td>
\t\t\t\t\t\t해설)<br>
\t\t\t\t\t\t${solve}
\t\t\t\t\t</td>
\t\t\t\t</tr>
\t\t\t</tbody>
\t\t</table>
\t</form>
</div>
<!-- //문제 : ${number} -->
<!-- ------------------------------------------------------------------------------------ -->

`;
};

// [toHTML] 채점 / 다시풀기 버튼
let fnToHTML_checkButton = () => {
  return `
<!-- 채점 버튼 영역 -->
<div class="alla6CheckDiv">
\t<form>
\t\t<table class="alla6CheckTbl">
\t\t\t<tbody>
\t\t\t\t<tr>
\t\t\t\t\t<td>
\t\t\t\t\t\t<label>각 문제마다 채점을 해줍니다.</label>
\t\t\t\t\t\t<button type="button">채점하기</button><br>
\t\t\t\t\t\t<label>모든 답안을 초기화합니다.</label>
\t\t\t\t\t\t<button type="button">다시풀기</button>
\t\t\t\t\t</td>
\t\t\t\t</tr>
\t\t\t</tbody>
\t\t</table>
\t</form>
</div>
<!-- // 채점 버튼 영역 -->
<!-- ------------------------------------------------------------------------------------ -->

`;
};

// [toHTML] 채점 영역
let fnToHTML_GradingExams = () => {
  return `
<!-- 채점 영역 -->
<div class="alla6GradingDiv">
</div>
<!-- ------------------------------------------------------------------------------------ -->

`;
};

// [toHTML] 초기화 영역
let fnToHTML_resetExams = () => {
  return `
<!-- 초기화 영역 -->
<div class="alla6ResetDiv">
</div>
<!-- ------------------------------------------------------------------------------------ -->

`;
};

// [toHTML] 정답지
let fnToHTML_answerTable = (answer) => {
  return `
<!-- 정답지 영역 -->
<div class="alla6AnswerTableDiv">
\t<table>
\t\t<tbody>
\t\t\t<tr><th>문제답안</th></tr>
\t\t\t<tr><td>${answer}</td></tr>
\t\t</tbody>
\t</table><br>
</div>

`;
};

// [toHTML] 타년도 문제 바로가기
let fnToHTML_otherExams = () => {
  return `
<!-- 타년도 문제 바로가기 영역 -->
<div class="alla6OtherExamDiv">
</div>
<!-- // 타년도 문제 바로가기 영역 -->
<!-- ------------------------------------------------------------------------------------ -->

`;
};

// [toHTML] 문제 다운로드 바로가기
let fnToHTML_downloadExams = () => {
  return `
<!-- 문제 다운로드 바로가기 영역 -->
<div class="alla6DownloadExamDiv">
</div>
<!-- // 문제 다운로드 바로가기 영역 -->
<!-- ------------------------------------------------------------------------------------ -->

`;
};

// [toHTML] 공지사항 Footer
let fnToHTML_noticeBottom = () => {
  return `
<!-- 공지사항 Footer 영역 -->
<div class="alla6NoticeFooterDiv">
</div>
<!-- ------------------------------------------------------------------------------------ -->

`;
};

// --------------------------------------------------------------------------------------
// ------------------------------------ EXE FUNCTION ------------------------------------
// --------------------------------------------------------------------------------------

let fnCallGetQuestion = (enter) => {
  let str = txt_inputData.value;
  let eNum = infoData_eNum;
  enter == undefined ? (enter = '') : (enter = '\n');

  let arrContents = fnGetQuestion(str, eNum, enter);
  return arrContents;
};

let fnCallGetQuestionDetail = (questions) => {
  let detail = [];
  questions.forEach((item) => {
    let type = item.type;
    let simbol = item.simbol;
    let str = item.str;
    detail.push(fnGetQuestionDetail(str, simbol, type));
  });
  return detail;
};

let fnPrintInputDataBox = (arrQuestionDetail, not) => {
  txt_inputData.value = '';
  for (let i = 1; i <= arrQuestionDetail.length; i++) {
    let j = i - 1;
    arrQuestionDetail[j].forEach((item) => {
      switch (item.type) {
        case 'simbol':
          let editSimbol = item.content.replace('\\.', '.');
          txt_inputData.value += `\n${editSimbol}\n`;
          i == arrQuestionDetail.length && (infoData_countNum = Number(editSimbol.replace('.', '')));
          break;
        case 'question':
          item.content = fnReplace_gihoChange(item.content);
          not == 'not' && (item.content = fnReplace_notChange(item.content));
          txt_inputData.value += `${item.content}\n`;
          break;
        case 'example_txt':
          item.content = fnReplace_gihoChange(item.content);
          txt_inputData.value += `/보기문\n${item.content}\n`;
          break;
        case 'example_img':
          // item.content = fnReplace_gihoChange(item.content);
          txt_inputData.value += `/보기그림\n${item.content}\n`;
          break;
        case 'select_1':
          item.content = fnReplace_gihoChange(item.content);
          txt_inputData.value += `① ${item.content}\n`;
          break;
        case 'select_2':
          item.content = fnReplace_gihoChange(item.content);
          txt_inputData.value += `② ${item.content}\n`;
          break;
        case 'select_3':
          item.content = fnReplace_gihoChange(item.content);
          txt_inputData.value += `③ ${item.content}\n`;
          break;
        case 'select_4':
          item.content = fnReplace_gihoChange(item.content);
          txt_inputData.value += `④ ${item.content}\n`;
          break;
        case 'solve':
          item.content = fnReplace_gihoChange(item.content);
          txt_inputData.value += `/해설\n${item.content}\n`;
          break;
        default:
      }
    });
    // arrQuestionDetail에 key:solve가 없을 경우 /해설\n\n만 추가한다.
    let foundSolve = false;
    arrQuestionDetail[j].forEach((item) => {
      item.type === 'simbol' && item.content === '※.' && (foundSolve = true);
      item.type === 'solve' && (foundSolve = true);
    });
    !foundSolve && (txt_inputData.value += `/해설\n\n`);
  }
};

let fnPrintOutputHtmlBox = (arrQuestionDetail) => {
  // 문제 내용에 따른 html 생성함수 호출하는 함수
  let fnCalltoHtml = (objDetail) => {
    // - 변수 할당
    let simbol = objDetail.simbol;
    let question = objDetail.question;
    let arrExample_txt = objDetail.arrExample_txt; // 조건문 : length
    let arrExample_img = objDetail.arrExample_img; // 조건문 : length
    let select_1 = objDetail.select_1;
    let select_2 = objDetail.select_2;
    let select_3 = objDetail.select_3;
    let select_4 = objDetail.select_4;
    let solve = objDetail.solve; // 조건문 : undefined
    let srcHtml;
    // - 그룹문제 / 일반문제 구분
    if (simbol == '※') {
      // 그룹문제
      // - 그룹문제 시작부
      srcHtml = fnToHTML_groupQuestionTop(question);
      // - 보기문
      if (arrExample_txt.length !== 0) {
        arrExample_txt.forEach((example) => {
          srcHtml += fnToHTML_exampleTxt(example);
        });
      }
      // - 보기그림
      if (arrExample_img.length !== 0) {
        arrExample_img.forEach((example) => {
          srcHtml += fnToHTML_exampleImg(example);
        });
      }
      // - 그룹문제 종료부
      srcHtml += fnToHTML_groupQuestionBottom();
    } else {
      // 일반문제
      // - 일반문제 시작
      srcHtml = fnToHTML_normalQuestionQuiz(simbol, question);
      // - 보기문
      if (arrExample_txt.length !== 0) {
        arrExample_txt.forEach((example) => {
          srcHtml += fnToHTML_exampleTxt(example);
        });
      }
      // - 보기그림
      if (arrExample_img.length !== 0) {
        arrExample_img.forEach((example) => {
          srcHtml += fnToHTML_exampleImg(example);
        });
      }
      // - 객관식
      srcHtml += fnToHTML_normalQuestionSelect(simbol, select_1, select_2, select_3, select_4, solve);
    }
    return srcHtml;
  };
  // txt_outputHtml 텍스트박스 초기화
  txt_outputHtml.value = '';
  // 포스팅 윗쪽 기본 HTML 출력
  txt_outputHtml.value += fnToHTML_tistoryMobileNoEntry(); // 모바일 방지 html 코드
  txt_outputHtml.value += fnToHTML_thumbnail(); // 썸네일 코드 html코드
  txt_outputHtml.value += fnToHTML_noticeTop(); // 공지사항(상단) html코드
  txt_outputHtml.value += fnToHTML_guide(); // 이용가이드 html코드
  txt_outputHtml.value += fnToHTML_title(); // 문제타이틀 html코드
  // 문제 상세내용 변수로 할당
  arrQuestionDetail.forEach((arrItem) => {
    let simbol, question, select_1, select_2, select_3, select_4, solve;
    let arrExample_txt = [];
    let arrExample_img = [];
    arrItem.forEach((item) => {
      switch (item.type) {
        case 'simbol':
          let numberSimbol = Number(item.content.replace('\\.', ''));
          isNaN(numberSimbol) ? (simbol = '※') : (simbol = numberSimbol);
          break;
        case 'question':
          item.content = fnReplace_gihoChange(item.content);
          question = `${item.content}`;
          break;
        case 'example_txt':
          item.content = fnReplace_gihoChange(item.content);
          arrExample_txt.push(`${item.content}`);
          break;
        case 'example_img':
          item.content = fnReplace_gihoChange(item.content);
          arrExample_img.push(`${item.content}`);
          break;
        case 'select_1':
          item.content = fnReplace_gihoChange(item.content);
          select_1 = `${item.content}`;
          break;
        case 'select_2':
          item.content = fnReplace_gihoChange(item.content);
          select_2 = `${item.content}`;
          break;
        case 'select_3':
          item.content = fnReplace_gihoChange(item.content);
          select_3 = `${item.content}`;
          break;
        case 'select_4':
          item.content = fnReplace_gihoChange(item.content);
          select_4 = `${item.content}`;
          break;
        case 'solve':
          item.content = fnReplace_gihoChange(item.content);
          solve = `${item.content}`;
          break;
        default:
      }
    });
    let objDetail = { simbol, question, arrExample_txt, arrExample_img, select_1, select_2, select_3, select_4, solve };
    txt_outputHtml.value += fnCalltoHtml(objDetail);
  });
  // 포스팅 아랫쪽 기본 HTML 출력
  txt_outputHtml.value += fnToHTML_GradingExams(); // 채점 영역 html코드
  txt_outputHtml.value += fnToHTML_resetExams(); // 초기화 영역 html코드
  txt_outputHtml.value += fnToHTML_answerTable(infoData_answer); // 정답지 html코드
  txt_outputHtml.value += fnToHTML_otherExams(); // 타년도 문제 바로가기 html코드
  txt_outputHtml.value += fnToHTML_downloadExams(); // 문제 다운로드 바로가기 html코드
  txt_outputHtml.value += fnToHTML_noticeBottom(); // 공지사항(하단) html코드
  // [미리보기] 포스트뷰
  div_postView.innerHTML = '';
  div_postView.innerHTML = txt_outputHtml.value;
};

// 문제 정렬시키는 함수 호출
let btn_sort = (enter, not) => {
  // 문제정보 수집
  fnGetInfoData();

  // 텍스트박스 inputData 공백 첫줄 추가하기
  let temp = txt_inputData.value;
  txt_inputData.value = '\n' + temp;

  // 텍스트박스 inputData 줄마다 양끝 공백 제거하기
  let arrTemp = temp.split('\n');
  temp = '';
  arrTemp.forEach((item) => {
    temp += item.trim();
    temp += '\n';
  });

  // txt_inputData.value 를 temp로 교체하기
  txt_inputData.value = '';
  txt_inputData.value = temp;

  // 문제 구분하는 함수 실행
  let arrQuestions = fnCallGetQuestion(enter);

  // 문제 한개씩 상세내용 구분하는 함수 실행
  let arrQuestionDetail = fnCallGetQuestionDetail(arrQuestions);

  // txt_inputData 텍스트박스에 정리된 내용 출력
  fnPrintInputDataBox(arrQuestionDetail, not);
};

// HTML 만드는 함수 호출
let btn_toHtml = () => {
  // 문제 구분하는 함수 실행
  let arrQuestions = fnCallGetQuestion('\n');

  // 문제 한개씩 상세내용 구분하는 함수 실행
  let arrQuestionDetail = fnCallGetQuestionDetail(arrQuestions);

  // 문제 상세내용 변수로 분할하여, 정리하는 함수 실행
  fnPrintOutputHtmlBox(arrQuestionDetail);
};

// 예전 문제정리본 최신정리본으로 변환하는 함수 호출 (ex. 그룹문제: /1/ -> ※.)
let btn_oldConvertor = () => {
  let text = txt_inputData.value;
  let arrPattern = [];
  for (let i = 1; i <= 100; i++) {
    arrPattern.push(`/${i}/\n`);
  }
  arrPattern.forEach((pattern) => {
    text = text.replace(pattern, `※.\n`);
  });
  txt_inputData.value = text;
};

// 팝업 열고 닫는 함수
let btn_togglePopup = (elementById, how) => {
  // 팝업 div 가져오기
  let popup = document.getElementById(elementById);

  // 보기문 편집기 팝업이 열려있다면 닫을 때 textarea#txt_example.value(보기문 편집기 텍스트박스)를 복사해라
  if (elementById == 'ExamplePopupWrapper' && how == 'save') {
    if (popup.style.display === 'flex') {
      // inputData 마우스 드래그한 블록 텍스트정보 가져오기
      let inputData = document.getElementById('txt_inputData');
      let startIndex = inputData.selectionStart;
      let endIndex = inputData.selectionEnd;

      // example 텍스트 정보 가져오기
      let txt_example = document.getElementById('txt_example');
      let exampleData = txt_example.value;

      // 기존 문제입력창 텍스트에서 선택한 블록부분을 새로 편집한 내용으로 교체
      inputData.value = inputData.value.substring(0, startIndex) + exampleData + inputData.value.substring(endIndex);
    } else {
      // 팝업 열기 또는 닫기
      popup.style.display = popup.style.display === 'none' ? 'flex' : 'none';
    }
  }

  // 보기문 편집기 외 팝업이라면 그냥 열기 또는 닫기
  popup.style.display = popup.style.display === 'none' ? 'flex' : 'none';

  // 팝업 열 때 textarea#txt_inputData.value(문제입력 텍스트박스)에서 커서블록잡은 텍스트 가져와서 textarea#txt_example.value(보기문 편집기 텍스트박스)에 뿌려라
  if (elementById == 'ExamplePopupWrapper') {
    let fromTextarea = document.getElementById('txt_inputData');
    let toTextarea = document.getElementById('txt_example');
    if (fromTextarea.selectionStart >= 0 && fromTextarea.selectionEnd) {
      let startTextIndex = fromTextarea.selectionStart;
      let endTextIndex = fromTextarea.selectionEnd;
      let blockText = fromTextarea.value.substring(startTextIndex, endTextIndex);
      toTextarea.value = blockText;
    }
  }
};

// txt_inputData에 명령어 바로 입력하는 버튼 함수 #btnList_command
let btn_cmd = (type, kind) => {
  // inputData에서 블록영역 텍스트 가져오기
  let inputData = document.getElementById('txt_inputData');
  let startIndex = inputData.selectionStart;
  let endIndex = inputData.selectionEnd;
  let selectedText = inputData.value.substring(startIndex, endIndex);
  let selectedTextTrim = selectedText.trim();
  let replacement;

  if (type == 'double') {
    // 부정, 굵게, 기움, 밑줄, 윗줄, 윗첨자, 아랫첨자, 미지수, 이미지
    // 명령어 뒤에 빈칸 없는 유형
    if (selectedTextTrim.startsWith(`/${kind}`) && selectedTextTrim.endsWith(`/.${kind}`)) {
      // 이미 kind 표식이 되어있는 경우, 삭제하기
      replacement = selectedText.replace(`/${kind}`, ``);
      replacement = replacement.replace(`/.${kind}`, ``);
    } else {
      // 추가할 kind 표시 및 블록 앞뒤로 빈 칸 여부 확인하여 기존과 동일하게 추가하기
      replacement = `/${kind}` + selectedText.trim() + `/.${kind}`;
      if (selectedText.endsWith(' ')) {
        replacement += ' ';
      }
      if (selectedText.startsWith(' ')) {
        replacement = ' ' + replacement;
      }
    }
  } else if (type == 'doubleSpace') {
    // 좌들, 중앙, 우측
    // 명령어 뒤에 빈칸 하나 더 붙는 유형
    if (selectedTextTrim.startsWith(`/${kind} `) && selectedTextTrim.endsWith(`/.${kind}`)) {
      // 이미 kind 표식이 되어있는 경우, 삭제하기
      replacement = selectedText.replace(`/${kind} `, ``);
      replacement = replacement.replace(`/.${kind}`, ``);
    } else {
      // 추가할 kind 표시 및 블록 앞뒤로 빈 칸 여부 확인하여 기존과 동일하게 추가하기
      replacement = `/${kind} ` + selectedText.trim() + `/.${kind}`;
      if (selectedText.endsWith(' ')) {
        replacement += ' ';
      }
      if (selectedText.startsWith(' ')) {
        replacement = ' ' + replacement;
      }
    }
  } else if (type == 'single') {
    // 줄, 빈칸, 숏빈칸, 롱빈칸, 보기문, 보기그림
    if (selectedTextTrim.startsWith(`/${kind}`)) {
      replacement = selectedText.replace(`/${kind}`, ``);
    } else {
      // 추가할 kind 표시 및 빈 칸 여부 확인
      replacement = `/${kind}`;
    }
  } else if (type == 'single/n') {
    // ※.
    // 추가할 kind 표시 및 빈 칸 여부 확인
    replacement = `${kind}\n`;
  } else if (type == 'example') {
    // 기존에 보기문\n, 보기그림\n 으로 사용했으나
    // 지금은 사용안함 (사유: 블록잡은 영역이 그대로 남아서)
    // 추가할 kind 표시 및 빈 칸 여부 확인
    replacement = `/${kind}` + selectedText.trim();
  }

  // 기존 텍스트에서 선택한 부분을 새로운 부정 표시로 교체
  inputData.value = inputData.value.substring(0, startIndex) + replacement + inputData.value.substring(endIndex);

  // 커서 위치 재조정
  let newPosition = startIndex + `/${kind}`.length;
  inputData.setSelectionRange(newPosition, newPosition);
};

// inputData.value를 .txt 파일로 저장하는 함수 호출
let btn_save = (arrTextarea) => {
  let textToSave = '';
  arrTextarea.forEach((textarea) => {
    textToSave += document.getElementById(textarea).value; // 저장할 text 내용
    textToSave += '\n\n\n';
  });
  if (infoData_object === undefined || infoData_object == '') {
    alert('과목정보가 없습니다.');
  } else {
    console.log(infoData_object);
    let fileName = `${infoData_object}-${infoData_kind}-${infoData_year}-${infoData_seme}-${infoData_grade}.txt`; // 저장할 file 이름
    let blob = new Blob([textToSave], { type: 'text/plain' });
    let a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    a.click();
  }
};

/* -------------------------------------------- */
/* 종  료 : alla-class-input-common-6.0.1.js    */
/* -------------------------------------------- */

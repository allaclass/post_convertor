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

// 전역 변수 셋팅 : 문제내용 정리에 사용할 배열
let array_lv1 = [];
let array_lv2 = [];

// 실행문 : 문제정보 입력 텍스트박스(txt_info)에 기초정보 제공
txt_info.value = '[과목명] \n[종  류] \n[연  도] \n[학  기] \n[학  년] \n[교수명] \n[셤범위] \n[시작넘] \n[종료넘] \n[썸네일] \n[정  답] ';

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

// array_lv1_input
function array_lv1_input() {
  let gNum = 0;

  // html source
  txt_outputHtml_reset();
  html_mobile_url_no();
  html_thumb();
  html_notice_header();
  html_guide();
  html_title();

  for (let i = 0; i < infoData_countNum * 2; i++) {
    // sNum(start number), nNum(next number), eNum(end number), gNum(group number)
    let sNum = parseInt(infoData_sNum) + i + gNum;
    let nNum = sNum + 1;
    let eNum = parseInt(infoData_eNum);
    // sText(search start text), nText(search next text)
    let sText = String(sNum) + '.';
    let nText = String(nNum) + '.';
    // gIndex(group text index), sIndex(start text index), nIndex(next text index), eIndex(end text index)
    let gsIndex = txt_inputData.value.indexOf('/' + String(sNum) + '/');
    let gnIndex = txt_inputData.value.indexOf('/' + String(nNum) + '/');
    let sIndex = txt_inputData.value.indexOf(sText);
    let nIndex = txt_inputData.value.indexOf(nText);
    let eIndex = txt_inputData.value.length;

    // execute
    if (gsIndex >= 0) {
      // 그룹문제문
      // variable
      var origin = txt_inputData.value.substring(gsIndex, sIndex);
      // variable - exe
      var number = String(sNum);
      var number_txt = '/' + String(number) + '/';
      var number_length = number_txt.length;
      if (origin.indexOf('/보기문') > 0) {
        // 보기문
        if (origin.indexOf('/추가보기문') > 0) {
          // 보기문 / 추가보기문
          var example_txt_1s = origin.indexOf('/보기문');
          var example_txt_2s = origin.indexOf('/추가보기문');
          var question_ori = origin.substring(number_length, example_txt_1s).trim();
          var question = question_nagative_words(question_ori);
          var gihowords_ori = origin.substring(example_txt_1s + 4, example_txt_2s).trim();
          var example_1 = other_giho_words(gihowords_ori);
          var gihowords_ori = origin.substring(example_txt_2s + 6, origin.length).trim();
          var example_2 = other_giho_words(gihowords_ori);
          // variable - result
          var result = '/' + number + '/\n' + question + '\n/보기문\n' + example_1 + '\n/추가보기문\n' + example_2 + '\n\n';
          var consolelog = 'number : /' + number + '/\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_txt_add : ' + example_2 + '\n\n';
          var type = 'type : Group Question / example_txt / example_txt_add\n';
          // console test
          console.log('Group Question / example_txt / example_txt_add');
          console.log(consolelog);
          // html source
          html_group_question_quiz(question);
          html_example_txt(example_1);
          html_example_txt(example_2);
          html_group_question_end();
        } else if (origin.indexOf('/추가보기그림') > 0) {
          // 보기문 / 추가보기그림
          var example_txt_1s = origin.indexOf('/보기문');
          var example_img_2s = origin.indexOf('/추가보기그림');
          var question_ori = origin.substring(number_length, example_txt_1s).trim();
          var question = question_nagative_words(question_ori);
          var gihowords_ori = origin.substring(example_txt_1s + 4, example_img_2s).trim();
          var example_1 = other_giho_words(gihowords_ori);
          var example_2 = origin.substring(example_img_2s + 7, origin.length).trim();
          // variable - result
          var result = '/' + number + '/\n' + question + '\n/보기문\n' + example_1 + '\n/추가보기그림\n' + example_2 + '\n\n';
          var consolelog = 'number : /' + number + '/\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_img_add : ' + example_2 + '\n\n';
          var type = 'type : Group Question / example_txt / example_img_add\n';
          // console test
          console.log('Group Question / example_txt / example_img_add');
          console.log(consolelog);
          // html source
          html_group_question_quiz(question);
          html_example_txt(example_1);
          html_example_img(example_2);
          html_group_question_end();
        } else {
          // 보기문만
          var example_txt_1s = origin.indexOf('/보기문');
          var question_ori = origin.substring(number_length, example_txt_1s).trim();
          var question = question_nagative_words(question_ori);
          var gihowords_ori = origin.substring(example_txt_1s + 4, origin.length).trim();
          var example_1 = other_giho_words(gihowords_ori);
          // variable - result
          var result = '/' + number + '/\n' + question + '\n/보기문\n' + example_1 + '\n\n';
          var consolelog = 'number : /' + number + '/\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\n\n';
          var type = 'type : Group Question / example_txt\n';
          // console test
          console.log('Group Question / example_txt');
          console.log(consolelog);
          // html source
          html_group_question_quiz(question);
          html_example_txt(example_1);
          html_group_question_end();
        }
      } else if (origin.indexOf('/보기그림') > 0) {
        // 보기그림
        if (origin.indexOf('/추가보기그림') > 0) {
          // 보기그림 / 추가보기그림
          var example_img_1s = origin.indexOf('/보기그림');
          var example_img_2s = origin.indexOf('/추가보기그림');
          var question_ori = origin.substring(number_length, example_img_1s).trim();
          var question = question_nagative_words(question_ori);
          var example_1 = origin.substring(example_img_1s + 5, example_img_2s).trim();
          var example_2 = origin.substring(example_img_2s + 7, origin.length).trim();
          // variable - result
          var result = '/' + number + '/\n' + question + '\n/보기그림\n' + example_1 + '\n/추가보기그림\n' + example_2 + '\n\n';
          var consolelog = 'number : /' + number + '/\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_img_add : ' + example_2 + '\n\n';
          // console test
          console.log('Group Question / example_img / example_img_add');
          console.log(consolelog);
          // html source
          html_group_question_quiz(question);
          html_example_img(example_1);
          html_example_img(example_2);
          html_group_question_end();
        } else if (origin.indexOf('/추가보기문') > 0) {
          // 보기그림 / 추가보기문
          var example_img_1s = origin.indexOf('/보기그림');
          var example_txt_2s = origin.indexOf('/추가보기문');
          var question_ori = origin.substring(number_length, example_img_1s).trim();
          var question = question_nagative_words(question_ori);
          var example_1 = origin.substring(example_img_1s + 5, example_txt_2s).trim();
          var gihowords_ori = origin.substring(example_txt_2s + 6, origin.length).trim();
          var example_2 = other_giho_words(gihowords_ori);
          // variable - result
          var result = '/' + number + '/\n' + question + '\n/보기그림\n' + example_1 + '\n/추가보기문\n' + example_2 + '\n\n';
          var consolelog = 'number : /' + number + '/\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_txt_add : ' + example_2 + '\n\n';
          // console test
          console.log('Group Question / example_img / example_txt_add');
          console.log(consolelog);
          // html source
          html_group_question_quiz(question);
          html_example_img(example_1);
          html_example_txt(example_2);
          html_group_question_end();
        } else {
          // 보기그림만
          var example_img_1s = origin.indexOf('/보기그림');
          var question_ori = origin.substring(number_length, example_img_1s).trim();
          var question = question_nagative_words(question_ori);
          var example_1 = origin.substring(example_img_1s + 5, origin.length).trim();
          // variable - result
          var result = '/' + number + '/\n' + question + '\n/보기그림\n' + example_1 + '\n\n';
          var consolelog = 'number : /' + number + '/\nquestion : ' + question + '\nexample_img : ' + example_1 + '\n\n';
          // console test
          console.log('Group Question / example_img');
          console.log(consolelog);
          // html source
          html_group_question_quiz(question);
          html_example_img(example_1);
          html_group_question_end();
        }
      } else {
        // 일반형 (보기문 없음)
        var question_ori = origin.substring(number_length, origin.length).trim();
        var question = question_nagative_words(question_ori);
        // variable - result
        var result = '/' + number + '/\n' + question + '\n\n';
        var consolelog = 'number : /' + number + '/\nquestion : ' + question + '\n\n';
        // console test
        console.log('Group Question');
        console.log(consolelog);
        // html source
        html_group_question_quiz(question);
        html_group_question_end();
      }
      // Lv배열에 값 추가
      array_lv1.push(result);
      array_lv2.push(consolelog);
      // sNum 수정하기 위한 gNum -1
      gNum = gNum - 1;
      // inputData에서 처리한 문제내용 삭제
      fnDeleteUsedInputData(origin);
    } else {
      if (gnIndex >= 0) {
        // 그룹문제문 앞에 문제
        // variable
        var origin = txt_inputData.value.substring(sIndex, gnIndex);
        var answer_1s = origin.indexOf('①');
        var answer_2s = origin.indexOf('②');
        var answer_3s = origin.indexOf('③');
        var answer_4s = origin.indexOf('④');
        var answer_4e = origin.length;
        // variable - exe
        var number = String(sNum);
        var number_txt = String(number) + '.';
        var number_length = number_txt.length;
        if (origin.indexOf('/보기문') > 0) {
          // 보기문
          if (origin.indexOf('/추가보기문') > 0) {
            // 보기문 / 추가보기문
            var example_txt_1s = origin.indexOf('/보기문');
            var example_txt_2s = origin.indexOf('/추가보기문');
            var question_ori = origin.substring(number_length, example_txt_1s).trim();
            var question = question_nagative_words(question_ori);
            var gihowords_ori = origin.substring(example_txt_1s + 4, example_txt_2s).trim();
            var example_1 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(example_txt_2s + 6, answer_1s).trim();
            var example_2 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
            var answer_1 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
            var answer_2 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
            var answer_3 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
            var answer_4 = other_giho_words(gihowords_ori);
            // variable - result
            var result = number + '.\n' + question + '\n/보기문\n' + example_1 + '\n/추가보기문\n' + example_2 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_txt_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
            // console test
            console.log('Group Prev Question / example_txt / example_txt_add');
            console.log(consolelog);
            // html source (보기문/추가보기문)
            html_question_quiz(number, question);
            html_example_txt(example_1);
            html_example_txt(example_2);
            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
          } else if (origin.indexOf('/추가보기그림') > 0) {
            // 보기문 / 추가보기그림
            var example_txt_1s = origin.indexOf('/보기문');
            var example_img_2s = origin.indexOf('/추가보기그림');
            var question_ori = origin.substring(number_length, example_txt_1s).trim();
            var question = question_nagative_words(question_ori);
            var gihowords_ori = origin.substring(example_txt_1s + 4, example_img_2s).trim();
            var example_1 = other_giho_words(gihowords_ori);
            var example_2 = origin.substring(example_img_2s + 7, answer_1s).trim();
            var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
            var answer_1 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
            var answer_2 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
            var answer_3 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
            var answer_4 = other_giho_words(gihowords_ori);
            // variable - result
            var result = number + '.\n' + question + '\n/보기문\n' + example_1 + '\n/추가보기그림\n' + example_2 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_img_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
            // console test
            console.log('Group Prev Question / example_txt / example_img_add');
            console.log(consolelog);
            // html source (보기문/추가보기그림)
            html_question_quiz(number, question);
            html_example_txt(example_1);
            html_example_img(example_2);
            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
          } else {
            // 보기문만
            var example_txt_1s = origin.indexOf('/보기문');
            var question_ori = origin.substring(number_length, example_txt_1s).trim();
            var question = question_nagative_words(question_ori);
            var gihowords_ori = origin.substring(example_txt_1s + 4, answer_1s).trim();
            var example_1 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
            var answer_1 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
            var answer_2 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
            var answer_3 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
            var answer_4 = other_giho_words(gihowords_ori);
            // variable - result
            var result = number + '.\n' + question + '\n/보기문\n' + example_1 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
            // console test
            console.log('Group Prev Question / example_txt');
            console.log(consolelog);
            // html source (보기문)
            html_question_quiz(number, question);
            html_example_txt(example_1);
            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
          }
        } else if (origin.indexOf('/보기그림') > 0) {
          // 보기그림
          if (origin.indexOf('/추가보기그림') > 0) {
            // 보기그림 / 추가보기그림
            var example_img_1s = origin.indexOf('/보기그림');
            var example_img_2s = origin.indexOf('/추가보기그림');
            var question_ori = origin.substring(number_length, example_img_1s).trim();
            var question = question_nagative_words(question_ori);
            var example_1 = origin.substring(example_img_1s + 5, example_img_2s).trim();
            var example_2 = origin.substring(example_img_2s + 7, answer_1s).trim();
            var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
            var answer_1 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
            var answer_2 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
            var answer_3 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
            var answer_4 = other_giho_words(gihowords_ori);
            // variable - result
            var result = number + '.\n' + question + '\n/보기그림\n' + example_1 + '\n/추가보기그림\n' + example_2 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_img_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
            // console test
            console.log('Group Prev Question / example_img / example_img_add');
            console.log(consolelog);
            // html source (보기그림/추가보기그림)
            html_question_quiz(number, question);
            html_example_img(example_1);
            html_example_img(example_2);
            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
          } else if (origin.indexOf('/추가보기문') > 0) {
            // 보기그림 / 추가보기문
            var example_img_1s = origin.indexOf('/보기그림');
            var example_txt_2s = origin.indexOf('/추가보기문');
            var question_ori = origin.substring(number_length, example_img_1s).trim();
            var question = question_nagative_words(question_ori);
            var example_1 = origin.substring(example_img_1s + 5, example_txt_2s).trim();
            var gihowords_ori = origin.substring(example_txt_2s + 6, answer_1s).trim();
            var example_2 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
            var answer_1 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
            var answer_2 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
            var answer_3 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
            var answer_4 = other_giho_words(gihowords_ori);
            // variable - result
            var result = number + '.\n' + question + '\n/보기그림\n' + example_1 + '\n/추가보기문\n' + example_2 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_txt_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
            // console test
            console.log('Group Prev Question / example_img / example_txt_add');
            console.log(consolelog);
            // html source (보기그림/추가보기문)
            html_question_quiz(number, question);
            html_example_img(example_1);
            html_example_txt(example_2);
            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
          } else {
            // 보기그림만
            var example_img_1s = origin.indexOf('/보기그림');
            var question_ori = origin.substring(number_length, example_img_1s).trim();
            var question = question_nagative_words(question_ori);
            var example_1 = origin.substring(example_img_1s + 5, answer_1s).trim();
            var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
            var answer_1 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
            var answer_2 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
            var answer_3 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
            var answer_4 = other_giho_words(gihowords_ori);
            // variable - result
            var result = number + '.\n' + question + '\n/보기그림\n' + example_1 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
            // console test
            console.log('Group Prev Question / example_img');
            console.log(consolelog);
            // html source (보기그림)
            html_question_quiz(number, question);
            html_example_img(example_1);
            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
          }
        } else {
          // 일반형 (보기문 없음)
          var question_ori = origin.substring(number_length, answer_1s).trim();
          var question = question_nagative_words(question_ori);
          var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
          var answer_1 = other_giho_words(gihowords_ori);
          var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
          var answer_2 = other_giho_words(gihowords_ori);
          var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
          var answer_3 = other_giho_words(gihowords_ori);
          var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
          var answer_4 = other_giho_words(gihowords_ori);
          // variable - result
          var result = number + '.\n' + question + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
          var consolelog = 'number : ' + number + '\nquestion : ' + question + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
          // console test
          console.log('Group Prev Question');
          console.log(consolelog);
          // html source (노말)
          html_question_quiz(number, question);
          html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
        }
        // Lv배열에 값 추가
        array_lv1.push(result);
        array_lv2.push(consolelog);
        // inputData에서 처리한 문제내용 삭제
        fnDeleteUsedInputData(origin);
      } else {
        if (sNum == eNum) {
          // 맨 마지막 문제
          // variable
          var origin = txt_inputData.value.substring(sIndex, eIndex);
          var answer_1s = origin.indexOf('①');
          var answer_2s = origin.indexOf('②');
          var answer_3s = origin.indexOf('③');
          var answer_4s = origin.indexOf('④');
          var answer_4e = origin.length;
          // variable - exe
          var number = String(sNum);
          var number_txt = String(number) + '.';
          var number_length = number_txt.length;
          if (origin.indexOf('/보기문') > 0) {
            // 보기문
            if (origin.indexOf('/추가보기문') > 0) {
              // 보기문 / 추가보기문
              var example_txt_1s = origin.indexOf('/보기문');
              var example_txt_2s = origin.indexOf('/추가보기문');
              var question_ori = origin.substring(number_length, example_txt_1s).trim();
              var question = question_nagative_words(question_ori);
              var gihowords_ori = origin.substring(example_txt_1s + 4, example_txt_2s).trim();
              var example_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(example_txt_2s + 6, answer_1s).trim();
              var example_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
              var answer_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
              var answer_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
              var answer_3 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
              var answer_4 = other_giho_words(gihowords_ori);
              // variable - result
              var result = number + '.\n' + question + '\n/보기문\n' + example_1 + '\n/추가보기문\n' + example_2 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
              var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_txt_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
              // console test
              console.log('Final Question / example_txt / example_txt_add');
              // html source (보기문/추가보기문)
              html_question_quiz(number, question);
              html_example_txt(example_1);
              html_example_txt(example_2);
              html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
              console.log(consolelog);
            } else if (origin.indexOf('/추가보기그림') > 0) {
              // 보기문 / 추가보기그림
              var example_txt_1s = origin.indexOf('/보기문');
              var example_img_2s = origin.indexOf('/추가보기그림');
              var question_ori = origin.substring(number_length, example_txt_1s).trim();
              var question = question_nagative_words(question_ori);
              var gihowords_ori = origin.substring(example_txt_1s + 4, example_img_2s).trim();
              var example_1 = other_giho_words(gihowords_ori);
              var example_2 = origin.substring(example_img_2s + 7, answer_1s).trim();
              var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
              var answer_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
              var answer_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
              var answer_3 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
              var answer_4 = other_giho_words(gihowords_ori);
              // variable - result
              var result = number + '.\n' + question + '\n/보기문\n' + example_1 + '\n/추가보기그림\n' + example_2 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
              var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_img_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
              // console test
              console.log('Final Question / example_txt / example_img_add');
              console.log(consolelog);
              // html source (보기문/추가보기그림)
              html_question_quiz(number, question);
              html_example_txt(example_1);
              html_example_img(example_2);
              html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
            } else {
              // 보기문만
              var example_txt_1s = origin.indexOf('/보기문');
              var question_ori = origin.substring(number_length, example_txt_1s).trim();
              var question = question_nagative_words(question_ori);
              var gihowords_ori = origin.substring(example_txt_1s + 4, answer_1s).trim();
              var example_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
              var answer_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
              var answer_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
              var answer_3 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
              var answer_4 = other_giho_words(gihowords_ori);
              // variable - result
              var result = number + '.\n' + question + '\n/보기문\n' + example_1 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
              var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
              // console test
              console.log('Final Question / example_txt');
              console.log(consolelog);
              // html source (보기문)
              html_question_quiz(number, question);
              html_example_txt(example_1);
              html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
            }
          } else if (origin.indexOf('/보기그림') > 0) {
            // 보기그림
            if (origin.indexOf('/추가보기그림') > 0) {
              // 보기그림 / 추가보기그림
              var example_img_1s = origin.indexOf('/보기그림');
              var example_img_2s = origin.indexOf('/추가보기그림');
              var question_ori = origin.substring(number_length, example_img_1s).trim();
              var question = question_nagative_words(question_ori);
              var example_1 = origin.substring(example_img_1s + 5, example_img_2s).trim();
              var example_2 = origin.substring(example_img_2s + 7, answer_1s).trim();
              var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
              var answer_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
              var answer_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
              var answer_3 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
              var answer_4 = other_giho_words(gihowords_ori);
              // variable - result
              var result = number + '.\n' + question + '\n/보기그림\n' + example_1 + '\n/추가보기그림\n' + example_2 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
              var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_img_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
              // console test
              console.log('Final Question / example_img / example_img_add');
              console.log(consolelog);
              // html source (보기그림/추가보기그림)
              html_question_quiz(number, question);
              html_example_img(example_1);
              html_example_img(example_2);
              html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
            } else if (origin.indexOf('/추가보기문') > 0) {
              // 보기그림 / 추가보기문
              var example_img_1s = origin.indexOf('/보기그림');
              var example_txt_2s = origin.indexOf('/추가보기문');
              var question_ori = origin.substring(number_length, example_img_1s).trim();
              var question = question_nagative_words(question_ori);
              var example_1 = origin.substring(example_img_1s + 5, example_txt_2s).trim();
              var gihowords_ori = origin.substring(example_txt_2s + 6, answer_1s).trim();
              var example_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
              var answer_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
              var answer_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
              var answer_3 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
              var answer_4 = other_giho_words(gihowords_ori);
              // variable - result
              var result = number + '.\n' + question + '\n/보기그림\n' + example_1 + '\n/추가보기문\n' + example_2 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
              var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_txt_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
              // console test
              console.log('Final Question / example_img / example_txt_add');
              console.log(consolelog);
              // html source (보기그림/추가보기문)
              html_question_quiz(number, question);
              html_example_img(example_1);
              html_example_txt(example_2);
              html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
            } else {
              // 보기그림만
              var example_img_1s = origin.indexOf('/보기그림');
              var question_ori = origin.substring(number_length, example_img_1s).trim();
              var question = question_nagative_words(question_ori);
              var example_1 = origin.substring(example_img_1s + 5, answer_1s).trim();
              var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
              var answer_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
              var answer_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
              var answer_3 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
              var answer_4 = other_giho_words(gihowords_ori);
              // variable - result
              var result = number + '.\n' + question + '\n/보기그림\n' + example_1 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
              var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
              // console test
              console.log('Final Question / example_img');
              console.log(consolelog);
              // html source (보기그림)
              html_question_quiz(number, question);
              html_example_img(example_1);
              html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
            }
          } else {
            // 일반형 (보기문 없음)
            var question_ori = origin.substring(number_length, answer_1s).trim();
            var question = question_nagative_words(question_ori);
            var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
            var answer_1 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
            var answer_2 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
            var answer_3 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
            var answer_4 = other_giho_words(gihowords_ori);
            // variable - result
            var result = number + '.\n' + question + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
            // console test
            console.log('Final Question');
            console.log(consolelog);
            // html source (노말)
            html_question_quiz(number, question);
            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
          }
          // Lv배열에 값 추가
          array_lv1.push(result);
          array_lv2.push(consolelog);
          // inputData에서 처리한 문제내용 삭제
          fnDeleteUsedInputData(origin);
          // break;
          break;
        } else {
          // 정상적인 문제
          // variable
          var origin = txt_inputData.value.substring(sIndex, nIndex);
          var answer_1s = origin.indexOf('①');
          var answer_2s = origin.indexOf('②');
          var answer_3s = origin.indexOf('③');
          var answer_4s = origin.indexOf('④');
          var answer_4e = origin.length;
          // variable - exe
          var number = String(sNum);
          var number_txt = String(number) + '.';
          var number_length = number_txt.length;
          if (origin.indexOf('/보기문') > 0) {
            // 보기문
            if (origin.indexOf('/추가보기문') > 0) {
              // 보기문 / 추가보기문
              var example_txt_1s = origin.indexOf('/보기문');
              var example_txt_2s = origin.indexOf('/추가보기문');
              var question_ori = origin.substring(number_length, example_txt_1s).trim();
              var question = question_nagative_words(question_ori);
              var gihowords_ori = origin.substring(example_txt_1s + 4, example_txt_2s).trim();
              var example_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(example_txt_2s + 6, answer_1s).trim();
              var example_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
              var answer_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
              var answer_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
              var answer_3 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
              var answer_4 = other_giho_words(gihowords_ori);
              // variable - result
              var result = number + '.\n' + question + '\n/보기문\n' + example_1 + '\n/추가보기문\n' + example_2 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
              var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_txt_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
              // console test
              console.log('Normal Question / example_txt / example_txt_add');
              console.log(consolelog);
              // html source (보기문/추가보기문)
              html_question_quiz(number, question);
              html_example_txt(example_1);
              html_example_txt(example_2);
              html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
            } else if (origin.indexOf('/추가보기그림') > 0) {
              // 보기문 / 추가보기그림
              var example_txt_1s = origin.indexOf('/보기문');
              var example_img_2s = origin.indexOf('/추가보기그림');
              var question_ori = origin.substring(number_length, example_txt_1s).trim();
              var question = question_nagative_words(question_ori);
              var gihowords_ori = origin.substring(example_txt_1s + 4, example_img_2s).trim();
              var example_1 = other_giho_words(gihowords_ori);
              var example_2 = origin.substring(example_img_2s + 7, answer_1s).trim();
              var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
              var answer_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
              var answer_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
              var answer_3 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
              var answer_4 = other_giho_words(gihowords_ori);
              // variable - result
              var result = number + '.\n' + question + '\n/보기문\n' + example_1 + '\n/추가보기그림\n' + example_2 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
              var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\nexample_img_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
              // console test
              console.log('Normal Question / example_txt / example_img_add');
              console.log(consolelog);
              // html source (보기문/추가보기그림)
              html_question_quiz(number, question);
              html_example_txt(example_1);
              html_example_img(example_2);
              html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
            } else {
              // 보기문만
              var example_txt_1s = origin.indexOf('/보기문');
              var question_ori = origin.substring(number_length, example_txt_1s).trim();
              var question = question_nagative_words(question_ori);
              var gihowords_ori = origin.substring(example_txt_1s + 4, answer_1s).trim();
              var example_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
              var answer_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
              var answer_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
              var answer_3 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
              var answer_4 = other_giho_words(gihowords_ori);
              // variable - result
              var result = number + '.\n' + question + '\n/보기문\n' + example_1 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
              var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_txt : ' + example_1 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
              // console test
              console.log('Normal Question / example_txt');
              console.log(consolelog);
              // html source (보기문)
              html_question_quiz(number, question);
              html_example_txt(example_1);
              html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
            }
          } else if (origin.indexOf('/보기그림') > 0) {
            // 보기그림
            if (origin.indexOf('/추가보기그림') > 0) {
              // 보기그림 / 추가보기그림
              var example_img_1s = origin.indexOf('/보기그림');
              var example_img_2s = origin.indexOf('/추가보기그림');
              var question_ori = origin.substring(number_length, example_img_1s).trim();
              var question = question_nagative_words(question_ori);
              var example_1 = origin.substring(example_img_1s + 5, example_img_2s).trim();
              var example_2 = origin.substring(example_img_2s + 7, answer_1s).trim();
              var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
              var answer_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
              var answer_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
              var answer_3 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
              var answer_4 = other_giho_words(gihowords_ori);
              // variable - result
              var result = number + '.\n' + question + '\n/보기그림\n' + example_1 + '\n/추가보기그림\n' + example_2 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
              var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_img_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
              // console test
              console.log('Normal Question / example_img / example_img_add');
              console.log(consolelog);
              // html source (보기그림/추가보기그림)
              html_question_quiz(number, question);
              html_example_img(example_1);
              html_example_img(example_2);
              html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
            } else if (origin.indexOf('/추가보기문') > 0) {
              // 보기그림 / 추가보기문
              var example_img_1s = origin.indexOf('/보기그림');
              var example_txt_2s = origin.indexOf('/추가보기문');
              var question_ori = origin.substring(number_length, example_img_1s).trim();
              var question = question_nagative_words(question_ori);
              var example_1 = origin.substring(example_img_1s + 5, example_txt_2s).trim();
              var gihowords_ori = origin.substring(example_txt_2s + 6, answer_1s).trim();
              var example_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
              var answer_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
              var answer_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
              var answer_3 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
              var answer_4 = other_giho_words(gihowords_ori);
              // variable - result
              var result = number + '.\n' + question + '\n/보기그림\n' + example_1 + '\n/추가보기문\n' + example_2 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
              var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\nexample_txt_add : ' + example_2 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
              // console test
              console.log('Normal Question / example_img / example_txt_add');
              console.log(consolelog);
              // html source (보기그림/추가보기문)
              html_question_quiz(number, question);
              html_example_img(example_1);
              html_example_txt(example_2);
              html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
            } else {
              // 보기그림만
              var example_img_1s = origin.indexOf('/보기그림');
              var question_ori = origin.substring(number_length, example_img_1s).trim();
              var question = question_nagative_words(question_ori);
              var example_1 = origin.substring(example_img_1s + 5, answer_1s).trim();
              var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
              var answer_1 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
              var answer_2 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
              var answer_3 = other_giho_words(gihowords_ori);
              var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
              var answer_4 = other_giho_words(gihowords_ori);
              // variable - result
              var result = number + '.\n' + question + '\n/보기그림\n' + example_1 + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
              var consolelog = 'number : ' + number + '\nquestion : ' + question + '\nexample_img : ' + example_1 + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
              // console test
              console.log('Normal Question / example_img');
              console.log(consolelog);
              // html source (보기그림)
              html_question_quiz(number, question);
              html_example_img(example_1);
              html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
            }
          } else {
            // 일반형 (보기문 없음)
            var question_ori = origin.substring(number_length, answer_1s).trim();
            var question = question_nagative_words(question_ori);
            var gihowords_ori = origin.substring(answer_1s + 1, answer_2s).trim();
            var answer_1 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_2s + 1, answer_3s).trim();
            var answer_2 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_3s + 1, answer_4s).trim();
            var answer_3 = other_giho_words(gihowords_ori);
            var gihowords_ori = origin.substring(answer_4s + 1, answer_4e).trim();
            var answer_4 = other_giho_words(gihowords_ori);
            // variable - result
            var result = number + '.\n' + question + '\n① ' + answer_1 + '\n② ' + answer_2 + '\n③ ' + answer_3 + '\n④ ' + answer_4 + '\n\n';
            var consolelog = 'number : ' + number + '\nquestion : ' + question + '\n① : ' + answer_1 + '\n② : ' + answer_2 + '\n③ : ' + answer_3 + '\n④ : ' + answer_4 + '\n\n';
            // console test
            console.log('Normal Question');
            console.log(consolelog);
            // html source (노말)
            html_question_quiz(number, question);
            html_question_answer(number, answer_1, answer_2, answer_3, answer_4);
          }
          // Lv배열에 값 추가
          array_lv1.push(result);
          array_lv2.push(consolelog);
          // inputData에서 처리한 문제내용 삭제
          fnDeleteUsedInputData(origin);
        }
      }
    }
  }

  // html source
  html_question_check();
  html_answer_table(infoData_answer);
  html_shortcut();
  html_notice_footer();
  post_view();
}

// array_lv1_output
function array_lv1_output() {
  txt_inputData.value = '';
  txt_outputArray.value = '';
  for (var i = 0; i < array_lv1.length; i++) {
    txt_outputArray.value += array_lv1[i];
  }
  txt_inputData.value = txt_outputArray.value;
  txt_outputArray.value = '';
}

// array_lv1_button
function btn_lv1() {
  array_lv1_input();
  array_lv1_output();
}

// array_lv2_output
function array_lv2_output() {
  txt_inputData.value = '';
  txt_outputArray.value = '';
  for (var i = 0; i < array_lv2.length; i++) {
    txt_outputArray.value += array_lv2[i];
  }
  txt_inputData.value = txt_outputArray.value;
  txt_outputArray.value = '';
}
// array_lv2_button
function btn_lv2() {
  array_lv1_input();
  array_lv2_output();
}

// --------------------------------------------------------------------------------------
// ----------------------------------- AUTO CONVERTOR -----------------------------------
// --------------------------------------------------------------------------------------

// question nagative words
function question_nagative_words(question_ori) {
  question_ori = question_ori.replaceAll('～', '~');
  question_ori = question_ori.replaceAll('․', 'ㆍ');
  question_ori = question_ori.replaceAll('·', 'ㆍ');
  question_ori = question_ori.replaceAll('⋅', 'ㆍ');
  question_ori = question_ori.replaceAll('󰡔', '『');
  question_ori = question_ori.replaceAll('ꡔ', '『');
  question_ori = question_ori.replaceAll('󰡕', '』');
  question_ori = question_ori.replaceAll('ꡕ', '』');
  question_ori = question_ori.replaceAll('｢', '「');
  question_ori = question_ori.replaceAll('｣', '」');
  question_ori = question_ori.replaceAll('‘', "'");
  question_ori = question_ori.replaceAll('’', "'");
  question_ori = question_ori.replaceAll('<', '&#60;');
  question_ori = question_ori.replaceAll('>', '&#62;');
  return question_ori;
}

// other words giho convertor
function other_giho_words(gihowords_ori) {
  gihowords_ori = gihowords_ori.replaceAll('～', '~');
  gihowords_ori = gihowords_ori.replaceAll('․', 'ㆍ');
  gihowords_ori = gihowords_ori.replaceAll('·', 'ㆍ');
  gihowords_ori = gihowords_ori.replaceAll('⋅', 'ㆍ');
  gihowords_ori = gihowords_ori.replaceAll('󰡔', '『');
  gihowords_ori = gihowords_ori.replaceAll('ꡔ', '『');
  gihowords_ori = gihowords_ori.replaceAll('󰡕', '』');
  gihowords_ori = gihowords_ori.replaceAll('ꡕ', '』');
  gihowords_ori = gihowords_ori.replaceAll('｢', '「');
  gihowords_ori = gihowords_ori.replaceAll('｣', '」');
  gihowords_ori = gihowords_ori.replaceAll('‘', "'");
  gihowords_ori = gihowords_ori.replaceAll('’', "'");
  gihowords_ori = gihowords_ori.replaceAll('<', '&#60;');
  gihowords_ori = gihowords_ori.replaceAll('>', '&#62;');
  return gihowords_ori;
}

// --------------------------------------------------------------------------------------
// ----------------------------------- HTML CONVERTOR -----------------------------------
// --------------------------------------------------------------------------------------

//replaceAll prototype 선언
String.prototype.replaceAll = function (org, dest) {
  return this.split(org).join(dest);
};

// nagative words -> html convertor
function nagative_words_to_html(nagawords) {
  nagawords = nagawords.replaceAll('/부정', '<span class="iub">');
  nagawords = nagawords.replaceAll('/.부정', '</span>');
  nagawords = nagawords.replaceAll('/밑줄', '<span class="iunder">');
  nagawords = nagawords.replaceAll('/.밑줄', '</span>');
  nagawords = nagawords.replaceAll('/윗줄', '<span class="iover">');
  nagawords = nagawords.replaceAll('/.윗줄', '</span>');
  nagawords = nagawords.replaceAll('/굵게', '<span class="ibold">');
  nagawords = nagawords.replaceAll('/.굵게', '</span>');
  nagawords = nagawords.replaceAll('/기움', '<i>');
  nagawords = nagawords.replaceAll('/.기움', '</i>');
  nagawords = nagawords.replaceAll('/미지수', '<span class="imath">');
  nagawords = nagawords.replaceAll('/.미지수', '</span>');
  nagawords = nagawords.replaceAll('/줄', '<br>');
  nagawords = nagawords.replaceAll('/빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
  nagawords = nagawords.replaceAll('/숏빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
  nagawords = nagawords.replaceAll('/롱빈칸', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
  nagawords = nagawords.replaceAll('/윗첨자', '<sup>');
  nagawords = nagawords.replaceAll('/.윗첨자', '</sup>');
  nagawords = nagawords.replaceAll('/아랫첨자', '<sub>');
  nagawords = nagawords.replaceAll('/.아랫첨자', '</sub>');
  nagawords = nagawords.replaceAll('/이미지', '<img src="');
  nagawords = nagawords.replaceAll('/.이미지', '">');
  // 보기문 기교
  nagawords = nagawords.replaceAll('/단락 ', '<div class="allaExampleList_p">');
  nagawords = nagawords.replaceAll('/.단락', '</div>');
  nagawords = nagawords.replaceAll('/좌들 ', '<div class="allaExampleList_pleft">');
  nagawords = nagawords.replaceAll('/.좌들', '</div>');
  nagawords = nagawords.replaceAll('/바 ', '<div class="allaExampleList_bar">');
  nagawords = nagawords.replaceAll('/.바', '</div>');
  nagawords = nagawords.replaceAll('/영소 ', '<div class="allaExampleList_eng">');
  nagawords = nagawords.replaceAll('/.영소', '</div>');
  nagawords = nagawords.replaceAll('/괄호영대 ', '<div class="allaExampleList_eng_big_bra">');
  nagawords = nagawords.replaceAll('/.괄호영대', '</div>');
  nagawords = nagawords.replaceAll('/괄호영소 ', '<div class="allaExampleList_eng_small_bra">');
  nagawords = nagawords.replaceAll('/.괄호영소', '</div>');
  nagawords = nagawords.replaceAll('/한글 ', '<div class="allaExampleList_kor">');
  nagawords = nagawords.replaceAll('/.한글', '</div>');
  nagawords = nagawords.replaceAll('/괄호한글 ', '<div class="allaExampleList_kor_bra">');
  nagawords = nagawords.replaceAll('/.괄호한글', '</div>');
  nagawords = nagawords.replaceAll('/괄호자음 ', '<div class="allaExampleList_kor_con_bra">');
  nagawords = nagawords.replaceAll('/.괄호자음', '</div>');
  nagawords = nagawords.replaceAll('/서클 ', '<div class="allaExampleList_circle">');
  nagawords = nagawords.replaceAll('/.서클', '</div>');
  nagawords = nagawords.replaceAll('/중앙 ', '<div class="allaExampleAlign_center">');
  nagawords = nagawords.replaceAll('/.중앙', '</div>');
  nagawords = nagawords.replaceAll('/우측 ', '<div class="allaExampleAlign_right">');
  nagawords = nagawords.replaceAll('/.우측', '</div>');
  return nagawords;
}

// 텍스트박스(txt_outputHtml) 리셋
function txt_outputHtml_reset() {
  txt_outputHtml.value = '';
}

// 모바일 티스토리 접근 방지
function html_mobile_url_no() {
  let src_mobile_url_no;
  src_mobile_url_no = '';
  src_mobile_url_no += '<!-- 수정: 모바일 방지 -->\n';
  src_mobile_url_no += '<div>\n';
  src_mobile_url_no += '\t<script>\n';
  src_mobile_url_no += '\t\tif (window.location.pathname.split("/")[1] === "m" && navigator.userAgent.indexOf("Tistory") === -1 && navigator.userAgent.indexOf("Android") === -1) {\n';
  src_mobile_url_no += '\t\twindow.location.href = window.location.origin + window.location.pathname.substr(2);\n';
  src_mobile_url_no += '\t\t}\n';
  src_mobile_url_no += '\t</script>\n';
  src_mobile_url_no += '</div>\n';
  src_mobile_url_no += '<!-- /.수정: 모바일 방지 -->\n\n';
  txt_outputHtml.value += src_mobile_url_no;
}

// [toHTML] 썸네일
function html_thumb() {
  let src_thumb;
  src_thumb = '';
  src_thumb += '<!-- 썸네일 영역 -->\n';
  src_thumb += '<div class="alla6ThumbDiv">\n';
  src_thumb += '\t' + infoData_thumb + '\n';
  src_thumb += '</div>\n';
  src_thumb += '<!-- // 썸네일 영역 -->\n';
  src_thumb += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
  txt_outputHtml.value += src_thumb;
}

// [toHTML] 공지사항 Header
function html_notice_header() {
  let src_notice_header;
  src_notice_header = '';
  src_notice_header += '<!-- 공지사항 Header 영역 -->\n';
  src_notice_header += '<div class="alla6NoticeHeaderDiv">\n';
  src_notice_header += '</div>\n';
  src_notice_header += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
  txt_outputHtml.value += src_notice_header;
}

// [toHTML] 가이드(Img)
function html_guide() {
  let src_guide;
  src_guide = '';
  src_guide += '<!-- 가이드 영역 -->\n';
  src_guide += '<div class="alla6GuideDiv">\n';
  src_guide += '\t<img src="" alt="올에이클래스 이용안내 이미지입니다. 올에이클래스는 인터넷 익스플로러를 제외한 크롬엔진 기반의 브라우저에서만 원활히 이용가능합니다.">\n';
  src_guide += '</div>\n';
  src_guide += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
  txt_outputHtml.value += src_guide;
}

// [toHTML] 타이틀
function html_title() {
  let src_title;
  src_title = '';
  src_title += '<!-- 타이틀 영역 -->\n';
  src_title += '<div class="alla6TitleDiv">\n';
  src_title += '\t<table class="alla6TitleTbl">\n';
  src_title += '\t\t<tbody>\n';
  src_title += '\t\t\t<colgroup><col width="100px"><col></colgroup>\n';
  src_title +=
    '\t\t\t<tr><td colspan="3"><span class="ibold">20' +
    infoData_year +
    '</span>&nbsp;학년도&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="ibold">' +
    infoData_seme +
    '</span>&nbsp;학기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="ibold">' +
    infoData_grade +
    '</span>&nbsp;학년&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="ibold">' +
    infoData_countNum +
    '</span>&nbsp;문항</td></tr>\n';
  src_title += '\t\t\t<tr><td colspan="3">' + infoData_object + '</td></tr>\n';
  src_title += '\t\t\t<tr><td>시험종류&nbsp;&nbsp;&nbsp;:</td><td>' + infoData_kind + '시험</td></tr>\n';
  src_title += '\t\t\t<tr><td>출제위원&nbsp;&nbsp;&nbsp;:</td><td>' + infoData_prof + '</td></tr>\n';
  src_title += '\t\t\t<tr><td>출제범위&nbsp;&nbsp;&nbsp;:</td><td>' + infoData_range + '</td></tr>\n';
  src_title += '\t\t\t<tr><td>자료출처&nbsp;&nbsp;&nbsp;:</td><td>한국방송통신대학교</td></tr>\n';
  src_title += '\t\t\t<tr><td>웹앱제작&nbsp;&nbsp;&nbsp;:</td><td>올에이클래스 김현수</td></tr>\n';
  src_title += '\t\t</tbody>\n';
  src_title += '\t</table>\n';
  src_title += '</div>\n';
  src_title += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
  txt_outputHtml.value += src_title;
}

// [toHTML] 그룹 문제 (시작)
function html_group_question_quiz(question) {
  // replace (negative words to html)
  question = nagative_words_to_html(question);
  // replace (main)
  let src_group_question_quiz;
  src_group_question_quiz = '';
  src_group_question_quiz += '<!-- 그룹 문제 -->\n';
  src_group_question_quiz += '<div class="alla6BasicDiv">\n';
  src_group_question_quiz += '\t<form>\n';
  src_group_question_quiz += '\t\t<table class="alla6BasicTbl">\n';
  src_group_question_quiz += '\t\t\t<tbody>\n';
  src_group_question_quiz += '\t\t\t\t<!-- 질의 -->\n';
  src_group_question_quiz += '\t\t\t\t<tr class="alla6GroupQuestionTr">\n';
  src_group_question_quiz += '\t\t\t\t\t<td>\n';
  src_group_question_quiz += '\t\t\t\t\t\t<span class="alla6QuestionNo">※</span>' + question + '\n';
  src_group_question_quiz += '\t\t\t\t\t</td>\n';
  src_group_question_quiz += '\t\t\t\t</tr>\n';
  txt_outputHtml.value += src_group_question_quiz;
}

// [toHTML] 그룹 문제 (마무리)
function html_group_question_end() {
  let src_group_question_end;
  src_group_question_end = '';
  src_group_question_end += '\t\t\t</tbody>\n';
  src_group_question_end += '\t\t</table>\n';
  src_group_question_end += '\t</form>\n';
  src_group_question_end += '</div>\n';
  src_group_question_end += '<!-- //그룹 문제-->\n';
  src_group_question_end += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
  txt_outputHtml.value += src_group_question_end;
}

// [toHTML] 일반 문제
function html_question_quiz(questionNo, question) {
  // replace (negative words to html)
  question = nagative_words_to_html(question);
  // replace (main)
  let number;
  parseInt(questionNo) < 10 ? (number = '0' + questionNo) : (number = questionNo);

  let src_question_quiz;
  src_question_quiz = '';
  src_question_quiz += '<!-- 문제 : ' + number + ' -->\n';
  src_question_quiz += '<div class="alla6BasicDiv">\n';
  src_question_quiz += '\t<form>\n';
  src_question_quiz += '\t\t<table class="alla6BasicTbl" id="alla6BasicTbl' + number + '">\n';
  src_question_quiz += '\t\t\t<tbody>\n';
  src_question_quiz += '\t\t\t\t<!-- 질의 -->\n';
  src_question_quiz += '\t\t\t\t<tr class="alla6QuestionTr">\n';
  src_question_quiz += '\t\t\t\t\t<td>\n';
  src_question_quiz += '\t\t\t\t\t\t<span class="alla6QuestionNo">' + number + '</span>' + question + '\n';
  src_question_quiz += '\t\t\t\t\t</td>\n';
  src_question_quiz += '\t\t\t\t</tr>\n';
  txt_outputHtml.value += src_question_quiz;
}

// [toHTML] 보기문
function html_example_txt(example) {
  // replace (negative words to html)
  example = nagative_words_to_html(example);
  // replace (main)
  let src_example_txt;
  src_example_txt = '';
  src_example_txt += '\t\t\t\t<!-- 보기문 -->\n';
  src_example_txt += '\t\t\t\t<tr class="alla6ExampleTr_Txt">\n';
  src_example_txt += '\t\t\t\t\t<td>\n';
  src_example_txt += '\t\t\t\t\t\t' + example + '\n';
  src_example_txt += '\t\t\t\t\t</td>\n';
  src_example_txt += '\t\t\t\t</tr>\n';
  src_example_txt += '\t\t\t\t<tr class="alla6BlankTr">\n';
  src_example_txt += '\t\t\t\t\t<td></td>\n';
  src_example_txt += '\t\t\t\t</tr>\n';
  txt_outputHtml.value += src_example_txt;
}

// [toHTML] 보기그림
function html_example_img(example) {
  // replace (negative words to html)
  example = nagative_words_to_html(example);
  // replace (main)
  let src_example_img;
  src_example_img = '';
  src_example_img += '\t\t\t\t<!-- 보기그림 -->\n';
  src_example_img += '\t\t\t\t<tr class="alla6ExampleTr_Img">\n';
  src_example_img += '\t\t\t\t\t<td>\n';
  // src_example_img += '\t\t\t\t\t\t<img src="'+ example +'" alt="보기그림">\n';
  src_example_img += '\t\t\t\t\t\t' + example + '\n';
  src_example_img += '\t\t\t\t\t</td>\n';
  src_example_img += '\t\t\t\t</tr>\n';
  src_example_img += '\t\t\t\t<tr class="alla6BlankTr">\n';
  src_example_img += '\t\t\t\t\t<td></td>\n';
  src_example_img += '\t\t\t\t</tr>\n';
  txt_outputHtml.value += src_example_img;
}

// [toHTML] 객관식 선택지
function html_question_answer(questionNo, answer_1, answer_2, answer_3, answer_4) {
  // replace (negative words to html)
  answer_1 = nagative_words_to_html(answer_1);
  answer_2 = nagative_words_to_html(answer_2);
  answer_3 = nagative_words_to_html(answer_3);
  answer_4 = nagative_words_to_html(answer_4);
  // replace (main)
  let number;
  parseInt(questionNo) < 10 ? (number = '0' + questionNo) : (number = questionNo);

  let src_question_answer;
  src_question_answer = '';
  src_question_answer += '\t\t\t\t<!-- 객관식 1번 -->\n';
  src_question_answer += '\t\t\t\t<tr class="alla6AnswerTr">\n';
  src_question_answer += '\t\t\t\t\t<td class="alla6AnswerTd">\n';
  src_question_answer += '\t\t\t\t\t\t<label for="radio-' + number + '-1">\n';
  src_question_answer += '\t\t\t\t\t\t\t<input class="alla6AnswerRadio" type="radio" id="radio-' + number + '-1" name="question-' + number + '" value="1">\n';
  src_question_answer += '\t\t\t\t\t\t\t' + answer_1 + '\n';
  src_question_answer += '\t\t\t\t\t\t</label>\n';
  src_question_answer += '\t\t\t\t\t</td>\n';
  src_question_answer += '\t\t\t\t</tr>\n';
  src_question_answer += '\t\t\t\t<!-- 객관식 2번 -->\n';
  src_question_answer += '\t\t\t\t<tr class="alla6AnswerTr">\n';
  src_question_answer += '\t\t\t\t\t<td class="alla6AnswerTd">\n';
  src_question_answer += '\t\t\t\t\t\t<label for="radio-' + number + '-2">\n';
  src_question_answer += '\t\t\t\t\t\t\t<input class="alla6AnswerRadio" type="radio" id="radio-' + number + '-2" name="question-' + number + '" value="2">\n';
  src_question_answer += '\t\t\t\t\t\t\t' + answer_2 + '\n';
  src_question_answer += '\t\t\t\t\t\t</label>\n';
  src_question_answer += '\t\t\t\t\t</td>\n';
  src_question_answer += '\t\t\t\t</tr>\n';
  src_question_answer += '\t\t\t\t<!-- 객관식 3번 -->\n';
  src_question_answer += '\t\t\t\t<tr class="alla6AnswerTr">\n';
  src_question_answer += '\t\t\t\t\t<td class="alla6AnswerTd">\n';
  src_question_answer += '\t\t\t\t\t\t<label for="radio-' + number + '-3">\n';
  src_question_answer += '\t\t\t\t\t\t\t<input class="alla6AnswerRadio" type="radio" id="radio-' + number + '-3" name="question-' + number + '" value="3">\n';
  src_question_answer += '\t\t\t\t\t\t\t' + answer_3 + '\n';
  src_question_answer += '\t\t\t\t\t\t</label>\n';
  src_question_answer += '\t\t\t\t\t</td>\n';
  src_question_answer += '\t\t\t\t</tr>\n';
  src_question_answer += '\t\t\t\t<!-- 객관식 4번 -->\n';
  src_question_answer += '\t\t\t\t<tr class="alla6AnswerTr">\n';
  src_question_answer += '\t\t\t\t\t<td class="alla6AnswerTd">\n';
  src_question_answer += '\t\t\t\t\t\t<label for="radio-' + number + '-4">\n';
  src_question_answer += '\t\t\t\t\t\t\t<input class="alla6AnswerRadio" type="radio" id="radio-' + number + '-4" name="question-' + number + '" value="4">\n';
  src_question_answer += '\t\t\t\t\t\t\t' + answer_4 + '\n';
  src_question_answer += '\t\t\t\t\t\t</label>\n';
  src_question_answer += '\t\t\t\t\t</td>\n';
  src_question_answer += '\t\t\t\t</tr>\n';
  src_question_answer += '\t\t\t\t<!-- 메인 문제 채점 -->\n';
  src_question_answer += '\t\t\t\t<tr class="alla6CheckTr">\n';
  src_question_answer += '\t\t\t\t\t<td>\n';
  src_question_answer += '\t\t\t\t\t\t<button type="button">다시채점</button>\n';
  src_question_answer += '\t\t\t\t\t</td>\n';
  src_question_answer += '\t\t\t\t</tr>\n';
  src_question_answer += '\t\t\t\t<!-- 메인 문제 해설 -->\n';
  src_question_answer += '\t\t\t\t<tr class="alla6SolveTr">\n';
  src_question_answer += '\t\t\t\t\t<td>\n';
  src_question_answer += '\t\t\t\t\t\t해설)<br>\n';
  src_question_answer += '\t\t\t\t\t</td>\n';
  src_question_answer += '\t\t\t\t</tr>\n';
  src_question_answer += '\t\t\t</tbody>\n';
  src_question_answer += '\t\t</table>\n';
  src_question_answer += '\t</form>\n';
  src_question_answer += '</div>\n';
  src_question_answer += '<!-- //문제 : ' + number + ' -->\n';
  src_question_answer += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
  txt_outputHtml.value += src_question_answer;
}

// [toHTML] 채점 / 다시풀기 버튼
function html_question_check() {
  let src_question_check;
  src_question_check = '';
  src_question_check += '<!-- 채점 버튼 영역 -->\n';
  src_question_check += '<div class="alla6CheckDiv">\n';
  src_question_check += '\t<form>\n';
  src_question_check += '\t\t<table class="alla6CheckTbl">\n';
  src_question_check += '\t\t\t<tbody>\n';
  src_question_check += '\t\t\t\t<tr>\n';
  src_question_check += '\t\t\t\t\t<td>\n';
  src_question_check += '\t\t\t\t\t\t<label>각 문제마다 채점을 해줍니다.</label>\n';
  src_question_check += '\t\t\t\t\t\t<button type="button">채점하기</button><br>\n';
  src_question_check += '\t\t\t\t\t\t<label>모든 답안을 초기화합니다.</label>\n';
  src_question_check += '\t\t\t\t\t\t<button type="button">다시풀기</button>\n';
  src_question_check += '\t\t\t\t\t</td>\n';
  src_question_check += '\t\t\t\t</tr>\n';
  src_question_check += '\t\t\t</tbody>\n';
  src_question_check += '\t\t</table>\n';
  src_question_check += '\t</form>\n';
  src_question_check += '</div>\n';
  src_question_check += '<!-- // 채점 버튼 영역 -->\n';
  src_question_check += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
  txt_outputHtml.value += src_question_check;
}

// [toHTML] 정답지
function html_answer_table(answer) {
  let src_answer_table;
  src_answer_table = '';
  src_answer_table += '<!-- 정답지 영역 -->\n';
  src_answer_table += '<div class="alla6AnswerTableDiv">\n';
  src_answer_table += '\t<table>\n';
  src_answer_table += '\t\t<tbody>\n';
  src_answer_table += '\t\t\t<tr><th>문제답안</th></tr>\n';
  src_answer_table += '\t\t\t<tr><td>' + answer + '</td></tr>\n';
  src_answer_table += '\t\t</tbody>\n';
  src_answer_table += '\t</table><br>\n';
  src_answer_table += '</div>\n';
  txt_outputHtml.value += src_answer_table;
}

// [toHTML] 타년도 문제 바로가기
function html_shortcut() {
  let src_shortcut;
  src_shortcut = '';
  src_shortcut += '<!-- 타년도 문제 바로가기 영역 -->\n';
  src_shortcut += '<div class="alla6OtherExamDiv">\n';
  src_shortcut += '</div>\n';
  src_shortcut += '<!-- // 타년도 문제 바로가기 영역 -->\n';
  src_shortcut += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
  txt_outputHtml.value += src_shortcut;
}

// [toHTML] 공지사항 Footer
function html_notice_footer() {
  let src_notice_footer;
  src_notice_footer = '';
  src_notice_footer += '<!-- 공지사항 Footer 영역 -->\n';
  src_notice_footer += '<div class="alla6NoticeFooterDiv">\n';
  src_notice_footer += '</div>\n';
  src_notice_footer += '<!-- ------------------------------------------------------------------------------------ -->\n\n';
  txt_outputHtml.value += src_notice_footer;
}

function post_view() {
  div_postView.innerHTML = '';
  div_postView.innerHTML = txt_outputHtml.value;
}

/* -------------------------------------------- */
/* 종  료 : alla-class-input-common-6.0.1.js    */
/* -------------------------------------------- */

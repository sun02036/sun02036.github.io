/**
 * 로그인
 */

 function login(){
    //localStorage에서 members 객체 배열을 불러오기
    //JSON 형태의 데이터를 파싱해서 객체 배열로 가져온다
    var members = JSON.parse(localStorage.getItem("members"));
    var isMember = false;
    
    //id pw판정
    for(var i = 0; i < members.length; i++){
        if(id.value == members[i]["id"] && pwd.value == members[i]["pwd"]){
            alert("로그인 성공!");
            window.open("./index.html", "");
            isMember = true;
            break;
        }
        else{
            console.log("continue");
            continue;
        }
    }
    if(!isMember){
        alert("아이디와 비밀번호가 일치하지 않습니다."); 
    }
}
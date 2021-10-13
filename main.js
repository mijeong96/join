$("input[type=submit]").on("click",function(e){
    e.preventDefault();

    //isTxt인증함수의 return값이 false이면 전송을 막음
    //검사할 input의 name값과 최소글자수를 인수로 전달
    if(!isTxt("userid",5))e.preventDefault();
    if(!isTxt("comment",20))e.preventDefault();

    //
    if(!isEmail("email"))e.preventDefault();

});

//텍스트 인증 함수 정의
function isTxt(name, len){
    //만약 최소 글자 인수값을 넣지 않으면 5를 대신 전달
    if(len === undefined) len = 5;
    //인수로 전달받은 name값의 value텍스트 값을 저장
    let txt = $("[name="+ name +"]").val();

    //만약 텍스트의 글자수가 최소글자수 이상이면
    if(txt.length >=len){
        $("[name="+name+"]").parent().find("p").remove();
        return true;
    }else{//만약 텍스트 글자수가 최소 글자수를 넘기지 못하면
        //에러메시지 생성
        $("[name="+name+"]").parent().find("p").remove();
        $("[name="+name+"]").parent().append(
            "<p>입력항목을 "+ len +"글자 이상 입력하세요</p>"
        );
    }
    return false;
}

//이메일 인증함수 정의
function isEmail(name){
    //input창에 값을 txt로 전달받음
    let txt = $("[name="+name+"]").val();

    //만약 이메일 인풋의 텍스트에 @문자가 있으면
    if(/@/.test(txt)){
        //에러 메시지를 제거하고 true를 반환
        $("[name="+name+"]").parent().find("p").remove();
        return true;
    }else{//만약 @문자가 없으면
        //중복 메시지 출력 방지를 위해서 기존 메시지 제거하고
        //다시 새로운 에러메시지 출력하고 false반환
        $("[name="+name+"]").parent().find("p").remove();
        $("[name="+name+"]").parent().append(
            "<p>@를 포함한 전체 메일주소를 입력하세요.</p>"
        )
    }
}
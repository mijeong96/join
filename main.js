$("input[type=submit]").on("click",function(e){
    e.preventDefault();

    if(!isTxt("userid",5))e.preventDefault();
    isTxt("userid",5);
    isTxt("comment",20);

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
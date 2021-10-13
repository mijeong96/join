$("input[type=submit]").on("click",function(e){
    e.preventDefault();


    if(len === undefined) len = 5;
    let txt = $("input[name=userid]").val();

    //만약 텍스트의 글자수가 최소글자수 이상이면
    if(txt.length >=len){
        $("[name=userid]").parent().find("p").remove();
        return true;
    }else{//만약 텍스트 글자수가 최소 글자수를 넘기지 못하면
        //에러메시지 생성
        $("[name=userid]").parent().append(
            "<p>입력항목을 5글자 이상 입력하세요</p>"
        );
    }
    return false;

});
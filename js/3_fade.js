$(function(){
    //버튼을 누를때에 기능은?
    //버튼을 없애는 기능
    /*$("button").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000); //3초    
    })*/
    //버튼을 누르면 사라지고 사라지면 버튼이 작아짐 다시 누르면 다시 나타남 다시 나타날 때 버튼이 커짐
    $("button").click(function(){


        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000); //3초    
    })
})
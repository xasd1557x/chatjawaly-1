$("style").last().append(`    
#upro.uzr.haydy2 .light.fl.pro.break {
    background-image: linear-gradient(225deg,#dfdfdf 0%,#f7f7f7 29%,#f4f4f4 67%,#dbdbdb 100%);
    background-image: url(https://up6.cc/2023/11/170009087924394.png);
    background-size: 100%;
}
`);
var l_itvhaydy=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itvhaydy);
        $("#upro.uzr:contains('هااوي')").addClass('haydy2');
        $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
    }
}, 10000);

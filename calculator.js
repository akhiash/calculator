function buttonclick(val){
    document.getElementById("cls1").value+=val

}

function clearscreen(){
    document.getElementById("cls1").value=""
}

function equalClick(){
    var text=document.getElementById("cls1").value
    var result=eval(text)
    document.getElementById("cls1").value=result
}


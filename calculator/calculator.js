function clickbutton(val){
document.getElementById("screen").value=document.getElementById("screen").value+val

}
function clearbutton(){
    document.getElementById("screen").value=""
}
function equalbutton(){
    var text=document.getElementById("screen").value
    result=eval(text)
    document.getElementById("screen").value=result
}
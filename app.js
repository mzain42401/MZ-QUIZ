
var score = 0;
function start(){
    
    var startbtn=document.getElementById("StartBtn")
startbtn.style.display="none"
var images=document.getElementById("images")
images.style.display="none"
var scorebtn=document.getElementById("ScoreBtn")
scorebtn.style.display="inline"
var display=document.getElementById("display")
display.style.display="inline"

}
function viewResult() {
    var var1 = document.getElementById("q1-a3")
    if (var1.checked == true) {
        score++
    }
    var var2 = document.getElementById("q2-a2")
    if (var2.checked == true) {
        score++
    }

    var var3 = document.getElementById("q3-a1")
    if (var3.checked == true) {
        score++
    }
    var var4 = document.getElementById("q4-a2")
    if (var4.checked == true) {
        score++
    }
    var var5 = document.getElementById("q5-a4")
    if (var5.checked == true) {
        score++
    }
    var var6= document.getElementById("q6-a1")
    if (var6.checked == true) {
        score++
    }
    var var7 = document.getElementById("q7-a2")
    if (var7.checked == true) {
        score++
    }
    var var8 = document.getElementById("q8-a3")
    if (var8.checked == true) {
        score++
    }
    var var9 = document.getElementById("q9-a2")
    if (var9.checked == true) {
        score++
    }
    var var10 = document.getElementById("q10-a3")
    if (var10.checked == true) {
        score++
    }
    var parcentage=score/10*100

    Swal.fire({
        title: 'Your score is '+ score +"/10 and your parcentage is " + parcentage +"%" ,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })


}







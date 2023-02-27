

 
  document.querySelector("#boite1").classList.add("rouge");
  document.querySelector("#boite2").classList.add("bleu");


function f1(){
    alert("!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!aaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!");
}

function f2(){
    document.querySelector('#idf').style.color='red';
}

function f3(){
    document.querySelector('#idf').style.color='lime';
}


function f4() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        alert("stfu")
    } else {
        alert("no u")
    }
  }
 

function f5(){    
    document.querySelector("#boitegauche").classList.remove("bleu");
    document.querySelector("#boitegauche").classList.add("rouge");

    document.querySelector("#boitedroite").classList.remove("rouge");
    document.querySelector("#boitedroite").classList.add("bleu");
}


function f6(){
    document.querySelector("#boitegauche").classList.remove("rouge");
    document.querySelector("#boitegauche").classList.add("bleu");

    document.querySelector("#boitedroite").classList.remove("bleu");
    document.querySelector("#boitedroite").classList.add("rouge");
}

function f7() {
    document.getElementById("image").src = "../images/hippo.jpg";
}

function f8() {
    document.getElementById("image").src = "../images/cow.jpg";
}

function f9() {
    var language = document.getElementById("language").value;
    alert("ta langue prefere est " + language + "!");
}
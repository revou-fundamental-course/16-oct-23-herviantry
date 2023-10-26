function validateForm(){
    const nama = document.forms["message-form"]["nama"].value;
    const birthday =  document.forms["message-form"]["birthday"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages =  document.forms["message-form"]["messages"].value;
    if (nama == "" || birthday == "" || gender == "" || messages == ""){
        alert("Tidak Boleh Ada Yang Kosong")
        return false
    }

    setSenderUI(nama, birthday, gender, messages);

    return false
}


function setSenderUI(nama, birthday, gender, messages){
    document.getElementById("nama-pengirim").innerHTML = nama;
    document.getElementById("lahir-pengirim").innerHTML = birthday;
    document.getElementById("gender-pengirim").innerHTML = gender;
    document.getElementById("pesan-pengirim").innerHTML = messages;
}

var dateTime = new Date();
console.log(dateTime);
document.getElementById("time").textContent = dateTime;

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs((slideIndex += n));
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if(n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++){
        imgList[i].style.display = 'none';
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
plusDivs(1);
}, 5000)
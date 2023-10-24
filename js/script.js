// function replaceName () {
//     let name = prompt("Siapakah nama anda?","");
//     document.getElementById("name").innerHTML = name;
// }

// document.getElementById('tombol').addEventListener("click", function() {
//     replaceName();
// })
// replaceName();
// console.log(name);

// let nameInput = document.getElementById("name-input");

// document.getElementById('submit').addEventListener("click", function() {
//     const name = nameInput.value

//     if (name == ""){
//         document.getElementById("error-name").innerHTML = "Nama Harus Diisi"
//     } else {
//     document.getElementById('name').innerHTML = name;
//     }
// })

function validateForm(){
    const nama = document.forms["message-form"]["nama"].value;
    const birthday =  document.forms["message-form"]["birthday"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages =  document.forms["message-form"]["messages"].value;
    if (nama == "" || birthday == "" || gender == "" || messages == ""){
        document.getElementById("error").innerHTML = "tidak boleh ada yang kosong"

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

function handleEditProfile() {
    new Datepicker('#birthday');
    var name = document.getElementById("name").textContent
    var inputName = document.getElementById("input-name")
    inputName.value = name

    var email = document.getElementById("email").textContent
    var inputEmail = document.getElementById("input-email")
    inputEmail.value = email

    var intrests = document.getElementById("name").textContent
    var inputIntrests = document.getElementById("input-intrests")
    inputIntrests.value = intrests

    document.getElementById("edit-view").style.display = "block"
    document.getElementById("display-view").style.display = "none"
}

function handleUpdateProfile() {
    
    
    var updatedName = document.getElementById("input-name").value
    var name = document.getElementById("name")
    name.textContent = updatedName

    var updatedEmail = document.getElementById("input-email").value
    var email = document.getElementById("email")
    if(validator.isEmail(updatedEmail)){
        email.textContent = updatedEmail
    }else{
        alert("Wrong email format")
    }
    

    var updatedIntrests = document.getElementById("input-intrests").value
    var intrests = document.getElementById("intrests")
    intrests.textContent = updatedIntrests


    document.getElementById("edit-view").style.display = "none"
    document.getElementById("display-view").style.display = "block"

    
}
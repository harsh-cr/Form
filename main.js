function callvalue() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var image = document.getElementById("image").value;
    var gender = document.querySelector('input[type="radio"]:checked').value;
    var skills = document.querySelectorAll('input[type="checkbox"]:checked');
    var skills_ = "";
    for (var checkbox of skills) {
        skills_ = skills_ + checkbox.value+' ';
    }

    // insert
    var student_form = document.getElementById("student_data");
    var student = document.createElement("div");
    student.classList.add("student");

    var div = document.createElement("div");
    div.classList.add("image");
    var image_ = document.createElement("img");
    image_.src = (image);
    div.appendChild(image_);
    student.appendChild(div);

    var div = document.createElement("div");
    div.classList.add("name");
    var h1 = document.createElement("h1");
    var name_ = document.createTextNode(name);
    h1.appendChild(name_);
    var i = document.createElement("i");
    if (gender == "Male"){
        i.classList.add("fa-solid", "fa-person");
    }else{
        i.classList.add("fa-solid", "fa-person-dress");
    }
    div.appendChild(h1);
    div.appendChild(i);
    student.appendChild(div);
    
    var div = document.createElement("div");
    div.classList.add("email");
    var h1 = document.createElement("h1");
    var email = document.createTextNode(email);
    h1.appendChild(email);
    div.appendChild(h1);
    student.appendChild(div);

    var div = document.createElement("div");
    div.classList.add("website");
    var a = document.createElement("a");
    a.href = website;
    a.textContent = website;
    // var website_name = document.createTextNode(name);
    // a.appendChild(website_name);
    div.appendChild(a);
    student.appendChild(div);

    var div = document.createElement("div");
    div.classList.add("skills");
    var h1 = document.createElement("h1");
    var skills_ = document.createTextNode(skills_);
    h1.appendChild(skills_);
    div.appendChild(h1);
    student.appendChild(div);

    student_form.appendChild(student);
}
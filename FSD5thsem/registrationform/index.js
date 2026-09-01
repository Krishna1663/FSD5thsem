const name = document.getElementById('name')
const course = document.getElementById('course')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmpassword = document.getElementById('confirm password')

function cilckhandler(){
    let user={
        name: name.value,
        email: email.value,
        course: course.value,
        password: password.value,
        confirmpassword: confirmpassword.value,
    }

console.log(user);
}

function send() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('tel').value;
    const role = document.querySelector('input[type="checkbox"]:checked')
    const error = document.getElementById('error');

    const form = document.getElementById('form')
    const result = document.getElementById('result')
    result.innerHTML = `
            <p>${name}</p>
            <p>${email}</p>
            <p>${phone}</p>
     
        `;
    console.log(role);
    if (role) {
        form.classList.add('hidden')
        result.classList.remove('hidden')
    } else {
        error.classList.remove('hidden')
    }




}
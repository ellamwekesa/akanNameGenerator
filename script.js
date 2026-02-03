function parseDOB(dob) {
    let parts= dob.split('-');.map(function (p){ return parseInt(p, 10); });
    return { Y: parts[0], M: parts[1], D: parts[2] };
}

function computeD(Y, M, D)  {
    const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    let y = Y - (M < 3 ? 1 : 0);
    let res = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + t[M - 1] + D) % 7;
    return ((res + 7) % 7);
}

function getAkanName(d, gender) {
    let femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let name = (gender === 'male') ? maleNames[d] : femaleNames[d];
    return name + ' (' + days[d] + ')';
}

document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('Akan');
    let akanInput = document.getElementById('akanName');
    let answerForm = document.getElementById('Generate');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let dob = document.getElementById('dob').value
        let genderE1 = document.querySelector('input[name="gender"]:checked');
        if (!dob || !genderE1) return;

        let dobParts = parseDOB(dob);
        let d = computeD(dobParts.Y, dobParts.M, dobParts.D);
        let akanName = getAkanName(d, genderE1.value);
        akanInput.value = akanName;
        answerForm.style.display = 'block';
    
    });
});


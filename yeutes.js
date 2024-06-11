console.log('👁')

let pupil = document.querySelectorAll('.pupil')
let paupiere = document.querySelectorAll('.eye-wrapper .paupiere')
let eye = document.querySelectorAll('.eye-wrapper')

// var mydiv = document.getElementById("mydiv");


function mousemove(event) {
    let hauteur = event.pageY
    let largeur = event.pageX

  }
  
  window.addEventListener('mousemove', mousemove);

window.addEventListener('mousemove', function (event) {
    pupil.forEach(function (p) {
        let pupilX = p.getBoundingClientRect().left + p.clientWidth / 2
        let pupilY = p.getBoundingClientRect().top + p.clientHeight / 2
        let radian = Math.atan2(event.pageY - (pupilY + 30), event.pageX - (pupilX + 30));
        let rot = radian * (180 / Math.PI) + 180 
        p.style.transform = 'rotate(' + rot + 'deg)'
    });
});  


setInterval(function () {
    let randomIndex = Math.floor(Math.random() * eye.length)
    let randomElement = paupiere[randomIndex]
    randomElement.style.animation = "closingEye 3s ease-in infinite reverse forwards"
    
}, 1000)
    let randomIndex = Math.floor(Math.random() * eye.length)
    let randomElement = paupiere[randomIndex]
    randomElement = eye[randomIndex]
    randomElement.style.transform = "translateX(2em)"
function disableScroll() {
  // Zapobieganie przewijaniu strony
  window.addEventListener('scroll', noScroll);
}

function enableScroll() {
  // Przywracanie przewijania strony
  window.removeEventListener('scroll', noScroll);
}

function noScroll() {
  window.scrollTo(0, 0);
}

window.addEventListener('resize', function() {
  toggle();
});

window.addEventListener('load', function() {
  toggle();
});

function toggle() {
  var nav_list = document.getElementById('nav-menu');
  var collapse = document.getElementById('nav-menu-onclick-div');
  var btn = document.getElementById('nav-button');
  if (window.innerWidth < 770) {
      nav_list.style.display = 'none';
      btn.style.display = 'block';
  } else {
      nav_list.style.display = 'block';
      btn.style.display = 'none';
      collapse.style.display = 'none';
      collapse.style.visibility = 'hidden';
      btn.setAttribute('data-active', 'false');
  }
}
var nav_blacker_screen = document.getElementById('nav-blacker-screen');
var videobg_blacker_screen = document.getElementById('header_bg');
var btn = document.getElementById('nav-button');
var div = document.getElementById('nav-menu-onclick-div');
btn.addEventListener('click', () => {
  const isActive = btn.getAttribute('data-active') === 'true';

if (!isActive) {
  disableScroll();
  nav_blacker_screen.style.visibility = 'hidden';
  videobg_blacker_screen.style.visibility = 'hidden';
  div.style.display = 'block';
  div.style.visibility = 'visible';
  // Wykonywane, gdy przycisk jest włączony
    btn.setAttribute('data-active', 'true');
} else {
  enableScroll();
  nav_blacker_screen.style.visibility = 'visible';
  videobg_blacker_screen.style.visibility = 'visible';
  div.style.display = 'none';
  div.style.visibility = 'hidden';
  // Wykonywane, gdy przycisk jest wyłączony
    btn.setAttribute('data-active', 'false');
}
});


var typed = new Typed(".auto-type", {
  strings: ["Jakość.", "Czas Realizaji.", "Szczegóły."],
  typeSpeed: 50,
  backSpeed: 50,
  startDelay: 2000,
  backDelay: 2000,
  loop: true
});

const opinionsData = [
    {
      image: "images/discord_avatars/dreibon.png",
      text: "Szybka i profesjonalna robota.",
      nickname: "Dreibon"
    },  
];

let currentOpinionIndex = 0;

function showCurrentOpinion() {
  const currentOpinion = opinionsData[currentOpinionIndex];
  document.getElementById("opinionImage").src = currentOpinion.image;
  document.getElementById("opinionText").innerText = currentOpinion.text;
  document.getElementById("opinionNickname").innerText = currentOpinion.nickname;
}

function showNextOpinion() {
  currentOpinionIndex = (currentOpinionIndex + 1) % opinionsData.length;
  showCurrentOpinion();
}

function showPrevOpinion() {
  currentOpinionIndex = (currentOpinionIndex - 1 + opinionsData.length) % opinionsData.length;
  showCurrentOpinion();
}

document.getElementById("prevButton").addEventListener("click", showPrevOpinion);
document.getElementById("nextButton").addEventListener("click", showNextOpinion);

// Początkowe wyświetlenie opinii
showCurrentOpinion();

const container = document.getElementById('ContactContainer');

container.addEventListener('click', () => {
    if (window.innerWidth > 768) {
        container.style.transform = 'scale(1)';
    }
});

container.addEventListener('mouseenter', () => {
  if (window.innerWidth > 768) {
      container.style.transform = 'scale(1.1)';
  }
});

container.addEventListener('mouseleave', () => {
  if (window.innerWidth > 768) {
      container.style.transform = 'scale(1)';
  }
});

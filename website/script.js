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
  strings: ["wysoką jakość.", "krótki czas oczekiwania.", "dopracowane szczegóły."],
  typeSpeed: 50,
  backSpeed: 50,
  startDelay: 2000,
  backDelay: 2000,
  loop: true
});

const opinionsData = [
  {
    image: "images/discord_avatars/veeon.png",
    text: "2000/2000",
    nickname: ".veeon"
  },
  {
    image: "images/discord_avatars/kamkil.png",
    text: "Wyśmienita realizacja, bezproblemowa płatność! Generalnie 10/10",
    nickname: "kamkil"
  },
  {
    image: "images/discord_avatars/dawid6157.png",
    text: "Polecam good grafik",
    nickname: "dawid6157"
  },
  {
    image: "images/discord_avatars/ziomek.png",
    text: "Polecam Bardzo dobry grafik 10/10",
    nickname: "zισмєк#1728"
  },    
  {
    image: "images/discord_avatars/edzzi.png",
    text: "Bardzo ale to bardzo polecam zajebisty grafik 100/10",
    nickname: "edzzi"
  },   
  {
    image: "images/discord_avatars/_joinme.png",
    text: "Polecam. Jakość wykonania jest znacznie wyższa niż się spodziewałam 10/10",
    nickname: "_joinme"
  },   
  {
    image: "images/discord_avatars/michi0851.png",
    text: "10/10",
    nickname: "michi0851"
  },   
  {
    image: "images/discord_avatars/ilg.filip.png",
    text: "zajebisty montaż oraz wykonanie avataru i banneru ❤️ 11/10",
    nickname: "ilg.filip"
  },   
  {
    image: "images/discord_avatars/filipeeeek_.png",
    text: "100/10 zajebiste dziekiii",
    nickname: "filipeeeek_"
  },   
  {
    image: "images/discord_avatars/og.vexx.png",
    text: "1000000000/10 Bardzo ciepło polecam tego użytkownika zajebista grafika",
    nickname: "og.vexx"
  },   
  {
    image: "images/discord_avatars/matsoor.png",
    text: "Polecam!!!",
    nickname: "matsoor"
  },   
  {
    image: "images/discord_avatars/buteleczkagra.png",
    text: "10/10",
    nickname: "buteleczkagra"
  },   
  {
    image: "images/discord_avatars/facejoker.png",
    text: "Gittt",
    nickname: "facejoker"
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

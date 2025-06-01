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
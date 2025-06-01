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
      text: "Szybka i jakościowa praca!",
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
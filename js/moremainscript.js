let currentAboutIndex = 0;
const aboutInfos = document.querySelectorAll('.about-info');

function showNextAbout() {
  aboutInfos[currentAboutIndex].classList.add('hidden');
  currentAboutIndex = (currentAboutIndex + 1) % aboutInfos.length;
  aboutInfos[currentAboutIndex].classList.remove('hidden');
}
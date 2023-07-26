// SKRIP UNTUK WELCOME
const texts = [
    "Halo, Selamat Datang!",
    "Hello, Welcome!",
    "いらっしゃいませ!",
    "환영 합니다!"
  ];
  
  let textIndex = 0;
  const textElement = document.getElementById('typed-text');
  
  function typeText() {
    const currentText = texts[textIndex];
    let i = 0;
    textElement.innerHTML = '';
  
    function typeCharacter() {
      if (i < currentText.length) {
        textElement.innerHTML += currentText.charAt(i);
        i++;
        setTimeout(typeCharacter, 100); // Kecepatan pengetikan (ms)
      } else {
        setTimeout(eraseText, 1500); // Waktu tampilan teks sebelum dihapus (ms)
      }
    }
  
    function eraseText() {
      if (i >= 0) {
        const newText = currentText.substring(0, i);
        textElement.innerHTML = newText;
        i--;
        setTimeout(eraseText, 50); // Kecepatan penghapusan teks (ms)
      } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500); // Waktu tampilan teks sebelum diganti (ms)
      }
    }
  
    typeCharacter();
  }
  
  // Panggil fungsi untuk pertama kali
  typeText();
  
// SKRIP untuk HAMBURGER
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
})

// SKRIP untuk NAVBAR_SCRIPT
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if(window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed')
  } else {
    header.classList.remove('navbar-fixed')
  }
}


burger.onscroll = function() {
  const scrollMenu = document.querySelector('#nav-menu');
  const menuOpen = scrollMenu.offsetTop

  if(window.pageYOffset > menuOpen) {
    scrollMenu.classList.toggle('menu-opened')
  } else {
    scrollMenu.classList.remove('menu-opened')
  }
}


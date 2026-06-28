
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

const skillsSection = document.getElementById('skills');
let sudahAnimasi = false;

function animasiProgressBar() {
  if (sudahAnimasi) return;

  const posisiSection = skillsSection.getBoundingClientRect().top;
  const batasLayar    = window.innerHeight * 0.85;

  if (posisiSection < batasLayar) {
    sudahAnimasi = true;
    document.querySelectorAll('.bar-fill').forEach(bar => {
      bar.style.width = bar.getAttribute('data-w');
    });
  }
}

animasiProgressBar();

window.addEventListener('scroll', animasiProgressBar);

function hubungiWhatsApp() {
  const nomor = '6287764891655';
  const pesan = encodeURIComponent('Halo Mas Fariz, saya tertarik dengan profil Anda.');
  window.open(`https://wa.me/${nomor}?text=${pesan}`, '_blank');
}

function hubungiEmail() {
  window.location.href = 'mailto:muhammadfarizilham57@gmail.com?subject=Tanya%20Seputar%20Kerjasama';
}

function lihatSertifikat(jenis) {
  const info = {
    office: 'Sertifikat Digital Office Administration (Google Workspace)\nMuhammad Fariz Ilham Al Kafi — 2025',
    setir:  'Sertifikat Kemahiran Mengemudi (SIM A)\nMuhammad Fariz Ilham Al Kafi — 2024'
  };
  alert(info[jenis] || 'Dokumen tidak ditemukan.');
}
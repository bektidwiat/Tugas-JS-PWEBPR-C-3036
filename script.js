const content = document.getElementById("content")
const judul = document.getElementById("judul");
const gambar = document.getElementById("gambar");
const text = document.getElementById("text");
const box = document.getElementById("box")
const tombol = document.getElementById("tombol");
const benar = document.getElementById("benar");
const salah = document.getElementById("salah");

benar.addEventListener('click', ()=> {
  judul.innerHTML = "Anda Berbohong!";
  text.innerHTML = "Anda adalah seorang Teknisi";
  box.style.backgroundColor = "#E12E2E";
  gambar.src = "Assets/teknisi.svg";
  tombol.style.display = 'none';
});
salah.addEventListener('click', ()=> {
  judul.innerHTML = "Anda Benar!";
  text.innerHTML = "Anda adalah seorang Mahasiswa";
  box.style.backgroundColor = "#6FD240"
  gambar.src = "Assets/mahasiswa.svg";
  tombol.style.display = 'none';
});
Memilih Element:

javascript

const section = document.querySelector("section");
const nyawaCount = document.querySelector("span");

    Baris ini memilih elemen <section> dan elemen <span>, yang kemungkinan mewakili papan permainan dan sisa nyawa.

Inisialisasi Nyawa:

javascript

let nyawa = 6;
nyawaCount.textContent = nyawa;

    Ini menetapkan jumlah awal nyawa menjadi 6 dan memperbarui konten teks elemen <span> untuk menampilkan jumlah nyawa saat ini.

Data untuk Gambar:

javascript

const getData = () => [
  // ... (array berisi objek dengan sumber gambar dan nama)
];

    Fungsi ini (getData) mengembalikan array objek, masing-masing berisi imgSrc (sumber gambar) dan name dari sebuah kartu.

Acak Kartu:

javascript

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

    Fungsi ini (randomize) mengacak array data kartu secara acak.

Generasi Kartu:

javascript

const cardGenerator = () => {
  // ...
};

    Fungsi ini menghasilkan elemen HTML untuk kartu, menempelkan listener untuk event klik.

Generasi HTML Kartu:

javascript

cardData.forEach((item) => {
  // ... (membuat elemen kartu, wajah, dan belakang, mengatur atribut, menempelkan ke section)
});

    Di dalam cardGenerator, perulangan ini membuat elemen HTML untuk setiap kartu, wajah, dan belakang, mengatur atribut mereka, dan menempelkannya ke dalam section.

Event Klik Kartu:

javascript

card.addEventListener("click", (e) => {
  card.classList.toggle("toggleCard");
  checkCards(e);
});

    Ini menambahkan event listener klik pada setiap kartu. Ketika diklik, ia akan mengganti status kelas "toggleCard" dan memanggil fungsi checkCards.

Memeriksa Kartu:

javascript

const checkCards = (e) => {
  // ... (memeriksa kecocokan, memperbarui nyawa, dan memanggil restart jika perlu)
};

    Fungsi ini menangani logika untuk memeriksa kartu saat diklik, memperbarui status permainan, dan me-restart permainan jika diperlukan.

Fungsi Restart:

javascript

const restart = (text) => {
  // ... (mereset status permainan, memperbarui nyawa, dan menampilkan alert)
};

    Fungsi ini mereset permainan, termasuk pengacakan kartu, pembaruan wajah kartu, dan pengaturan ulang nyawa. Juga menampilkan alert dengan teks yang diberikan.

Mengacak Kartu dan Inisialisasi:

javascript

cardGenerator();

    Terakhir, baris ini memanggil fungsi cardGenerator untuk menginisialisasi dan menampilkan kartu yang sudah diacak di papan permainan.

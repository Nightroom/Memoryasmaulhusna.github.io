## 1.1	Latar Belakang
Di era digitalisasi seperti sekarang, kebutuhan manusia sudah tidak bisa lagi terpuaskan oleh sesuatu yang sederhana atau tradisional. Khususnya dunia hiburan, yang selalu bergerak selaras dengan perkembangan teknologi, permainan tradisional kini mulai beralih menjadi permainan modern yang berwujud game digital. Melihat hal ini, tentunya kita juga harus menyesuaikan diri dengan keadaan yang ada. Namun, sebagian besar game digital saat ini banyak memberikan dampak negatif tanpa memprioritaskan edukasi yang positif. Oleh karena itu, kita memerlukan game yang memberikan dampak positif terutama tentang edukasi agama untuk anak-anak melalui pendekatan asmaul husna. Oleh sebab itu, game memory asmaul husna(Memana) hadir sebagai jawaban dari berbagai problem permasalahan di atas.
## Deskripsi Teknologi Informasi
Aplikasi ini berguna sebagai media edukasi asma allah, yang mengenalkan para pengguna dengan asmaul husna melalui permainan menyenangkan yang berfokus pada metode mencocokkan, mengingat, ketepatan, insting, dan ketangkasan pengguna dalam menangkap informasi yang didapatkan. Tujuan dari aplikasi ini sendiri adalah untuk mengenalkan asmaul husna kepada berbagai kalangan di masyarakat agar lebih mudah dalam menghafal asmaul husna dengan lebih menyenangkan, terlepas dari stigma bahwa menghafal asmaul husna adalah sebuah kegiatan yang membosankan dan monoton. 
## Branding
Branding meliputi:
- Merk: Game Memana
- Tagline: Hadir untuk memberikan edukasi asma allah di era digitalisasi
- Campaign: Aplikasi yang berguna sebagai media pendekatan dan pengenalan asmaul husna melalui metode yang menyenangkan.

Target user:
- Usia 5+
- Seseorang yang ingin mengenal asmaul husna namun terhalang rasa bosan.
- Seseorang yang ingin meningkatkan diri dalam melatih kemampuan mengingat, ketepatan, insting, dan ketangkasan pengguna dalam menangkap informasi yang didapatkan.
- Seseorang mencari kegiatan yang bermanfaat namun menyenangkan.
  
User experience theme:
- Mudah
- Sederhana
- Menyenangkan
- Warna: Orange / white / black / gray / greend
  
Inspirasi desain:
![Contoh](https://cdn.dribbble.com/userupload/5351979/file/original-52323de189bed66d94b6ccf3d01989d9.gif)

## 2. User Story
Sebagai | Saya Ingin Bisa | Sehingga | Prioritas
---|---|---|---
Pengguna | Login ke dalam game | Dapat memulai permainan | ⭐⭐⭐
Pengguna | Memilih level | Dapat menyesuaikan game dengan tingkat kesulitan yang di inginkan | ⭐⭐⭐
Penggunac| Share to public | Dapat melakukan share ke public terkait best skor,dll.|⭐⭐⭐
Pengguna | Best Skor Public | Dapat melihat reting Best Skor Public |⭐⭐⭐
Pengguna | Invite | Dapat melakukan invite untuk melakukan permainan bersama |⭐⭐⭐⭐
Pengguna | Melakukan setting |Dapat menyesuaikan fitur yang di inginkan dalam game play|⭐⭐⭐⭐
Pengguna | Melakukan reset  | Dapat mengulangi kembali game ditingkat kesulitan yang sama | ⭐⭐⭐⭐
Pengguna | Lanjut ke level berikutnya | Dapat memperoleh tingkat kesulitan yang lebih tinggi | ⭐⭐⭐⭐
Pengguna | Setting Profil| Dapat mengubah name, char, dan melihat best skor |⭐⭐⭐⭐
Pengguna | Memencet pilihan kartu | Dapat mengetahui isi di balik kartu | ⭐⭐⭐⭐⭐
Pengguna | Melihat gambar di balik kartu | Dapat menyocokan antara dua gambar yang sama | ⭐⭐⭐⭐⭐
## 3. Struktur Data

Untuk lebih lengkapnya bisa di cek di ![Mermaid](https://mermaid.live/edit#pako:eNqFU7tuwzAM_BVBc_MDnlukQxIUzWrAYGzaEaqHIVFtgyT_Xkl2HvTSxbCOhyN5JM-ydR3KStYW_auCwYOpbW2FWIPBUcNJXC6rlTuLd2dQiEoYNIcIJBjnnF9CKEtC4zfqZkiRCQvklR3ER6JNQAeEpJJY_jQbZdQkdqd-YkBiyA5_qUiKwrxOwSyJ_pZ7psaA3i6TowGlGTJCCD_OdxP4LOpdrzQuu95CiF-cwfPuljnHQhMPYzbFGI09PYEHDNQUI0LrPFcIR1gga-_iyJAthgADZ7XOkneatZYn1eyRKBP-meidxzvcu2g7hpgYVMtnt1HDkRqTdorDYIeY6nw4XZLPhcyDXJRSGLyEYiFfq-JyE6aKuVm5lafAVb5Igz6tQpf2vQjXko6Y5iar9NthD1FTnU4hUyGS259sKyvyEV9kHPPiziciqx50uKNvnSLnb0wsr-10V-W8rn_q7CSI) 

```mermaid


erDiagram

  Gameplay ||--o{ Home  : Playing 
  Gameplay {
    int level_game
    string Play
    datetime time_record 
    string Reset
    string Next_game  
  }
    Player {
    string username
    string email
    string password
    
  }
    Profile ||--o{ Home  : Setting_to
    Profile {
    string Name
    string Character 
    int Level_left 
    int best_time_score
    string share
    string Group
    string Message

    
  }
Setting_game ||--o{ Home  : setting_to 
  Setting_game {
    string Sound
    string music 
    string Light_mode
    string Language 
  }
  Home ||--o{ Player  : Login
  Home {
    string Level
    string Setting_profil
    string Setting_Game
  }
```

## 4. Arsitektur Sistem
```mermaid
flowchart TD
    id1[(Database: PostgreSQL)] <--> id2[Aplikasi Web Backend: React Native] <--> id3[Web Server: React Native]  
```
## 5. Teknologi, Library, dan Framework

- Framework Aplikasi:
   - React Native
- Database:
   - PostgreSQL
- UI/UX Design:
   - Figma
- Text Editor:
   - Visual Studio Code
- Web Languange:
   - HTML, CSS
- Programming Languange:
   - Javascript
- Library:
   -  Bootstrap

## 6. Desain User Experience dan User Interface


![Contoh](https://github.com/Nightroom/Memoryasmaulhusna.github.io/blob/master/Screenshot%202023-12-24%20095252.png)

Untuk lebih lengkapnya bisa di cek di ![Figma](https://www.figma.com/file/ap1hosOkcal10u42dFHBxW/Avatarg-(Community)?type=design&node-id=0-1&mode=design&t=EHifcDSZptQHqDKf-0) 
## 7. Demonstrasi Video

Link https://youtu.be/RmEc3OkZfuo?si=e6Gn1UmijsYOECVl


## 8. Bagaimana mesin komputasi dan sistem operasi berperan dalam produk teknologi informasimu ?
Link https://youtu.be/RmEc3OkZfuo?si=e6Gn1UmijsYOECVl

## 9. Bagaimana algoritma, struktur data, dan bahasa pemrograman berperan dalam produk teknologi informasimu ?
Link https://youtu.be/RmEc3OkZfuo?si=e6Gn1UmijsYOECVl

## 10. Bagaimana metode pengembangan perangkat lunak / Software Development Life Cycle berperan dalam produk teknologi informasimu ?
Link https://youtu.be/RmEc3OkZfuo?si=e6Gn1UmijsYOECVl
## 11. Bagaimana database / sistem basis data berperan dalam produk teknologi informasimu ?
Link https://youtu.be/RmEc3OkZfuo?si=e6Gn1UmijsYOECVl

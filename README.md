# Cheyza - Modern Profil Kartı Sitesi

Modern, profesyonel ve mobil uyumlu profil kartı odaklı kişisel web sitesi.

## Özellikler

- 🎨 **Modern Profil Kartı**: Merkezi profil kartı tasarımı
- 📱 **Responsive**: Mobil, tablet ve masaüstü uyumlu
- 🌙 **Tema Değiştirme**: Dark/Light tema arası geçiş
- ✨ **Gelişmiş Animasyonlar**: 3D efektler, hover animasyonları, parallax
- 🎵 **Spotify Durumu**: Dinamik müzik durumu göstergesi
- 🔗 **Sosyal Medya**: 3 platform (Spotify, Github, Discord)
- 🎭 **Görsel Efektler**: Gradient efektler, neon renkler, parlayan animasyonlar
- ⚡ **Performans**: Optimize edilmiş ve hızlı yükleme

## Kullanılan Teknolojiler

- HTML5
- CSS3 (Flexbox, Animations, CSS Variables)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)

## Kurulum

1. Dosyaları indirin
2. `index.html` dosyasını web tarayıcınızda açın
3. Veya bir web sunucusunda barındırın

## Dosya Yapısı

```
ozelsite/
├── index.html          # Ana HTML dosyası
├── style.css           # CSS stilleri
├── script.js           # JavaScript işlevselliği
└── README.md           # Bu dosya
```

## Özelleştirme

### Profil Bilgilerini Değiştirme
`index.html` dosyasında profil bilgilerini güncelleyin:

```html
<h1 class="profile-name">YOUR_NAME</h1>
<p class="profile-bio">Your Bio • Your Title • Your Interests</p>
```

### Profil Resmini Değiştirme
Profil resmini değiştirmek için `index.html` dosyasındaki img src'yi güncelleyin:

```html
<img src="YOUR_IMAGE_URL" alt="Your Name" class="profile-image">
```

### Sosyal Medya Linklerini Değiştirme
Sosyal medya butonlarının `href` özelliklerini kendi linklerinizle değiştirin:

```html
<a href="https://open.spotify.com/user/YOUR_USERNAME" target="_blank" class="social-button spotify">
<a href="https://github.com/YOUR_USERNAME" target="_blank" class="social-button github">
<a href="https://discord.gg/YOUR_SERVER" target="_blank" class="social-button discord">
```

### Renkleri Değiştirme
`style.css` dosyasındaki `:root` bölümündeki CSS değişkenlerini düzenleyerek renkleri özelleştirebilirsiniz.

### Müzik Durumunu Değiştirme
`script.js` dosyasındaki `musicList` dizisini düzenleyerek farklı durum mesajları ekleyebilirsiniz.

## Responsive Tasarım

- **Mobil**: Tek sütun düzeni, küçük butonlar
- **Tablet**: Merkezi düzen, orta boyut butonlar  
- **Masaüstü**: Yatay düzen, büyük butonlar

## Tarayıcı Desteği

- Chrome (önerilen)
- Firefox
- Safari
- Edge

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

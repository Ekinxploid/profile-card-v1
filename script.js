// Tema değiştirme işlevselliği
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Tema durumunu kontrol et (localStorage'dan)
    const currentTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', currentTheme);
    updateThemeToggle(currentTheme);
    
    // Tema değiştirme butonu event listener
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeToggle(newTheme);
        
        // Smooth geçiş animasyonu
        body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
    
    // Tema toggle butonunu güncelle
    function updateThemeToggle(theme) {
        const icon = themeToggle.querySelector('i');
        const text = themeToggle.querySelector('span');
        
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
            text.textContent = 'Light';
        } else {
            icon.className = 'fas fa-moon';
            text.textContent = 'Dark';
        }
    }
});

// Sosyal medya butonları için gelişmiş hover efektleri
document.addEventListener('DOMContentLoaded', function() {
    const socialButtons = document.querySelectorAll('.social-button');
    
    socialButtons.forEach(button => {
        // Mouse enter efekti
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        // Mouse leave efekti
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Click efekti - Ripple
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
                z-index: 1;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Ripple animasyonu için CSS ekle
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Profil resmi için hover efekti
document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-image');
    
    if (profileImage) {
        profileImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
        });
        
        profileImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    }
});

// Spotify durumu için dinamik güncelleme
document.addEventListener('DOMContentLoaded', function() {
    const statusText = document.querySelector('.status-text');
    
    // Örnek müzik listesi
    const musicList = [
        'Listening to: Song Name',
        'Playing: Artist - Track',
        'Vibing to: Playlist Name',
        'Enjoying: Album Title',
        'Lost in: Music Genre'
    ];
    
    // Her 10 saniyede bir durumu değiştir
    setInterval(() => {
        if (statusText && Math.random() > 0.7) { // %30 şansla değişir
            const randomMusic = musicList[Math.floor(Math.random() * musicList.length)];
            statusText.style.opacity = '0';
            statusText.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                statusText.textContent = randomMusic;
                statusText.style.opacity = '1';
                statusText.style.transform = 'translateY(0)';
            }, 300);
        }
    }, 10000);
});

// Sayfa yüklendiğinde animasyonları başlat
document.addEventListener('DOMContentLoaded', function() {
    // Profil kartı animasyonu
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.style.opacity = '0';
        profileCard.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            profileCard.style.transition = 'all 0.8s ease';
            profileCard.style.opacity = '1';
            profileCard.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Profil resmi animasyonu
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.style.opacity = '0';
        profileImage.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            profileImage.style.transition = 'all 0.6s ease';
            profileImage.style.opacity = '1';
            profileImage.style.transform = 'scale(1)';
        }, 600);
    }
    
    // Logo animasyonu
    const logoFrame = document.querySelector('.logo-frame');
    if (logoFrame) {
        logoFrame.style.opacity = '0';
        logoFrame.style.transform = 'translateY(-30px) scale(0.9)';
        
        setTimeout(() => {
            logoFrame.style.transition = 'all 0.6s ease';
            logoFrame.style.opacity = '1';
            logoFrame.style.transform = 'translateY(0) scale(1)';
        }, 300);
    }
    
    // Sosyal medya butonları için staggered animasyon
    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            button.style.transition = 'all 0.5s ease';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 800 + (index * 150));
    });
    
    // Spotify durumu animasyonu
    const spotifyStatus = document.querySelector('.spotify-status');
    if (spotifyStatus) {
        spotifyStatus.style.opacity = '0';
        spotifyStatus.style.transform = 'translateX(50px)';
        
        setTimeout(() => {
            spotifyStatus.style.transition = 'all 0.6s ease';
            spotifyStatus.style.opacity = '1';
            spotifyStatus.style.transform = 'translateX(0)';
        }, 400);
    }
    
    // Tema toggle animasyonu
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.style.opacity = '0';
        themeToggle.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
            themeToggle.style.transition = 'all 0.6s ease';
            themeToggle.style.opacity = '1';
            themeToggle.style.transform = 'translateX(0)';
        }, 600);
    }
});

// Klavye erişilebilirliği
document.addEventListener('keydown', function(e) {
    // Escape tuşu ile tema değiştirme
    if (e.key === 'Escape') {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.click();
        }
    }
    
    // Tab tuşu ile odaklanma
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

// Mouse kullanımında keyboard-navigation sınıfını kaldır
document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Keyboard navigation için CSS ekle
const keyboardStyle = document.createElement('style');
keyboardStyle.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--text-accent) !important;
        outline-offset: 2px;
    }
`;
document.head.appendChild(keyboardStyle);

// Performans optimizasyonu için intersection observer
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Animasyonlu elementleri gözlemle
    const animatedElements = document.querySelectorAll('.profile-card, .social-button');
    animatedElements.forEach(el => observer.observe(el));
});

// Parallax efekti için mouse hareketi
document.addEventListener('mousemove', function(e) {
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        
        profileCard.style.transform = `translateY(-5px) rotateX(${y * 5}deg) rotateY(${x * 5}deg)`;
    }
});

// Mouse leave'de kartı normale döndür
document.addEventListener('mouseleave', function() {
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.style.transform = 'translateY(-5px) rotateX(0deg) rotateY(0deg)';
    }
});

// Smooth scroll için
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Profil kartı için 3D hover efekti
document.addEventListener('DOMContentLoaded', function() {
    const profileCard = document.querySelector('.profile-card');
    
    if (profileCard) {
        profileCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(5deg) rotateY(5deg)';
            this.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.3)';
        });
        
        profileCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) rotateX(0deg) rotateY(0deg)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        });
    }
});
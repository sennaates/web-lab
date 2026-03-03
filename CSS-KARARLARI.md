CSS Kararları
1. Breakpoint Seçimi
Neden 640px ve 1024px?: Bu değerler Tailwind CSS gibi modern kütüphanelerin standartlarını takip eder; 640px küçük tabletleri/büyük telefonları, 1024px ise standart dizüstü bilgisayarları hedefler.

İçerik Değişimi: 640px altında içerikler dikey yığın (column) halindeyken, bu sınırın üzerinde navigasyon yan yana gelir ve "Hakkımda" bölümü iki sütunlu düzene geçer.

2. Layout Tercihleri
Flexbox (Header): Navigasyon ve logonun zıt köşelere kolayca yaslanması (justify-content: space-between) ve elemanların dikeyde hizalanması için tek boyutlu bir düzen aracı olan Flexbox'ı seçtim.

Grid (Proje Kartları): Kartların satır ve sütun dengesini koruması ve auto-fit ile minmax özelliklerini kullanarak herhangi bir medya sorgusu yazmadan responsive bir galeri oluşturmak için Grid kullandım.

auto-fit vs auto-fill: auto-fit kullandım çünkü az sayıda projem olsa bile kartların satırı tam kaplayacak şekilde genişlemesini istedim.

3. Design Tokens
Renk Paleti: #231e3a (Primary) gibi koyu tonları profesyonel bir duruş için, yüzeylerde ise göz yormayan #f9fafb (Surface) tonlarını seçtim.

Spacing ve Fluid Typography: 1rem (16px) baz alınarak oluşturulan 4 katlı bir ölçek kullandım; clamp() fonksiyonu ile yazı boyutlarını ekran genişliğine (vw) göre akışkan hale getirerek her cihazda okunabilirliği sağladım.

4. Responsive Stratejiler
Mobile-first Yaklaşımı: CSS dosyamda varsayılan stilleri mobil için yazdım, daha sonra @media (min-width) kullanarak büyük ekranlar için geliştirmeler ekledim.

Yönetilen Elemanlar: Başlıklar, buton genişlikleri, kart sütun sayıları ve iç boşluklar (padding) seçilen kırılma noktalarında ekran tipine göre optimize edildi.

Görsel Yönetimi: Görsellerin max-width: 100% ve object-fit: cover değerleri ile kapsayıcılarını aşmadan, oranlarını bozmadan her ekranda düzgün görünmesini sağladım.
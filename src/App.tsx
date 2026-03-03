import './App.css'

function App() {
  return (
    <>
      {/* 1. Erişilebilirlik: Ana içeriğe atla bağı */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* 2. Header ve Navigasyon (Uygulama-4) */}
      <header>
        <a href="/" className="site-title">Sena'nın Portfolyosu</a>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* 3. Hakkımda Bölümü ve Beceri Etiketleri (Uygulama-5) */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img src="/profil.jpg" alt="Sena'nın profil fotoğrafı" />
            <figcaption>Sena - Junior Web Developer</figcaption>
          </figure>

          <p>
            Merhaba! Ben Sena. Web teknolojilerine olan merakımla kendimi bu alanda
            geliştiriyorum. Semantik HTML ve erişilebilirlik konularına odaklanıyorum.
          </p>

          <h3>Kullandığım Teknolojiler</h3>
          <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Git</li>
          </ul>
        </section>

        <hr />

        {/* 4. Projeler Bölümü ve Grid Düzeni (Uygulama-6) */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">

            {/* Proje Kartı 1 */}
            <article className="project-card">
              <img src="/foto2.jpg" alt="Git komutları ve terminal kullanımı çalışması" />
              <h3>Web Lab 1 - Git Ortamı</h3>
              <p>Git komutları ve terminal kullanımı üzerine temel bir çalışma.</p>
              <ul className="skill-tags">
                <li>Git</li>
                <li>Bash</li>
              </ul>
            </article>

            {/* Proje Kartı 2 */}
            <article className="project-card">
              <img src="/foto3.jpg" alt="Erişilebilirlik testi puanlarının gösterildiği rapor" />
              <h3>Web Lab 2 - Erişilebilir Portföy</h3>
              <p>Semantik etiketler ve ARIA öznitelikleri kullanılarak geliştirilen web sayfası.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Semantik HTML</li>
              </ul>
            </article>

            {/* Proje Kartı 3 (Föydeki örnek proje) */}
            <article className="project-card">
              <img src="/foto2.jpg" alt="Hava durumu uygulaması arayüzü" />
              <h3>Hava Durumu</h3>
              <p>OpenWeather API ile anlık hava durumu bilgisi sunan dinamik uygulama.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>

          </div>
        </section>

        <hr />

        {/* 5. İletişim Bölümü */}
        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input type="text" id="name" name="name" required minLength={2} />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required>
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea id="message" name="message" rows={5} required minLength={10}></textarea>
              </div>
              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* 6. Footer */}
      <footer>
        <p>&copy; 2026 Sena. Tüm hakları saklıdır.</p>
        <div className="social-links">
          <a href="https://github.com/senaates">GitHub</a> |
          <a href="https://linkedin.com/in/senaates"> LinkedIn</a>
        </div>
      </footer>
    </>
  )
}

export default App
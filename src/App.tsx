import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <>
      {/* 1. Header ve Navigasyon */}
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header>
        <h1>Sena'nın Portfolyosu</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* 2. Hakkımda Bölümü */}
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img
              src="/profil.jpg" alt="Sena'nın profil fotoğrafı"

            />
            <figcaption>Sena - Junior Web Developer</figcaption>
          </figure>

          <p>
            Merhaba! Ben Sena. Web teknolojilerine olan merakımla kendimi bu alanda
            geliştiriyorum. Semantik HTML ve erişilebilirlik konularına odaklanıyorum.
          </p>

          <h3>Kullandigim Teknolojiler</h3>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>React.js</li>
            <li>Git & GitHub</li>
            <li>TypeScript</li>
          </ul>
        </section>

        <hr />

        {/* 3. Projelerim Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>Web Lab 1 - Git Ortamı</h3>
            <p>Git komutları ve terminal kullanımı üzerine bir çalışma.</p>
            <p><strong>Teknolojiler:</strong> Git, Bash</p>
            <img
              src="/foto2.jpg" alt="Git Komutları"

            />
          </article>

          <article>
            <h3>Web Lab 2 - Erişilebilir Portföy</h3>
            <p>Semantik etiketler ve ARIA öznitelikleri kullanılarak geliştirildi.</p>
            <p><strong>Teknolojiler:</strong> React, Semantik HTML</p>
            <img
              src="/foto3.jpg"
              alt="Erişilebilirlik testi puanlarının gösterildiği Lighthouse raporu"
            />
          </article>
        </section>

        <hr />

        {/* 4. İletişim Bölümü (Uygulama-4 Formu) */}
        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* 5. Footer */}
      <footer>
        <p>&copy; 2025 Sena. Tum haklari saklidir.</p>
        <div className="social-links">
          <a href="https://github.com/senaates">GitHub</a> |
          <a href="https://linkedin.com/in/senaates"> LinkedIn</a>
        </div>
      </footer>
    </>
  );
}

export default App;
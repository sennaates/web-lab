import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 >Web Tasarimi ve Programlama </h1 >
      <h2 >LAB -1 </h2 >
      <p> Ad Soyad : Sena Ateş</p>
      <p> Ogrenci No: 235542010</p>
      <p> Hobilerim : Resim çizmek, günlük tutmak</p>
      <p> Okulum : Fırat Üniversitesi </p>
      <p> Bölümüm : Yazılım Mühendisliği </p>

    </div >
  )
}

export default App

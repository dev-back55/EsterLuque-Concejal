import styles from './page.module.css'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Hero/>
    </main>
  )
}

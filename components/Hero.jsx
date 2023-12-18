import Image from "next/image";
import styles from "./Hero.module.css"
import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({ subsets: ['latin'], weight: ['700'] })

export default function Hero() {
    
    return (
        <div className={styles.hero_container}>
            <div className={styles.image_container}>

                <Image 
                    src="/ester1-removebg.png"
                    width={500}
                    height={400}
                    alt=""
                />
            </div>
            <div className={styles.text_container}>
                <p className={`${merriweather.className}`}>Hola, soy Ester Luque, una líder comprometida y apasionada que trabaja incansablemente para mejorar la calidad de vida en Rawson. Como su representante en el Concejo Deliberante, estaré dedicada a servir a la comunidad y abogar por un futuro mejor.</p>

            </div>
        </div>
    )
}
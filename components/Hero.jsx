import Image from "next/image";
import styles from "./Hero.module.css"
import { Merriweather, Lobster } from 'next/font/google'

const merriweather = Merriweather({ subsets: ['latin'], weight: ['700'] })
const lobster = Lobster({ subsets: ['latin'], weight: ['400'] })

export default function Hero() {
    
    return (
        <div className={styles.hero_container}>
            <div className={styles.image_container}>

                <Image
                    src="/ester1-removebg.png"
                    width={500}
                    height={400}
                    alt=""
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto"
                    }}
                />
            </div>
            <div className={styles.text_container}>
                <p className={`${lobster.className}`}>Hola, soy Ester Luque, una líder comprometida y apasionada que trabaja incansablemente para mejorar la calidad de vida en Rawson. Como su representante en el Concejo Deliberante, estaré dedicada a servir a la comunidad y abogar por un futuro mejor. ¡Viva la Libertad!</p>

            </div>
        </div>
    );
}
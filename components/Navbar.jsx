'use client'
import { useState } from "react";
import Image from 'next/image';
import styles from './Navbar.module.css';
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.navbar_container}>

            <div className={styles.logo_container}>
            <Image 
                src="/ms-icon-70x70.png"
                width={70}
                height={70}
              
                alt=""
            />
            <span>Ester Luque</span>
            </div>

            <div className={styles.menu_container}>
            
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link href="/">ACERCA DE MI</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/">MISIÓN</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/">PROYECTOS</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/">BLOG</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/" passHref>CONTACTO</Link>
                    </li>
                </ul>
                <div className={styles.hamburger} onClick={() => setOpen(!open)}>
                    <div className={styles.line} />
                    <div className={styles.line} />
                    <div className={styles.line} />
                </div>
                <ul onClick={()=>setOpen(false)} className={styles.menu} style={{ right: open ? "0px" : "-50vw" }}>
                    <li className={styles.menuItem}>
                        <Link href="/" passHref>INICIO</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/">ACERCA DE MI</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/">MISIÓN</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/">PROYECTOS</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/">BLOG</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/" passHref>CONTACTO</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.redes_container}>
                <Image 
                    src="/instagram.png"
                    width={25}
                    height={25}
                    alt=""
                />
                <Image 
                    src="/facebook.png"
                    width={25}
                    height={25}
                    alt=""
                />
            </div>

        </div>
    )
}
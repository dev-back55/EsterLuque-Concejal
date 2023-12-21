'use client'
import { useState } from "react";
import Image from 'next/image';
import styles from './Navbar.module.css';
import Link from "next/link";
import { FiMoon } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';
import { useTheme } from "next-themes";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();

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
                <a href="https://www.instagram.com/esterluquerawson/" target="_blank" rel="noreferrer">
                        
                    <Image className={styles.imgItem}
                        src="/instagram.png"
                        width={25}
                        height={25}
                        alt=""
                    />
                </a>
                   
                <a href="https://www.facebook.com/ConsejalEster?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                    <Image className={styles.imgItem}
                        src="/facebook.png"
                        width={25}
                        height={25}
                        alt=""
                    />
                </a>
            </div>

            <div className={styles.toggle_mode}>
                {theme === "dark" ? (
                    <BsSun size={25} cursor="pointer" onClick={() => setTheme("light")} />
                ) : (
                    <FiMoon size={25} cursor="pointer" onClick={() => setTheme("dark")}/> 
                )}
            </div>

        </div>
    )
}
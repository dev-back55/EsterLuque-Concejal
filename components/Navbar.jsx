'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from './Navbar.module.css';
import Link from "next/link";
import { FiMoon } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';
import { useTheme } from "next-themes";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className={styles.navbar_container}>

            <div className={styles.logo_container}>
                <Image
                    src="/ms-icon-70x70.png"
                    width={70}
                    height={70}
                    alt=""
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />
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
                    {/* <div className={styles.line} />
                    <div className={styles.line} />
                    <div className={styles.line} /> */}
                    {open ? (
                            <IoMdClose size={30} cursor="pointer"/>)
                          : (
                            <IoIosMenu size={30} cursor="pointer"/>
                          )  
                    }
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
                        
                    <Image
                        className={styles.imgItem}
                        src="/instagram.png"
                        width={25}
                        height={25}
                        alt=""
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </a>
                   
                <a href="https://www.facebook.com/ConsejalEster?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                    <Image
                        className={styles.imgItem}
                        src="/facebook.png"
                        width={25}
                        height={25}
                        alt=""
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
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
    );
}
import React from 'react'
import Head from 'next/head';
import styles from "./styles";

import NavBar from './NavBar';
import Footer from './Footer';


const Layout = ({ children }) => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <Head>
                <title>DazBank Inc</title>
            </Head>

            <header className={ `${styles.paddingX} ${styles.flexCenter}` }>
                <div className={ `${styles.boxWidth}` }>
                    <NavBar />
                </div>
            </header>

            <main>
                { children }
            </main>

            <footer className={ `bg-primary ${styles.paddingX} ${styles.flexCenter}` }>
                <div className={ `${styles.boxWidth}` }>
                    <Footer />
                </div>
            </footer>
        </div>
    )
}

export default Layout
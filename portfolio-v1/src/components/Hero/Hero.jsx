/* eslint-disable react/no-unescaped-entities */
import { getImageURL } from "../../utilsImage";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm Jason.
                </h1>
                <p className={styles.description}>
                    Here is the my hero paragraph.
                </p>
                <a className={styles.contactBtn} 
                    href="mailto:example@email.com"
                >Contact Me!</a>
            </div>
            <img 
                className={styles.heroImg} 
                src={getImageURL("hero/heroImage.png")} 
                alt="HeroImage" 
            />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};

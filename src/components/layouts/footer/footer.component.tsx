import { BsGithub } from 'react-icons/bs';

import styles from './footer.module.scss';

const Footer = () =>
{
    return (
        <footer className={styles.footer}>
            <div className={styles.footerBox}>
                <span>© 2021 - { new Date().getFullYear() } Yared Ab incollabration with IntelligentQuantum</span>
                <a
                    href='https://github.com/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsGithub />
                    Git Licenced 
                </a>
            </div>
        </footer>
    );
};

export default Footer;

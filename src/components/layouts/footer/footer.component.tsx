import { BsGithub } from 'react-icons/bs';

import styles from './footer.module.scss';

const Footer = () =>
{
    return (
        <footer className={styles.footer}>
            <div className={styles.footerBox}>
                <span>© 2021 Yared Ab </span>
                <a
                    href='https://github.com/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsGithub />
                    Git  
                </a>
            </div>
        </footer>
    );
};

export default Footer;

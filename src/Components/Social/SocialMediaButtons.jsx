import styles from './SocialMedia.module.css'

export default function SocialMediaButtons ({ customStyle = {} }) {
    
    return (
            <div className={styles.SocialMedia} style={customStyle}>
                <a href="#">
                    <img src="icons/sliderHomePage/instagram-logo-24.png" alt="instagram" />
                </a>
                <a href="#">
                    <img src="icons/sliderHomePage/vk-logo-24.png" alt="vk" />
                </a>
                <a href="#">
                    <img src="icons/sliderHomePage/facebook-logo-24.png" alt="facebook" />
                </a>
                <a href="#">
                    <img src="icons/sliderHomePage/youtube-logo-24.png" alt="youtube" />
                </a>
            </div>
    )
}
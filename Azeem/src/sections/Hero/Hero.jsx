import heroImg from '../../assets/hero-img.png';
import styles from './HeroStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterlight from '../../assets/twitter-light.svg';
import twitterdark from '../../assets/twitter-dark.svg';
import gitlight from '../../assets/github-light.svg';
import gitdark from '../../assets/github-dark.svg';
import linkedindark from '../../assets/linkedin-dark.svg';
import linkedinlight from '../../assets/linkedin-light.svg';
import cv from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
function Hero(){
  const {theme,toggleTheme}=useTheme();

  const themeicon=theme==='light' ? sun : moon ;
  const twittericon=theme==='light' ? twitterlight : twitterdark ;
  const giticon=theme==='light' ? gitlight : gitdark ;
  const linkedinicon=theme==='light' ? linkedinlight : linkedindark ;
    return (
    <section id="hero" className={styles.container}>
      <div className={styles.ColorModeContainer}>
        <img
        className={styles.hero}
          src={heroImg}
          alt="Profile picture of Harris Johnsen"
        />

        <img className={styles.colorMode}
         src={themeicon}
          alt="sun theme icon" 
          onClick={toggleTheme}/>
          
     </div>
     <div className={styles.info}>
      <h1>Azeem <br/> Shaik</h1>
<h2>Front-end Developer</h2>
<span>
<a  href="https://x.com/shaikazeem2069"></a>
<img src={twittericon} alt="twitter" />

<a  href="https://github.com/shaikazeem2001"></a>
<img src={giticon} alt="git hub" />


<a  href="https://www.linkedin.com/in/shaik-azeem-817886233/"></a>
<img src={linkedinicon} alt="linkedin" />
</span>
<p>With a passion for <br /> developing modern React <br /> web apps for commercial <br /> businesses.</p>
      <a href={cv} download>
      <button className='hover'>Resume</button>
      </a>
     </div>
    </section>                   
  );
}

export default Hero;

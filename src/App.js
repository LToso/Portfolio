import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './styles/App.css';
import './styles/Home.css';
import './styles/About.css';
import './styles/Skills.css';
import './styles/Projects.css';
import './styles/Contact.css';
import './styles/Background.css';
import './styles/Scrollbar.css';
import { translate } from './languages/translator';

function App() {

  const iconList = Object.keys(Icons).filter(key => key !== "fa" && key !== "prefix").map(icon => Icons[icon]);
  library.add(...iconList)

  return (
    <div>
      <div className='links'>
        <div className='bigline' />
        <div>
          <span className='vertical-label'>{translate('label-contact')}</span>
          <a href='https://www.linkedin.com/in/leonardo-tosin-9ba00568/?locale=en_US' target='_blank' ><div className='link-icon link-linked' /></a>
          <div className='smallline' />
          <a href='https://github.com/LToso/' target='_blank'><div className='link-icon link-git' /></a>
          <div className='smallline' />
          <a href='https://www.instagram.com/leonardo.tosin/' target='_blank'><div className='link-icon link-insta' /></a>
          <div className='smallline' />
          <a href='#' target='_blank'><div className='link-icon link-tel' /></a>
          <div className='smallline' />
          <a href='#' target='_blank'><div className='link-icon link-email' /></a>
        </div>
        <div className='smallline' />
      </div>
      <div className='menus'>
        <div className='smallline' />
        <div>
          <span className='vertical-label'>{translate('label-menu')}</span>  
          <a href='#home' ><div className='menu-icon'><FontAwesomeIcon icon='house' /></div></a>
          <div className='smallline' />
          <a href='#about' ><div className='menu-icon'><FontAwesomeIcon icon='user' /></div></a>
          <div className='smallline' />
          <a href='#skills' ><div className='menu-icon'><FontAwesomeIcon icon='code' /></div></a>
          <div className='smallline' />
          <a href='#contact' ><div className='menu-icon'><FontAwesomeIcon icon='code-branch' /></div></a>
        </div>
        <div className='bigline' />
      </div>
      <section id='home' className='area'>
        <div className='home-hello '>
          <span className='home-pre-name highlight'>
            Hi there, I'm
          </span>
          <span className='home-name'>
            Leonardo Tosin
          </span>
          <span className='home-pos-name highlight'>
            Fullstack Developer & Agile Specialist
          </span>
          <span className='home-desc'>
            Brazilian software engineer specialized in building (and sometimes designing) software experiences.
            Currently working at <b className='highlight'>IOB</b> as a <b className='highlight'>Project Manager/Tech Lead</b>.
          </span>
          <div className='home-resume'>
            <div className='home-download'>
              <span>
                {translate('home-resume')}
              </span>
            </div>
          </div>
          <ul class="circles">
            <li /><li /><li /><li /><li /><li /><li /><li /><li /><li />
          </ul>
        </div>
        <div className='next-page-container'>
          <div className='next-page'>
            <a href='#about'>
              <FontAwesomeIcon icon='chevron-down' className='highlight' />
              <span>{translate('next-about')}</span>
            </a>
          </div>
        </div>
      </section>
      <section id='about'>
        <div>
          <div>
            {translate('menu-about')}
          </div>
          <div>
            <span>Blablabla</span>
          </div>
          <div>
            Foto
          </div>
        </div>

      </section>
      <section id='skills'>

      </section>
      <section id='projects'>

      </section>
      <section id='contact'>

      </section>
    </div>
  );
}

export default App;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './styles/App.css';
import './styles/Menu.css';
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
      <div id='menu'>
        <a href='#home' className='menu-item'><FontAwesomeIcon icon='house' /><span>{translate('menu-home')}</span></a>
        <a href='#about' className='menu-item'><FontAwesomeIcon icon='circle-info' /><span>{translate('menu-about')}</span></a>
        <a href='#skills' className='menu-item'><FontAwesomeIcon icon='code' /><span>{translate('menu-skills')}</span></a>
        <a href='#projects' className='menu-item'><FontAwesomeIcon icon='code-branch' /><span>{translate('menu-projects')}</span></a>
        <a href='#contact' className='menu-item'><FontAwesomeIcon icon='envelope' /><span>{translate('menu-contact')}</span></a>
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

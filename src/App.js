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

  const name = 'Leonardo Tosin';

  const iconList = Object.keys(Icons).filter(key => key !== "fa" && key !== "prefix").map(icon => Icons[icon]);
  library.add(...iconList)

  return (
    <div>
      <div className='links'>
        <div className='bigline' />
        <div>
          <span className='vertical-label'>{translate('label-contact')}</span>
          <a href='https://www.linkedin.com/in/leonardo-tosin-9ba00568/?locale=en_US' target='_blank' ><div className='link-icon link-linked'><span>LinkedIn</span></div></a>
          <div className='smallline' />
          <a href='https://github.com/LToso/' target='_blank'><div className='link-icon link-git'><span>GitHub</span></div></a>
          <div className='smallline' />
          <a href='https://www.instagram.com/leonardo.tosin/' target='_blank'><div className='link-icon link-insta'><span>Instagram</span></div></a>
          <div className='smallline' />
          <a><div className='link-icon link-tel'><span>{'+55(41)999000017'}</span></div></a>
          <div className='smallline' />
          <a><div className='link-icon link-email'><span>leotosin99@hotmail.com</span></div></a>
        </div>
        <div className='smallline' />
      </div>
      <div className='menus'>
        <div className='smallline' />
        <div>
          <span className='vertical-label'>{translate('label-menu')}</span>
          <a href='#home' ><div className='menu-icon'><span>{translate('menu-home')}</span><FontAwesomeIcon icon='house' /></div></a>
          <div className='smallline' />
          <a href='#about' ><div className='menu-icon'><span>{translate('menu-about')}</span><FontAwesomeIcon icon='user' /></div></a>
          <div className='smallline' />
          <a href='#skills' ><div className='menu-icon'><span>{translate('menu-skills')}</span><FontAwesomeIcon icon='code' /></div></a>
          <div className='smallline' />
          <a href='#contact' ><div className='menu-icon'><span>{translate('menu-projects')}</span><FontAwesomeIcon icon='code-branch' /></div></a>
        </div>
        <div className='bigline' />
      </div>
      <section id='home' className='area'>
        <div className='home-hello '>
          <span className='home-pre-name highlight'>
            Hi there, I'm
          </span>
          <span className='home-name'>
            {name}
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
            <li>{'width:'}</li><li>{'function()'}</li><li>{'if {'}</li><li>{'</div>'}</li><li>{'} else {'}</li><li>{'.map('}</li><li>{'</>'}</li><li>{'return;'}</li><li>{'<span>'}</li><li>{'display: flex'}</li>
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

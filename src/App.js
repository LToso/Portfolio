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
  const skills = [
    { name: 'C#', icon: require('./imgs/logos/csharp.png') },
    { name: 'Delphi', icon: require('./imgs/logos/delphi.png') },
    { name: 'CSS', icon: require('./imgs/logos/css.png') },
    { name: 'JavaScript', icon: require('./imgs/logos/js.png') },
    { name: 'React', icon: require('./imgs/logos/react.png') },
    { name: 'SQL Server', icon: require('./imgs/logos/sqlserver.png') },
    { name: 'MySQL', icon: require('./imgs/logos/mysql.png') },
    { name: 'Unity', icon: require('./imgs/logos/unity.png') },
    { name: 'Amazon AWS', icon: require('./imgs/logos/aws.png') },
    { name: 'Jira', icon: require('./imgs/logos/jira.png') },
    { name: 'Git', icon: require('./imgs/logos/git.png') },
  ];

  const pluses = [
    { name: 'Project Management' },
    { name: 'Agile Methodology' },
    { name: 'Clean Code' },
    { name: 'Seniority' },
  ]

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
          <ul className="circles">
            <li>{'width:'}</li><li>{'function()'}</li><li>{'if {'}</li><li>{'</div>'}</li><li>{'} else {'}</li><li>{'.map('}</li><li>{'</>'}</li><li>{'return;'}</li><li>{'<span>'}</li><li>{'display: flex'}</li>
          </ul>
        </div>
      </section>
      <section id='about'>
        <div className='about-container'>
          <div className='page-title'>
            <FontAwesomeIcon icon='user' /><span>{translate('page-about')}</span>
          </div>
          <div className='about-presentation'>
            <span className='about-photo' />
            <span className='about-desc'>
              <span>Hey! My name is <span className='highlight'>Leonardo</span> and I'm a <span className='highlight'>senior</span> developer living in Brazil. My love for coding dates back to 2008 when I started my <span className='highlight'>Systems Analysis and Development college</span>. Since then I have been creating applications for several large companies here in <span className='highlight'>Brazil.</span></span>
              <br /><br />
              <span>I love developing for the <span className='highlight'>web</span>, the satisfaction of seeing the pages taking shape and the users using it on a daily basis always <span className='highlight'>inspires me</span> to want to continue programming. Even after taking on a <span className='highlight'>project manager</span> role, I continued coding and supporting the team with technical solutions.</span>
              <br /><br />
              <span>I currently work as a project manager and tech lead at <span className='highlight'>IOB</span>, but I'm looking for a new experience abroad as a <span className='highlight'>web developer.</span></span>
              <br /><br />
              <span>Cheers! <span className='highlight'>Leonardo Tosin</span></span>
            </span>
          </div>
        </div>
      </section>
      <section id='skills'>
        <div className='skills-container'>
          <div className='page-title'>
            <FontAwesomeIcon icon='code' /><span>{translate('page-skills')}</span>
          </div>
          <div className='skills-list'>
            {
              skills.map(x =>
                <div className='skill-box' key={x.name}>
                  <img className='skill-icon' src={x.icon} />
                  <div className='skill-name'>{x.name}</div>
                </div>
              )
            }
          </div>
        </div>
      </section>
      <section id='projects'>
        <div className='projects-container'>
          <div className='page-title'>
            <FontAwesomeIcon icon='code-branch' /><span>{translate('page-projects')}</span>
          </div>
          <div className='projects-list'>
          </div>
        </div>
      </section>
      <section id='contact'>

      </section>
    </div>
  );
}

export default App;

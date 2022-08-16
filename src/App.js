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
import { useState } from 'react';

function App() {

  const name = 'Leonardo Tosin';
  const [refresh, setRefresh] = useState(false);
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

  const changeLanguage = (e) => {
    sessionStorage.setItem('language', e);
    setRefresh(!refresh);
  }

  const iconList = Object.keys(Icons).filter(key => key !== "fa" && key !== "prefix").map(icon => Icons[icon]);
  library.add(...iconList)

  return (
    <div>
      <div className='links'>
        <div>
          <div className='smallline' />
          <a onClick={() => changeLanguage('PT-BR')}><div className='link-icon link-brasil'><span>PT/BR</span></div></a>
          <div className='smallline' />
          <a onClick={() => changeLanguage('EN-US')}><div className='link-icon link-eua'><span>EN/US</span></div></a>
        </div>
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
            {translate('line1')}
          </span>
          <span className='home-name'>
            {name}
          </span>
          <span className='home-pos-name highlight'>
            {translate('line2')}
          </span>
          <span className='home-desc'>
            {translate('line3')}
          </span>
          <div className='home-resume'>
            <a href={require('./imgs/resume.pdf')} download="Resume - Leonardo Tosin.pdf">
              <div className='home-download'>
                <span>
                  {translate('home-resume')}
                </span>
              </div>
            </a>
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
              {translate('about1')}
              <br /><br />
              {translate('about2')}
              <br /><br />
              {translate('about3')}
              <br /><br />
              {translate('about4')}
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

            <div className='project-box'>
              <span className='project-box-title highlight'>Leonardo Tosin - Code Heaven</span>
              <div className='project-box-description'>
                <div className='project-box-header'>
                  <img src={require('./imgs/projects/code.png')} className='project-box-picture' />
                </div>
                <div className='project-box-resume'>
                  <span>{translate('project1-desc')}</span>
                </div>
                <div className='project-box-stacks'>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='code' />
                    <span>React</span>
                  </div>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='code' />
                    <span>C#</span>
                  </div>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='database' />
                    <span>SQL Server</span>
                  </div>
                </div>
                <div className='project-box-links'>
                  <a href='https://ltoso.github.io/CodeHeaven/' target='_blank'><FontAwesomeIcon icon='up-right-from-square' alt='External Link' /> <span>Website</span></a>
                  <a href='https://github.com/LToso/CodeHeaven/' target='_blank'><FontAwesomeIcon icon='up-right-from-square' alt='External Link' /> <span>Github</span></a>
                </div>
              </div>
            </div>

            <div className='project-box'>
              <span className='project-box-title highlight'>IOB - Gestão Contábil</span>
              <div className='project-box-description'>
                <div className='project-box-header'>
                  <img src={require('./imgs/projects/iob.png')} className='project-box-picture' />
                </div>
                <div className='project-box-resume'>
                  <span>{translate('project3-desc')}</span>
                </div>
                <div className='project-box-stacks'>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='code' />
                    <span>Delphi</span>
                  </div>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='code' />
                    <span>C#</span>
                  </div>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='database' />
                    <span>SQL Server</span>
                  </div>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='database' />
                    <span>MySQL</span>
                  </div>
                </div>
                <div className='project-box-links'>
                  <a href='https://tech.iob.com.br/' target='_blank'><FontAwesomeIcon icon='up-right-from-square' alt='External Link' /> <span>Website</span></a>
                </div>
              </div>
            </div>

            <div className='project-box'>
              <span className='project-box-title highlight'>IOB - Smart KPIs</span>
              <div className='project-box-description'>
                <div className='project-box-header'>
                  <img src={require('./imgs/projects/smart.png')} className='project-box-picture' />
                </div>
                <div className='project-box-resume'>
                  <span>{translate('project4-desc')}</span>
                </div>
                <div className='project-box-stacks'>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='code' />
                    <span>React</span>
                  </div>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='code' />
                    <span>C#</span>
                  </div>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='database' />
                    <span>SQL Server</span>
                  </div>
                </div>
                <div className='project-box-links'>
                  <a href='https://tech.iob.com.br/' target='_blank'><FontAwesomeIcon icon='up-right-from-square' alt='External Link' /> <span>Website</span></a>
                </div>
              </div>
            </div>

            <div className='project-box'>
              <span className='project-box-title highlight'>Ausland - Goldway WMS</span>
              <div className='project-box-description'>
                <div className='project-box-header'>
                  <img src={require('./imgs/projects/ausland.webp')} className='project-box-picture' />
                </div>
                <div className='project-box-resume'>
                  <span>{translate('project5-desc')}</span>
                </div>
                <div className='project-box-stacks'>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='code' />
                    <span>C#</span>
                  </div>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='database' />
                    <span>SQL Server</span>
                  </div>
                </div>
                <div className='project-box-links'>
                  <a href='https://ausland.com.br/erp/wms/' target='_blank'><FontAwesomeIcon icon='up-right-from-square' alt='External Link' /> <span>Website</span></a>
                </div>
              </div>
            </div>

            <div className='project-box'>
              <span className='project-box-title highlight'>Alpha Quest - Nautical Life</span>
              <div className='project-box-description'>
                <div className='project-box-header'>
                  <img src={require('./imgs/projects/nautical.webp')} className='project-box-picture' />
                </div>
                <div className='project-box-resume'>
                  <span>{translate('project7-desc')}</span>
                </div>
                <div className='project-box-stacks'>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='code' />
                    <span>Unity</span>
                  </div>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='code' />
                    <span>C#</span>
                  </div>
                </div>
                <div className='project-box-links'>
                  <a href='https://play.google.com/store/apps/details?id=com.alphaquest.nauticallife' target='_blank'><FontAwesomeIcon icon='up-right-from-square' alt='External Link' /> <span>Website</span></a>
                </div>
              </div>
            </div>

            <div className='project-box'>
              <span className='project-box-title highlight'>Alpha Quest - Archer Quest</span>
              <div className='project-box-description'>
                <div className='project-box-header'>
                  <img src={require('./imgs/projects/archer.webp')} className='project-box-picture' />
                </div>
                <div className='project-box-resume'>
                  <span>{translate('project6-desc')}</span>
                </div>
                <div className='project-box-stacks'>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='code' />
                    <span>Unity</span>
                  </div>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='code' />
                    <span>C#</span>
                  </div>
                </div>
                <div className='project-box-links'>
                  <a href='https://play.google.com/store/apps/details?id=com.alphaquest.archerquest' target='_blank'><FontAwesomeIcon icon='up-right-from-square' alt='External Link' /> <span>Website</span></a>
                </div>
              </div>
            </div>

            <div className='project-box'>
              <span className='project-box-title highlight'>Leonardo Tosin - Portfolio</span>
              <div className='project-box-description'>
                <div className='project-box-header'>
                  <img src={require('./imgs/projects/port.png')} className='project-box-picture' />
                </div>
                <div className='project-box-resume'>
                  <span>{translate('project2-desc')}</span>
                </div>
                <div className='project-box-stacks'>
                  <div className='project-box-stack'>
                    <FontAwesomeIcon icon='code' />
                    <span>React</span>
                  </div>
                </div>
                <div className='project-box-links'>
                  <a href='https://ltoso.github.io/Portfolio/' target='_blank'><FontAwesomeIcon icon='up-right-from-square' alt='External Link' /> <span>Website</span></a>
                  <a href='https://github.com/LToso/Portfolio' target='_blank'><FontAwesomeIcon icon='up-right-from-square' alt='External Link' /> <span>Github</span></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

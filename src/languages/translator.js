export const translate = (id) => {

    let language = sessionStorage.getItem('language');

    switch (language) {
        case ('PT-BR'): return portuguese(id);
        case ('EN-US'): return english(id);
        default: return portuguese(id);
    }
}

const portuguese = (id) => {
    switch (id) {
        case ('menu-home'): return 'Inicio';
        case ('menu-about'): return 'Sobre';
        case ('menu-skills'): return 'Hábilidades';
        case ('menu-projects'): return 'Projetos';
        case ('label-contact'): return 'contato social';
        case ('label-menu'): return 'menu navegação';
        case ('line1'): return "Opa, eu sou o";
        case ('line2'): return 'Desenvolvedor Fullstack & Especialista Ágil';
        case ('line3'): return <span>Engenheiro de software brasileiro especializado em construir expêriencias de software. Atualmente trabalhando na <b className='highlight'>IOB</b> como <b className='highlight'>Gerente de Projetos e Tech Lead</b></span>;
        case ('about1'): return <span>Ei! Meu nome é <span className='highlight'>Leonardo</span> e sou um desenvolvedor <span className='highlight'>sênior</span> morando no Brasil. Minha paixão por códigos começou em 2008 quando iniciei minha faculdade de <span className='highlight'>Analise e Desenvolvimento de Sistemas</span>. Desde então eu venho criando aplicações para várias empresas aqui no <span className='highlight'>Brasil.</span></span>;
        case ('about2'): return <span>Eu amo o desenvolvimento <span className='highlight'>web</span>, a satisfação de ver as páginas sendo montadas e sabendo que os usuarios usam elas no dia a dia <span className='highlight'>me inspira</span> a continuar aprendendo e programando ainda mais. Mesmo depois de assumir o cargo de <span className='highlight'>gerente de projetos</span>, eu continuo programando e apoiando o time nas soluções técnicas quase que diariamente.</span>;
        case ('about3'): return <span>Atualmente estou trabalhando como gerente de projetos e tech lead na <span className='highlight'>IOB</span>, mas estou procurando uma vaga como <span className='highlight'>desenvolvedor web</span> fora do pais.</span>;
        case ('about4'): return <span>Obrigado! <span className='highlight'>Leonardo Tosin</span></span>;
        case ('home-resume'): return 'Download do Curriculo';
        case ('page-about'): return 'Sobre mim';
        case ('page-skills'): return 'Hábilidades';
        case ('page-projects'): return "Projetos";
        default: return '-';
    }
}

const english = (id) => {
    switch (id) {
        case ('menu-home'): return 'Home';
        case ('menu-about'): return 'About';
        case ('menu-skills'): return 'Skills';
        case ('menu-projects'): return 'Projects';
        case ('label-contact'): return 'social contact';
        case ('label-menu'): return 'navigation menu';
        case ('line1'): return "Hi there, I'm";
        case ('line2'): return 'Fullstack Developer & Agile Specialist';
        case ('line3'): return <span>Brazilian software engineer specialized in building software experiences. Currently working at <b className='highlight'>IOB</b> as a <b className='highlight'>Project Manager/Tech Lead</b></span>;
        case ('about1'): return <span>Hey! My name is <span className='highlight'>Leonardo</span> and I'm a <span className='highlight'>senior</span> developer living in Brazil. My love for coding dates back to 2008 when I started my <span className='highlight'>Systems Analysis and Development college</span>. Since then I have been creating applications for several large companies here in <span className='highlight'>Brazil.</span></span>;
        case ('about2'): return <span>I love developing for the <span className='highlight'>web</span>, the satisfaction of seeing the pages taking shape and the users using it on a daily basis always <span className='highlight'>inspires me</span> to want to continue improving and programming even more. Even after taking on a <span className='highlight'>project manager</span> role, I continued coding and supporting the team with technical solutions.</span>;
        case ('about3'): return <span>I currently work as a project manager and tech lead at <span className='highlight'>IOB</span>, but I'm looking for a new experience abroad as a <span className='highlight'>web developer.</span></span>;
        case ('about4'): return <span>Cheers! <span className='highlight'>Leonardo Tosin</span></span>;
        case ('home-resume'): return 'Download Resume';
        case ('page-about'): return 'About me';
        case ('page-skills'): return 'Skills';
        case ('page-projects'): return "Projects";
        default: return '-';
    }
}

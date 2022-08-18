export const translate = (id) => {

    let language = sessionStorage.getItem('language');

    switch (language) {
        case ('PT-BR'): return portuguese(id);
        case ('EN-US'): return english(id);
        default: return english(id);
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
        case ('tec-label'): return "Tecnologias Utilizadas:";
        case ('project1-desc'): return <div>
            <span>
                Inspirado em um dos maiores sites de recrutamentos de desenvolvedores do mundo, Code Heaven surgiu para suprir uma necessidade do mercado brasileiro de tecnologia, a busca de profissionais de qualidade.
            </span>
            <span className="project-box-occup">
                Áreas de Atuação: <span>Recrutamento</span><span>Recursos Humanos</span><span>Web</span>
            </span>
            <span className="project-box-occup">
                Impacto no Mercado: <span>Beta, ainda não lançado</span>
            </span>
        </div>;
        case ('project3-desc'): return <div>
            <span>
                Software feito para escritorios de contábilidade, utilizado para facilitar a administração de vários setores e de multiplas empresas, desde a folha de pagamento e rotinas de recursos humanos, até importação de notas fiscais e obrigações fiscais governamentais.
            </span>
            <span className="project-box-occup">
                Áreas de Atuação: <span>Contábilidade</span><span>Recursos Humanos</span><span>Fiscal</span><span>Controle Patrimonial</span><span>Desktop</span>
            </span>
            <span className="project-box-occup">
                Impacto no Mercado: <span>15 mil escritorios de contábilidade no Brazil</span>
            </span>
        </div>;
        case ('project4-desc'): return <div>
            <span>
                Site com KPIs extraidos diretamente do JIRA para uso diario da equipe de desenvolvimento, a necessidade surgiu pois o JIRA não entrega de maneira clara alguns dados relacionados a gestão de projetos, então foi criado essa plataforma para apoiar nessa analise.
            </span>
            <span className="project-box-occup">
                Áreas de Atuação: <span>Gerenciamento de Projetos</span><span>KPIs</span><span>Web</span>
            </span>
            <span className="project-box-occup">
                Impacto no Mercado: <span>12 equipes de desenvolvimento de software da empresa</span>
            </span>
        </div>;
        case ('project5-desc'): return <div>
            <span>
                Software para controle de armazem e fornecedores.
            </span>
            <span className="project-box-occup">
                Áreas de Atuação: <span>Gerenciamento de Armazens</span><span>Fornecedores</span>
            </span>
            <span className="project-box-occup">
                Impacto no Mercado: <span>2 mil clientes no Brazil</span>
            </span>
        </div>;
        case ('project6-desc'): return <div>
            <span>
                Bem-vindo aventureiro, teste sua habilidade de arqueiro nesse jogo desafiador que ira fazer você ganhar horas de muita diversão! Acerte todos os alvos, acione os mecanismos e evolua suas habilidades com o arco nesse divertido passa tempo criado especialmente para você.
            </span>
            <span className="project-box-occup">
                Áreas de Atuação: <span>Entretenimento</span><span>Arco e Flexa</span><span>Mobile</span>
            </span>
            <span className="project-box-occup">
                Impacto no Mercado: <span>15 mil downloads (Android)</span>
            </span>
        </div>;
        case ('project7-desc'): return <div>
            <span>
                Nautical Life é um jogo de Simulador Náutico, onde você pode pescar, comprar um iate e alugar um monte de barcos de pesca para virar um magnata da pesca ao redor do mundo. Viaje de leste a oeste para pescar mais de 50 peixes diferentes, incluindo um Kraken!
            </span>
            <span className="project-box-occup">
                Áreas de Atuação: <span>Entretenimento</span><span>Pesca</span><span>Tycoon</span><span>Yacht</span><span>Mobile</span>
            </span>
            <span className="project-box-occup">
                Impacto no Mercado: <span>2.2 milhões downloads (Android + iOS)</span>
            </span>
        </div>;
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
        case ('tec-label'): return "Stacks:";
        case ('project1-desc'): return <div>
            <span>
                Inspired by one of the largest developer recruitment sites in the world, Code Heaven emerged to meet a need in the Brazilian technology market, the search for quality professionals.
            </span>
            <span className="project-box-occup">
                Area of Expertise: <span>Recruitment</span><span>Human Resources</span><span>Web</span>
            </span>
            <span className="project-box-occup">
                Market Impact: <span>Beta, not released</span>
            </span>
        </div>;
        case ('project3-desc'): return <div>
            <span>
                Software made for accounting offices, used to facilitate the administration of various sectors and multiple companies, from payroll and human resources routines, to importing invoices and government tax obligations.
            </span>
            <span className="project-box-occup">
                Area of Expertise: <span>Accounting</span><span>Human Resources</span><span>Tax</span><span>Asset Control</span><span>Desktop</span>
            </span>
            <span className="project-box-occup">
                Market Impact: <span>15 thousand accounting offices in Brazil</span>
            </span>
        </div>;
        case ('project4-desc'): return <div>
            <span>
                Website with KPIs extracted directly from JIRA for daily use by the development team, the need arose because JIRA does not clearly deliver some data related to project management, so this platform was created to support this analysis.
            </span>
            <span className="project-box-occup">
                Area of Expertise: <span>Project Management</span><span>KPIs</span><span>Web</span>
            </span>
            <span className="project-box-occup">
                Market Impact: <span>12 software developer teams in the company</span>
            </span>
        </div>;
        case ('project5-desc'): return <div>
            <span>
                Software for warehouse and supplier control.
            </span>
            <span className="project-box-occup">
                Area of Expertise: <span>Warehouse Management</span><span>Suppliers</span>
            </span>
            <span className="project-box-occup">
                Market Impact: <span>2 thousand clients in Brazil</span>
            </span>
        </div>;
        case ('project6-desc'): return <div>
            <span>
                Welcome adventurer, test your archer skill in this challenging game that will earn you hours of great fun! Hit all the targets, trigger the mechanisms and improve your bow skills in this fun time-lapse created especially for you.
            </span>
            <span className="project-box-occup">
                Area of Expertise: <span>Entertainment</span><span>Bow and Arrow</span><span>Mobile</span>
            </span>
            <span className="project-box-occup">
                Market Impact: <span>15 thousand downloads (Android)</span>
            </span>
        </div>;
        case ('project7-desc'): return <div>
            <span>
                Nautical Life is an Nautical Simulator game, where you can fish, buy yourself a Yacht and hire a bunch of fishing boats to build a fishing Tycoon around the world. Travel from the east to the west to fish more than 50 different fishes, including a Kraken!
            </span>
            <span className="project-box-occup">
                Area of Expertise: <span>Entertainment</span><span>Fishing</span><span>Tycoon</span><span>Yacht</span><span>Mobile</span>
            </span>
            <span className="project-box-occup">
                Market Impact: <span>2.2 millions downloads (Android + iOS)</span>
            </span>
        </div>;
        default: return '-';
    }
}

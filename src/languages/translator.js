export const translate = (id) => {
    let language = 'EN-US';
    switch (language) {
        case ('PT-BR'): return portuguese(id);
        case ('EN-US'): return english(id);
        default: return portuguese(id);
    }
}

const portuguese = (id) => {
    switch (id) {
        case ('menu-home'): return 'Home';
        case ('menu-about'): return 'Sobre';
        case ('menu-skills'): return 'Tecnologias';
        case ('menu-projects'): return 'Projetos';
        case ('menu-contact'): return 'Contato';
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
        case ('home-resume'): return 'Download Resume';
        case ('next-about'): return 'about me';
        default: return '-';
    }
}

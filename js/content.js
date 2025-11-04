const LOGOS = [
  { src: "assets/logos/cpp.webp", name: "C++" },
  { src: "assets/logos/csharp.png", name: "C#" },
  { src: "assets/logos/java.svg", name: "Java" },
  { src: "assets/logos/python.svg", name: "Python" },
  { src: "assets/logos/react.png", name: "React" },
  { src: "assets/logos/javascript.svg", name: "JavaScript" },
  { src: "assets/logos/html.svg", name: "HTML" },
  { src: "assets/logos/css.svg", name: "CSS" },
  { src: "assets/logos/sqlserver.png", name: "SQL Server" },
  { src: "assets/logos/postgresql.png", name: "PostgreSQL" },
  { src: "assets/logos/oracle.png", name: "Oracle Database" },
  { src: "assets/logos/mysql.svg", name: "MySQL" },
  { src: "assets/logos/linux.svg", name: "Linux" },
  { src: "assets/logos/windows.jpg", name: "Windows Server" },
  { src: "assets/logos/git.svg", name: "Git" },
  { src: "assets/logos/cisco.svg", name: "Cisco" },
  { src: "assets/logos/wireshark.svg", name: "Wireshark" },
  { src: "assets/logos/scrum.svg", name: "Scrum" },
  { src: "assets/logos/vscode.svg", name: "VS Code" }
];

const PROJECTS = [
  {
    id: "kiosk",
    image: "assets/projects/kiosk.png",
    category: "tech",
    title: {
      pt: "Sistema Browser Kiosk para Painéis de Informação de Voos",
      en: "Browser Kiosk System for Flight Information Displays"
    },
    summary: {
      pt: "Solução para Smart TVs que gere e carrega automaticamente as ligações dos sistemas de apresentação de voos, substituindo as Netboxes. Reduz os problemas causados por cortes e oscilações de energia e de rede, automatiza a recuperação e a configuração dos painéis e diminui a intervenção manual dos técnicos.",
      en: "A Smart TV solution that manages and automatically loads the links for flight information systems, replacing the Netboxes. It reduces problems caused by power and network outages, automates panel recovery and setup, and cuts down on manual work by technicians."
    },
    group: { pt: "Infra-estruturas & Sistemas", en: "Infrastructure & Systems" },
    tags: {
      pt: ["Smart TVs", "Modo Kiosk", "Redes", "Automação"],
      en: ["Smart TVs", "Kiosk mode", "Networks", "Automation"]
    }
  },
  {
    id: "wifi",
    image: "assets/projects/wifi.webp",
    category: "tech",
    title: {
      pt: "Detecção de Ataques em Redes Wi-Fi Públicas",
      en: "Attack Detection on Public Wi-Fi Networks"
    },
    summary: {
      pt: "Sistema de detecção de ataques em redes Wi-Fi públicas em cidades moçambicanas, com foco na segurança das redes sem fios. Apresentado como comunicação nas III Jornadas Científicas do ISUTC, em Maputo, a 11 de Setembro de 2025.",
      en: "A system for detecting attacks on public Wi-Fi networks in Mozambican cities, focused on wireless security. Presented at the 3rd ISUTC Scientific Conference in Maputo on 11 September 2025."
    },
    group: { pt: "Cibersegurança & Investigação", en: "Cybersecurity & Research" },
    tags: {
      pt: ["Segurança de redes", "Wi-Fi", "Detecção de intrusões"],
      en: ["Network security", "Wi-Fi", "Intrusion detection"]
    }
  },
  {
    id: "javafx",
    image: "assets/projects/javafx.webp",
    category: "tech",
    title: {
      pt: "Aplicações Desktop com JavaFX",
      en: "Desktop Applications with JavaFX"
    },
    summary: {
      pt: "Concepção e desenvolvimento de interfaces gráficas para aplicações desktop em Java com JavaFX, com foco na usabilidade e na organização clara da informação.",
      en: "Design and development of graphical interfaces for Java desktop applications with JavaFX, focused on usability and a clear organisation of information."
    },
    group: { pt: "Desenvolvimento de Software", en: "Software Development" },
    tags: { pt: ["JavaFX"], en: ["JavaFX"] }
  },
  {
    id: "facial",
    image: "assets/projects/facial.png",
    category: "tech",
    title: {
      pt: "Sistema de Controlo de Presenças baseado em Reconhecimento Facial",
      en: "Attendance System Based on Facial Recognition"
    },
    summary: {
      pt: "Desenvolvimento de um sistema inteligente de controlo de presenças de estudantes, com recurso à Inteligência Artificial, visão computacional e reconhecimento facial, aplicado ao caso de estudo do ISUTC. A solução automatiza a identificação dos estudantes e o registo da assiduidade, reduzindo a intervenção manual, os erros de registo e as possibilidades de fraude. Inclui o cálculo do tempo de permanência nas aulas e a integração com o Moodle, visando melhorar a eficiência, a fiabilidade e a transparência da gestão académica.",
      en: "An intelligent student attendance system using artificial intelligence, computer vision and facial recognition, applied to the ISUTC case study. It automates student identification and attendance records, reducing manual work, recording errors and opportunities for fraud. It includes time-in-class calculation and Moodle integration, to improve the efficiency, reliability and transparency of academic management."
    },
    group: { pt: "Projecto Final do Curso", en: "Final Year Project" },
    tags: {
      pt: ["OpenCV", "YuNet", "SFace", "Django", "Moodle API", "CSS e JavaScript"],
      en: ["OpenCV", "YuNet", "SFace", "Django", "Moodle API", "CSS and JavaScript"]
    }
  },
  {
    id: "design",
    image: "assets/projects/design.webp",
    category: "digital",
    title: {
      pt: "Design Gráfico & Identidade Visual",
      en: "Graphic Design & Visual Identity"
    },
    summary: {
      pt: "Criação de peças gráficas, cartazes e materiais visuais com Adobe Photoshop, combinando comunicação clara com uma estética moderna.",
      en: "Graphic pieces, posters and visual materials created with Adobe Photoshop, combining clear communication with a modern aesthetic."
    },
    group: { pt: "Projectos digitais", en: "Digital projects" },
    tags: { pt: ["Photoshop", "Identidade visual"], en: ["Photoshop", "Visual identity"] }
  },
  {
    id: "video",
    image: "assets/projects/video.webp",
    category: "digital",
    title: {
      pt: "Edição de Vídeo & Motion Graphics",
      en: "Video Editing & Motion Graphics"
    },
    summary: {
      pt: "Edição, correcção de cor e pós-produção de vídeo com Premiere Pro, DaVinci Resolve e After Effects.",
      en: "Editing, colour correction and video post-production with Premiere Pro, DaVinci Resolve and After Effects."
    },
    group: { pt: "Projectos digitais", en: "Digital projects" },
    tags: { pt: ["Premiere Pro", "DaVinci Resolve", "After Effects"], en: ["Premiere Pro", "DaVinci Resolve", "After Effects"] }
  }
];

const CERTS = [
  {
    title: { pt: "Introduction to Cybersecurity", en: "Introduction to Cybersecurity" },
    meta: { pt: "Cisco Networking Academy · Out 2025", en: "Cisco Networking Academy · Oct 2025" },
    href: "https://www.credly.com/badges/ba5a09be-e0ee-4597-9a58-62a30debb1ba"
  },
  {
    title: { pt: "Introduction to Critical Infrastructure Protection", en: "Introduction to Critical Infrastructure Protection" },
    meta: { pt: "OPSWAT Academy · Jun 2026 · válido até Mai 2027", en: "OPSWAT Academy · Jun 2026 · valid until May 2027" },
    href: "https://learn.opswatacademy.com/certificate/uVZuNVdYSA"
  },
  {
    title: { pt: "Scrum Fundamentals Certified (SFC)", en: "Scrum Fundamentals Certified (SFC)" },
    meta: { pt: "SCRUMstudy · Abr 2026", en: "SCRUMstudy · Apr 2026" },
    href: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1158296"
  },
  {
    title: { pt: "Six Sigma Yellow Belt (SSYB)", en: "Six Sigma Yellow Belt (SSYB)" },
    meta: { pt: "6sigmastudy · Abr 2026", en: "6sigmastudy · Apr 2026" },
    href: "https://www.6sigmastudy.com/certification/verify?type=SSYB&number=1158309"
  },
  {
    title: { pt: "ReadyToWork", en: "ReadyToWork" },
    meta: { pt: "Absa Group · Nov 2023", en: "Absa Group · Nov 2023" }
  },
  {
    title: { pt: "Desenvolvimento Web", en: "Web Development" },
    meta: { pt: "MozDevz · Set 2023", en: "MozDevz · Sep 2023" }
  }
];

const ACHIEVEMENTS = [
  {
    title: {
      pt: "XVII Jornadas Científicas do Banco de Moçambique",
      en: "17th Scientific Conference of the Bank of Mozambique"
    },
    subtitle: {
      pt: "Investigação em Inteligência Artificial aplicada à segurança dos sistemas financeiros",
      en: "Research on artificial intelligence applied to the security of financial systems"
    },
    date: { pt: "16 de Junho de 2026", en: "16 June 2026" },
    place: { pt: "Banco de Moçambique", en: "Bank of Mozambique" },
    body: {
      pt: "Participação nas XVII Jornadas Científicas do Banco de Moçambique, realizadas em 16 de Junho de 2026, com o trabalho de investigação intitulado “Utilização da Inteligência Artificial para Automação e Análise de Vulnerabilidades em Sistemas Financeiros Legados”, desenvolvido em co-autoria com Grácio Lumbala Kabongo. O estudo explora a aplicação de técnicas de Inteligência Artificial na identificação, análise e priorização de vulnerabilidades em sistemas financeiros legados, contribuindo para o reforço da segurança e da resiliência tecnológica do sector financeiro.",
      en: "Participation in the 17th Scientific Conference of the Bank of Mozambique on 16 June 2026, with the research paper “Using Artificial Intelligence to Automate and Analyse Vulnerabilities in Legacy Financial Systems”, co-authored with Grácio Lumbala Kabongo. The study explores how artificial intelligence can identify, analyse and prioritise vulnerabilities in legacy financial systems, strengthening the security and technological resilience of the financial sector."
    },
    link: {
      pt: "Notícia do BM",
      en: "BM news",
      href: "https://www.bancomoc.mz/pt/media/noticias/riscos-e-oportunidades-da-inteligencia-artificial-discutidas-nas-xvii-jornadas-cientificas/"
    }
  },
  {
    title: {
      pt: "Participação nas III Jornadas Científicas do ISUTC",
      en: "Participation in the 3rd ISUTC Scientific Conference"
    },
    subtitle: {
      pt: "Sistema de detecção de ataques em redes Wi-Fi públicas em cidades moçambicanas",
      en: "Attack detection system for public Wi-Fi networks in Mozambican cities"
    },
    date: { pt: "11 Set 2025", en: "11 Sep 2025" },
    place: { pt: "ISUTC — Maputo", en: "ISUTC — Maputo" },
    body: {
      pt: "Apresentação de uma comunicação científica sobre a segurança das redes sem fios públicas e a detecção de ataques em cidades moçambicanas, com o apoio do Prof. Doutor Alberto J. Bié e do Prof. Doutor Eng. Fernando Leite.",
      en: "Presentation of a scientific paper on the security of public wireless networks and attack detection in Mozambican cities, with the support of Prof. Dr Alberto J. Bié and Prof. Dr Eng. Fernando Leite."
    },
    link: {
      pt: "Notícia do ISUTC",
      en: "ISUTC news",
      href: "https://www.isutc.ac.mz/?p=11780"
    }
  },
  {
    title: {
      pt: "Formação em Desenvolvimento Web",
      en: "Web Development Training"
    },
    subtitle: {
      pt: "Formação em Desenvolvimento de Aplicações e Tecnologias Web",
      en: "Training in web application development and web technologies"
    },
    date: { pt: "Set 2023", en: "Sep 2023" },
    place: { pt: "MOZDEVZ - ISUTC", en: "MOZDEVZ - ISUTC" },
    body: {
      pt: "Formação prática em desenvolvimento web, com foco na criação de aplicações e interfaces web, utilizando tecnologias de desenvolvimento Front-end e Back-end, estruturação de páginas, estilização e programação.",
      en: "Practical training in web development, focused on building web applications and interfaces with front-end and back-end technologies, page structure, styling and programming."
    }
  }
];

const UI = {
  pt: {
    "meta.title": "Harmónico Augusto — Engenheiro e Cientista da Computação",
    "meta.projectsTitle": "Projectos Técnicos — Harmónico Augusto",
    "meta.description": "Portfólio de Harmónico Augusto, engenheiro e cientista da computação em Maputo. Cibersegurança, redes, infra-estruturas de TI e desenvolvimento de software.",
    "nav.projects": "Projectos",
    "nav.skills": "Competências",
    "nav.about": "Sobre",
    "nav.certs": "Certificações",
    "nav.path": "Percurso",
    "nav.hire": "Contrate-me",
    "nav.technical": "Técnicos",
    "nav.digital": "Digitais",
    "nav.menu": "Abrir menu",
    "nav.theme": "Alternar tema",
    "hero.scroll": "Deslize para baixo",
    "hero.name": "Harmónico Lucas — Engenheiro e cientista da computação",
    "projects.kicker": "Trabalho seleccionado",
    "projects.title": "Projectos",
    "projects.lead": "Uma selecção de sistemas, investigação e trabalho técnico que desenvolvi.",
    "projects.more": "Ver mais projectos",
    "projects.view": "Ver projecto",
    "skills.kicker": "As minhas capacidades",
    "skills.title": "O Que Sei Fazer",
    "skills.lead": "Combino competências em redes, infra-estruturas, cibersegurança e desenvolvimento de software para construir sistemas fiáveis, seguros e úteis.",
    "skills.one.num": "01",
    "skills.one.title": "Software, Dados & Inteligência Artificial",
    "skills.one.desc": "Desenvolvimento de software e aplicações, modelação de bases de dados e exploração de inteligência artificial, com gestão ágil e atenção à qualidade.",
    "skills.two.num": "02",
    "skills.two.title": "Redes, Infra-estruturas & Cibersegurança",
    "skills.two.desc": "Concepção, manutenção e protecção de redes e infra-estruturas de TI — da administração de sistemas à detecção de ameaças em redes sem fios e à protecção de infra-estruturas críticas.",
    "about.kicker": "Sobre mim",
    "about.title": "Engenheiro de Ciência da Computação.",
    "about.name": "Harmónico Augusto",
    "about.stat1": "Projectos",
    "about.stat2": "Certificações",
    "about.stat3": "Licenciatura ISUTC",
    "about.body": "Sou engenheiro e cientista da computação, formado em Engenharia e Ciência da Computação pelo ISUTC (2022–2026), em Maputo. Interesso-me por cibersegurança, inteligência artificial e desenvolvimento de software, com foco na utilização da tecnologia para resolver problemas reais. Nos Aeroportos de Moçambique, E.P., desenvolvo o Sistema Browser Kiosk para os painéis de informação de voos e, em 2025, apresentei nas III Jornadas Científicas do ISUTC uma comunicação sobre a detecção de ataques em redes Wi-Fi públicas em cidades moçambicanas. Tenho certificações em cibersegurança (Cisco), protecção de infra-estruturas críticas (OPSWAT), Scrum e Six Sigma, e experiência em design gráfico e edição de vídeo.",
    "about.now": "Actualmente",
    "about.now1l": "A desenvolver",
    "about.now1d": "Sistema Browser Kiosk",
    "about.now2l": "A explorar",
    "about.now2d": "Cibersegurança & IA",
    "about.now3l": "A aprender",
    "about.now3d": "Infra-estruturas críticas",
    "about.t1": "Focado em segurança",
    "about.t2": "Resolve problemas",
    "about.t3": "Curioso",
    "about.t4": "Criativo",
    "certs.kicker": "Credenciais",
    "certs.title": "Certificações e Cursos",
    "certs.lead": "Formações e certificações que validam as minhas competências técnicas e de gestão.",
    "experience.kicker": "Percurso profissional",
    "experience.title": "Experiência Profissional",
    "experience.lead": "Onde tenho aplicado as minhas competências em contexto real.",
    "experience.role": "Aeroportos de Moçambique, E.P.",
    "experience.when": "Actual",
    "experience.where": "Maputo, Moçambique",
    "experience.body": "Desenvolvimento do Sistema Browser Kiosk para os painéis de informação de voos: uma solução para Smart TVs que carrega automaticamente os sistemas de apresentação de voos, substitui as Netboxes, recupera automaticamente após falhas de energia ou de rede e reduz a intervenção manual dos técnicos.",
    "education.kicker": "Percurso académico",
    "education.title": "Formação Académica",
    "education.lead": "A formação que sustenta o meu trabalho técnico.",
    "education.degree": "Licenciatura em Engenharia e Ciência da Computação",
    "education.years": "2022 – 2026",
    "education.school": "ISUTC — Instituto Superior de Transportes e Comunicações",
    "education.body": "Formação em engenharia de computação com avaliação contínua, trabalhos práticos, projectos, participação nas Jornadas Científicas, cursos extracurriculares e grupos de estudo.",
    "achieve.kicker": "Reconhecimento",
    "achieve.title": "Conquistas e Actividades",
    "achieve.lead": "Comunicações, eventos e actividades académicas que marcam o meu percurso.",
    "contact.kicker": "Entre em contacto",
    "contact.l1": "Vamos",
    "contact.l2": "trabalhar",
    "contact.l3": "juntos",
    "contact.tag": "À procura do próximo problema que vale a pena resolver.",
    "contact.lead": "Estou disponível para oportunidades em cibersegurança, redes e infra-estruturas de TI, administração de sistemas e desenvolvimento de software.",
    "contact.email": "E-mail",
    "contact.phone": "Telefone",
    "contact.location": "Localização",
    "contact.city": "Maputo, Moçambique",
    "contact.cta": "Envie-me uma mensagem",
    "contact.formTitle": "Envie-me uma mensagem",
    "contact.name": "Nome",
    "contact.message": "Mensagem",
    "contact.send": "Abrir e-mail",
    "contact.cancel": "Cancelar",
    "contact.note": "A mensagem abre no seu programa de e-mail.",
    "footer.role": "Engenheiro e cientista da computação · Maputo, Moçambique",
    "footer.projects": "Projectos",
    "footer.contact": "Contacto",
    "footer.rights": "© 2026 Harmónico Augusto. Todos os direitos reservados.",
    "archive.kicker": "Arquivo",
    "archive.title": "Projectos Técnicos",
    "archive.lead": "Uma colecção completa do meu trabalho técnico, sistemas e investigação.",
    "digital.kicker": "Projectos digitais",
    "digital.title": "Para Além do Código",
    "digital.lead": "Projectos criativos, visuais e digitais desenvolvidos a par do meu trabalho técnico.",
    "cta.kicker": "Tem um projecto em mente?",
    "cta.title": "Vamos construir algo útil.",
    "coffee": "Paga-me um café",
    "skills.one.items": ["Desenvolvimento de software", "Java & JavaFX", "Desenvolvimento Web", "Bases de dados", "Inteligência Artificial", "Scrum", "Six Sigma", "Design gráfico", "Edição de vídeo"],
    "skills.two.items": ["Redes de computadores", "Infra-estruturas de TI", "Administração de sistemas", "Cibersegurança", "Segurança Wi-Fi", "Detecção de intrusões", "Infra-estruturas críticas", "Suporte técnico", "Linux", "Cisco", "Smart TVs & Kiosks", "Automação"]
  },
  en: {
    "meta.title": "Harmónico Augusto — Computer Engineer and Scientist",
    "meta.projectsTitle": "Technical Projects — Harmónico Augusto",
    "meta.description": "Portfolio of Harmónico Augusto, a computer engineer and scientist in Maputo. Cybersecurity, networks, IT infrastructure and software development.",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.certs": "Certifications",
    "nav.path": "Path",
    "nav.hire": "Hire me",
    "nav.technical": "Technical",
    "nav.digital": "Digital",
    "nav.menu": "Open menu",
    "nav.theme": "Toggle theme",
    "hero.scroll": "Scroll down",
    "hero.name": "Harmónico Lucas — Computer engineer and scientist",
    "projects.kicker": "Selected work",
    "projects.title": "Projects",
    "projects.lead": "A selection of systems, research and technical work I have built.",
    "projects.more": "See more projects",
    "projects.view": "View project",
    "skills.kicker": "What I can do",
    "skills.title": "What I Can Do",
    "skills.lead": "I combine networks, infrastructure, cybersecurity and software development to build systems that are reliable, secure and useful.",
    "skills.one.num": "01",
    "skills.one.title": "Software, Data & Artificial Intelligence",
    "skills.one.desc": "Software and application development, database modelling and exploration of artificial intelligence, with agile management and attention to quality.",
    "skills.two.num": "02",
    "skills.two.title": "Networks, Infrastructure & Cybersecurity",
    "skills.two.desc": "Design, maintenance and protection of networks and IT infrastructure — from systems administration to wireless threat detection and the protection of critical infrastructure.",
    "about.kicker": "About me",
    "about.title": "Computer Science Engineer.",
    "about.name": "Harmónico Augusto",
    "about.stat1": "Projects",
    "about.stat2": "Certifications",
    "about.stat3": "ISUTC degree",
    "about.body": "I am a computer engineer and scientist, trained in Computer Engineering and Science at ISUTC (2022–2026) in Maputo. I am interested in cybersecurity, artificial intelligence and software development, with a focus on using technology to solve real problems. At Aeroportos de Moçambique, E.P., I develop the Browser Kiosk System for flight information displays and, in 2025, I presented a paper at the 3rd ISUTC Scientific Conference on detecting attacks on public Wi-Fi networks in Mozambican cities. I hold certifications in cybersecurity (Cisco), critical infrastructure protection (OPSWAT), Scrum and Six Sigma, and I have experience in graphic design and video editing.",
    "about.now": "Currently",
    "about.now1l": "Building",
    "about.now1d": "Browser Kiosk System",
    "about.now2l": "Exploring",
    "about.now2d": "Cybersecurity & AI",
    "about.now3l": "Learning",
    "about.now3d": "Critical infrastructure",
    "about.t1": "Security-focused",
    "about.t2": "Problem solver",
    "about.t3": "Curious",
    "about.t4": "Creative",
    "certs.kicker": "Credentials",
    "certs.title": "Certifications and Courses",
    "certs.lead": "Training and certifications that validate my technical and management skills.",
    "experience.kicker": "Professional path",
    "experience.title": "Professional Experience",
    "experience.lead": "Where I have applied my skills in a real setting.",
    "experience.role": "Aeroportos de Moçambique, E.P.",
    "experience.when": "Present",
    "experience.where": "Maputo, Mozambique",
    "experience.body": "Development of the Browser Kiosk System for flight information displays: a Smart TV solution that automatically loads flight information systems, replaces the Netboxes, recovers automatically after power or network failures, and reduces manual work by technicians.",
    "education.kicker": "Academic path",
    "education.title": "Education",
    "education.lead": "The training that supports my technical work.",
    "education.degree": "Bachelor's Degree in Computer Engineering and Science",
    "education.years": "2022 – 2026",
    "education.school": "ISUTC — Instituto Superior de Transportes e Comunicações",
    "education.body": "A computer engineering degree with continuous assessment, practical work, projects, participation in scientific conferences, extracurricular courses and study groups.",
    "achieve.kicker": "Recognition",
    "achieve.title": "Achievements and Activities",
    "achieve.lead": "Papers, events and academic activities that mark my path.",
    "contact.kicker": "Get in touch",
    "contact.l1": "Let's",
    "contact.l2": "work",
    "contact.l3": "together",
    "contact.tag": "Looking for the next problem worth solving.",
    "contact.lead": "I am available for opportunities in cybersecurity, networks and IT infrastructure, systems administration and software development.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.city": "Maputo, Mozambique",
    "contact.cta": "Send me a message",
    "contact.formTitle": "Send me a message",
    "contact.name": "Name",
    "contact.message": "Message",
    "contact.send": "Open email",
    "contact.cancel": "Cancel",
    "contact.note": "The message opens in your email app.",
    "footer.role": "Computer engineer and scientist · Maputo, Mozambique",
    "footer.projects": "Projects",
    "footer.contact": "Contact",
    "footer.rights": "© 2026 Harmónico Augusto. All rights reserved.",
    "archive.kicker": "Archive",
    "archive.title": "Technical Projects",
    "archive.lead": "A complete collection of my technical work, systems and research.",
    "digital.kicker": "Digital projects",
    "digital.title": "Beyond the Code",
    "digital.lead": "Creative, visual and digital projects developed alongside my technical work.",
    "cta.kicker": "Have a project in mind?",
    "cta.title": "Let's build something useful.",
    "coffee": "Buy me a coffee",
    "skills.one.items": ["Software development", "Java & JavaFX", "Web development", "Databases", "Artificial intelligence", "Scrum", "Six Sigma", "Graphic design", "Video editing"],
    "skills.two.items": ["Computer networks", "IT infrastructure", "Systems administration", "Cybersecurity", "Wi-Fi security", "Intrusion detection", "Critical infrastructure", "Technical support", "Linux", "Cisco", "Smart TVs & Kiosks", "Automation"]
  }
};

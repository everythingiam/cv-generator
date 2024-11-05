import Image from '../assets/alina.png';

const autoData = {
  generalInfo: {
    name: 'Alina Mikhaylova',
    description:
      'Fullstack-developer from Saint-Petersburg with design passion',
    image: Image,
    contact: 't.me/a_li_nus',
  },
  education: {
    data: [
      {
        id: 'itmo',
        title: 'ITMO University',
        position: 'BAeng',
        start: '2021',
        end: '2025',
        description: 'Software engineering and computer technology',
      },
      {
        id: 'odin',
        title: 'The Odin Project',
        position: 'Course',
        start: '2023',
        end: '',
        description: 'Big web-development course',
      },
    ],
    labels: {
      count: 'Education ',
      sectionName: 'education',
      button: 'education',
      title: 'Name of the institution or course',
      position: 'Degree',
      start: 'Start year',
      end: 'End year',
      description: 'Description',
    },
  },
  experience: {
    data: [
      {
        id: 'm18boss',
        title: 'M18',
        position: 'Boss',
        start: 'sep 2024',
        end: 'now',
        description:
          'I run all the things: design · frontend · backend · project-managment',
      },
      {
        id: 'm18design',
        title: 'M18',
        position: 'Web-designer',
        start: 'jan 2024',
        end: 'jul 2024',
        description:
          'I designed components for major real estate developers websites · assisted with design concepts · drew apartment layouts · and had a lot of fun',
      },
      {
        id: 'optica',
        title: 'SRC of Lightguide Photonics',
        position: 'Technician',
        start: 'jul 2023',
        end: 'dec 2023',
        description:
          'Worked in the production of erbium fiber amplifiers · tested device components at different stages of production',
      },
    ],
    labels: {
      count: 'Work Experience ',
      sectionName: 'experience',
      button: 'experience',
      title: 'Company name',
      position: 'Position',
      start: 'Start date',
      end: 'End date',
      description: 'Description',
    },
  },
  achieves: {
    data: [
      {
        id: 'hack',
        title: 'Hackathon',
        position: '',
        start: '2024',
        end: '',
        description:
          'Made dashboard app with my team · won $1.000.000 · frontend on React',
      },
    ],
    labels: {
      ount: 'Achievement ',
      sectionName: 'achieves',
      button: 'achieve',
      title: 'Achievement name',
      start: 'Year of achievement',
      description: 'Description',
    },
  },
  projects: {
    data: [
      {
        id: 'material',
        title: 'Posters Marketplace',
        position: 'Fullstack',
        start: '',
        end: '',
        description:
          'UX/UI Design · frontend on React · database design · backend on Node.js',
        link: 'https://github.com/everythingiam/material',
      },
      {
        id: 'dany',
        title: 'Online web game «Dany»',
        position: 'Fullstack',
        start: '',
        end: '',
        description:
          'A lot of SQL · database design · UX/UI design · frontend on React · backend on PHP',
        link: 'https://gaga.ru/gaga/files/pdf/rules/ru/5252.pdf?clckid=c13f7084',
      },
      {
        id: 'java',
        title: 'Data Structures on Java',
        position: 'Labs',
        start: '',
        end: '',
        description:
          'abstract data types — lists and graphs: linked list · two-linked list · array · hash-set · stack · queue · map · trees',
        link: 'https://github.com/everythingiam/Data-Types-5',
      },
    ],
    labels: {
      count: 'Project ',
      sectionName: 'projects',
      button: 'project',
      title: 'Project name',
      position: 'Project field',
      start: 'Year of development',
      description: 'Description',
      link: 'Link',
    },
  },
  additionally: {
    data: [
      {
        id: 'skills',
        title: 'Skills',
        description:
          'JavaScript · TypeScript · React · Webpack · Vite · Node.js · Git · Semantic HTML · CSS · Java · SQL · Algorithms · Data Structures · Unity',
      },
    ],
    labels: {
      count: 'Addendum',
      sectionName: 'additionally',
      button: 'addendum',
      title: 'Addendum name',
      description: 'Сontent',
    },
  },
};

export default autoData;

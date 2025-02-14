import { HeaderLink } from '@/types/headerLink';

export const headerLinks: HeaderLink[] = [
  {
    name: 'Институт',
    submenu: [
      {
        subname: 'Об институте',
        subhref: '/about-institute',
      },
      {
        subname: 'Мы и Далянь',
        subhref: '/us-and-dalian',
      },
      {
        subname: 'РИКК',
        subhref: '/rikk',
      },
      {
        subname: 'Контакты',
        subhref: '/contacts',
      },
      {
        subname: 'Нормативные документы',
        subhref: '/docs',
      },
    ],
  },

  {
    name: 'Новости',
    href: '/news',
  },

  {
    name: 'Абитуриентам',
    submenu: [
      {
        subname: 'Специальности',
        subhref: '/specialities',
      },
      // {
      //   subname: 'Проходные баллы',
      //   subhref: '/passing-grades',
      // },
      {
        subname: 'План приёма',
        subhref: '/admission-plan',
      },
      {
        subname: 'Подача документов',
        subhref: '/filing-of-documents',
      },
    ],
  },

  {
    name: 'Студентам',
    submenu: [
      {
        subname: 'График учебного процесса',
        subhref: '/schedule',
      },
      {
        subname: 'Общежитие',
        subhref: '/dorm',
      },
    ],
  },
];

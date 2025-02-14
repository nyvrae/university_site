import mmfLogo from '@/../public/logos/mmfLogo.svg';
import physLogo from '@/../public/logos/physLogo.svg';
import fmoLogo from '@/../public/logos/fmoLogo.svg';

const dataSourcePhyzMath = [
  {
    key: '1',
    title: 'План приема',
    budget2022: '20',
    paid2022: '5',
    budget2023: '20',
    paid2023: '5',
    budget2024: '20',
    paid2024: '5',
  },
  {
    key: '2',
    title: 'Проходные баллы',
    budget2022: '303',
    paid2022: '257',
    budget2023: '325',
    paid2023: '254',
    budget2024: '343',
    paid2024: '287',
  },
];

const dataSource = [
  {
    key: '1',
    title: 'План приема',
    budget2022: '-',
    paid2022: '20',
    budget2023: '-',
    paid2023: '20',
    budget2024: '-',
    paid2024: '20',
  },
  {
    key: '2',
    title: 'Проходные баллы',
    budget2022: '-',
    paid2022: '264',
    budget2023: '-',
    paid2023: '301',
    budget2024: '-',
    paid2024: '334',
  },
];

export const columns = [
  {
    title: 'Форма обучения',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '2022',
    children: [
      {
        title: 'Бюджет',
        dataIndex: 'budget2022',
        key: 'budget2022',
        align: 'center',
      },
      {
        title: 'Платная',
        dataIndex: 'paid2022',
        key: 'paid2022',
        align: 'center',
      },
    ],
  },
  {
    title: '2023',
    children: [
      {
        title: 'Бюджет',
        dataIndex: 'budget2023',
        key: 'budget2023',
        align: 'center',
      },
      {
        title: 'Платная',
        dataIndex: 'paid2023',
        key: 'paid2023',
        align: 'center',
      },
    ],
  },
  {
    title: '2024',
    children: [
      {
        title: 'Бюджет',
        dataIndex: 'budget2024',
        key: 'budget2024',
        align: 'center',
      },
      {
        title: 'Платная',
        dataIndex: 'paid2024',
        key: 'paid2024',
        align: 'center',
      },
    ],
  },
];

export const specialities = [
  {
    id: 'phys',
    name: 'Прикладная физика',
    logo: physLogo,
    data: dataSourcePhyzMath,
  },
  {
    id: 'math',
    name: 'Механика и математическое моделирование',
    logo: mmfLogo,
    data: dataSourcePhyzMath,
  },
  {
    id: 'economy',
    name: 'Мировая экономика',
    logo: fmoLogo,
    data: dataSource,
  },
];

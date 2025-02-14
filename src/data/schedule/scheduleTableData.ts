import { DataSourceType } from '@/types/scheduleTypes';
import { ColumnsChildrenType } from '@/types/scheduleTypes';
import { ColumnsType } from '@/types/scheduleTypes';

const theoryDate = '01.09.2023 – 30.12.2023';
const examDate = '02.01.2024 – 20.01.2024';
const examDateMath = '03.01.2024 – 20.01.2024';
const holidaysDate = '22.01.2024 – 03.02.2024';
const practiceDate = '05.02.2024 – 30.03.2024';

export const dataSource: DataSourceType[] = [
  {
    key: '1',
    theory: theoryDate,
    exams: examDate,
    holidays: holidaysDate,
    practice: '-',
  },
  {
    key: '2',
    theory: theoryDate,
    exams: examDate,
    holidays: holidaysDate,
    practice: '-',
  },
  {
    key: '3',
    theory: theoryDate,
    exams: examDate,
    holidays: holidaysDate,
    practice: '-',
  },
  {
    key: '4',
    theory: theoryDate,
    exams: examDateMath,
    holidays: holidaysDate,
    practice: practiceDate,
  },
];

export const dataSourceMath = dataSource.map((obj) => {
  return {
    ...obj,
    exams: examDateMath,
  };
});

const columnsChildren: ColumnsChildrenType[] = [
  {
    title: 'Курс',
    dataIndex: 'key',
    rowScope: 'row',
    fixed: 'left',
    align: 'center',
  },
  {
    title: 'Теоретическое обучение',
    dataIndex: 'theory',
    key: 'theory',
    align: 'center',
  },
  {
    title: 'Экзаменационная сессия',
    dataIndex: 'exams',
    key: 'exams',
    align: 'center',
  },
  {
    title: 'Каникулы',
    dataIndex: 'holidays',
    key: 'holidays',
    align: 'center',
  },
  {
    title: 'Практика',
    dataIndex: 'practice',
    key: 'practice',
    align: 'center',
  },
];

export const columns: ColumnsType = {
  mmf: [
    {
      title: 'Механика и математическое моделирование',
      children: columnsChildren,
    },
  ],
  phys: [
    {
      title: 'Прикладная физика',
      children: columnsChildren,
    },
  ],
  fmo: [
    {
      title: 'Мировая экономика',
      children: columnsChildren,
    },
  ],
};

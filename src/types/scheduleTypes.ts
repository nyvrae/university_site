export type DataSourceType = {
  key: string;
  theory: string;
  exams: string;
  holidays: string;
  practice: string;
};

export type ColumnsChildrenType = {
  title: string;
  dataIndex: keyof DataSourceType;
  rowScope?: string;
  fixed?: 'left';
  key?: string;
  align?: string;
};

type FacultyType = {
  title: string;
  children: ColumnsChildrenType[];
};

export type ColumnsType = {
  [key: string]: FacultyType[];
};

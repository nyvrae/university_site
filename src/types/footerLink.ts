type Link = {
  name: string;
  href: string;
};

type Icon = {
  icon: string;
  href: string;
};

type FirstColumn = Link[];

type SecondColumn = {
  headline: string;
  links: Link[];
};

type ThirdColumn = {
  headline: string;
  p: string;
  // icons: Icon[];
  boldLinks?: (Link & { bold?: boolean })[];
};

export type FooterLink = {
  fCol: FirstColumn;
  sCol: SecondColumn;
  tCol: ThirdColumn;
};

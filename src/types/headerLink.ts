type SubmenuType = {
  subname: string;
  subhref: string;
  blank?: boolean;
};

export type HeaderLink = {
  name: string;
  href?: string;
  submenu?: SubmenuType[] | undefined;
};

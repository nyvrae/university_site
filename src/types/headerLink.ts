type SubmenuType = {
    subname: string;
    subhref: string;
}

export type HeaderLink = {
    name: string;
    href?: string;
    submenu?: SubmenuType[] | undefined;
}
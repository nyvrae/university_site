type ImageHeaderProps = {
    type: "image";
    headline: string;
    photo: string;
};

type NonImageHeaderProps = {
    type: "bg" | "none";
    headline?: string;
    photo?: string;
};

export type HeaderProps = ImageHeaderProps | NonImageHeaderProps;

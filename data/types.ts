type PublicationResource = {
    name: string;
    link: string;
}

export type Publication = {
    title: string;
    authors: string[];
    summary: string;
    publisher: string;
    year: string;
    resources: PublicationResource[];
    image: string;
}

export type News = {
    headline: string;
    month: string;
    year: string;
}
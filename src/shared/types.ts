export enum SelectedPage {
    Home = "home",
    Assets = "assets",
    OurSessions = "oursessions",
    Contact = "contact",
}

export interface AssetType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface SessionType {
    name: string;
    description?: string;
    image: string;
}
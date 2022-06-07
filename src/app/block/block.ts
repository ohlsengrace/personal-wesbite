import { Trait } from "../trait/trait";

export interface Block{
    category:number;
    title: string;
    titleLink:string;
    date: string;
    subtitle: string;
    bulletedInfo: string[];
    traits: Trait[];
}
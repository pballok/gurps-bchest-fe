import {Attribute} from "./attribute.ts";

export interface Character {
    name: string;
    player: string;
    campaign: string;
    availablePoints: number;
    st: Attribute;
    dx: Attribute;
    iq: Attribute;
    ht: Attribute;
    hp: Attribute;
    will: Attribute;
    per: Attribute;
    fp: Attribute;
}

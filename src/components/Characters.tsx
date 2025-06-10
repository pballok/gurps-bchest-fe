import CharacterRefCard from "./CharacterRefCard.tsx";

import {Character} from "../model/character.ts";

import {
    Grid,
} from "@mui/material";

interface ICharactersProps {
    campaign: string
}

// temporary hardcoded values until loading from BFF is implemented
const CharacterData : Character[] = [
    {
        name: "Ann",
        player: "Melinda",
        campaign: "Enemy Within",
        availablePoints: 120,
        st: {value: 11, cost: 10},
        dx: {value: 12, cost: 40},
        iq: {value: 11, cost: 20},
        ht: {value: 9, cost: -10},
        hp: {value: 11, cost: 0},
        will: {value: 11, cost: 0},
        per: {value: 11, cost: 0},
        fp: {value: 9, cost: 0},
    },
    {
        name: "Anomalia Inaris",
        player: "Adél",
        campaign: "Enemy Within",
        availablePoints: 120,
        st: {value: 9, cost: -10},
        dx: {value: 11, cost: 20},
        iq: {value: 12, cost: 40},
        ht: {value: 11, cost: 10},
        hp: {value: 9, cost: 0},
        will: {value: 12, cost: 0},
        per: {value: 12, cost: 0},
        fp: {value: 11, cost: 0},
    },
    {
        name: "River Brickfoot",
        player: "Ákos",
        campaign: "Enemy Within",
        availablePoints: 120,
        st: {value: 13, cost: 30},
        dx: {value: 11, cost: 20},
        iq: {value: 9, cost: -20},
        ht: {value: 12, cost: 20},
        hp: {value: 13, cost: 0},
        will: {value: 11, cost: 10},
        per: {value: 9, cost: 0},
        fp: {value: 12, cost: 0},
    },
    {
        name: "Tanis Bredenhaller",
        player: "Csabi",
        campaign: "Enemy Within",
        availablePoints: 120,
        st: {value: 10, cost: 0},
        dx: {value: 12, cost: 40},
        iq: {value: 11, cost: 20},
        ht: {value: 10, cost: 0},
        hp: {value: 10, cost: 0},
        will: {value: 11, cost: 0},
        per: {value: 11, cost: 0},
        fp: {value: 10, cost: 0},
    },
    {
        name: "Vanilia Kovats",
        player: "Zsuzsa",
        campaign: "Enemy Within",
        availablePoints: 120,
        st: {value: 9, cost: -10},
        dx: {value: 13, cost: 60},
        iq: {value: 10, cost: 0},
        ht: {value: 10, cost: 0},
        hp: {value: 9, cost: 0},
        will: {value: 10, cost: 0},
        per: {value: 11, cost: 5},
        fp: {value: 10, cost: 0},
    },
];

function Characters({ campaign } : ICharactersProps) {
    return (
        <>
            <h1>{campaign}</h1>
            <Grid container spacing={2}>
                {CharacterData.map((character) => (
                    <Grid size={{xs: 12, lg: 6}}>
                        <CharacterRefCard character={character} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Characters;

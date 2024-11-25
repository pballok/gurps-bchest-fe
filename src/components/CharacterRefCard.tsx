import {Character} from "../model/character.ts";

import {
    Card,
    CardContent,
    Typography,
} from "@mui/material";

interface ICharacterRefCardProps {
    character: Character
}

function CharacterRefCard({ character }: ICharacterRefCardProps) {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {character.name} ({character.player})
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CharacterRefCard;

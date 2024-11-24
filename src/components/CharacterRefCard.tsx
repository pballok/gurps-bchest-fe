import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import {Typography} from "@mui/material";

interface ICharacterRefCardProps {
    name: string;
    player: string;
}

function CharacterRefCard({ name, player }: ICharacterRefCardProps) {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name} ({player})
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CharacterRefCard;

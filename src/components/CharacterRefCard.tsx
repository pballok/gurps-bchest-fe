import {Character} from "../model/character.ts";

import {
    Card,
    CardActionArea,
    CardContent,
    Grid2,
    Paper,
    Table, TableCell,
    TableContainer,
    TableRow,
    Typography,
} from "@mui/material";

interface ICharacterRefCardProps {
    character: Character
}

function CharacterRefCard({ character }: ICharacterRefCardProps) {
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Grid2 container spacing={1}>
                        <Grid2 size={12}>
                            <Typography gutterBottom variant="h5" component="div">
                                {character.name} ({character.player})
                            </Typography>
                        </Grid2>
                        <Grid2 size={3}>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableRow>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 0px 6px 6px"}} align="center">ST</TableCell>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 8px 6px 0px"}}>{character.st.value}</TableCell>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 0px 6px 6px"}} align="center">HP</TableCell>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 6px 6px 0px"}}>{character.hp.value}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 0px 6px 6px"}} align="center">DX</TableCell>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 8px 6px 0px"}}>{character.dx.value}</TableCell>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 0px 6px 6px"}} align="center">Will</TableCell>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 6px 6px 0px"}}>{character.will.value}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 0px 6px 6px"}} align="center">IQ</TableCell>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 8px 6px 0px"}}>{character.iq.value}</TableCell>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 0px 6px 6px"}} align="center">Per</TableCell>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 6px 6px 0px"}}>{character.per.value}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 0px 6px 6px"}} align="center">HT</TableCell>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 8px 6px 0px"}}>{character.ht.value}</TableCell>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 0px 6px 6px"}} align="center">FP</TableCell>
                                        <TableCell size="small" sx={{borderBottom: "none", padding: "6px 6px 6px 0px"}}>{character.fp.value}</TableCell>
                                    </TableRow>
                                </Table>
                            </TableContainer>
                        </Grid2>
                        <Grid2 size={6}>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableRow>
                                        <TableCell size="small">
                                            <Typography variant="body2">
                                                Traits:
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell size="small">
                                            <Typography variant="body2">
                                                Skills & Spells:
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell size="small">
                                            <Typography variant="body2">
                                                Equipment:
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell size="small" sx={{borderBottom: "none"}}>
                                            <Typography variant="body2">
                                                Attacks:
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </Table>
                            </TableContainer>
                        </Grid2>
                        <Grid2 size={3}>
                            Avatar
                        </Grid2>
                    </Grid2>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CharacterRefCard;

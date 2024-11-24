import CharacterRefCard from "./CharacterRefCard.tsx";

interface ICharactersProps {
    campaign: string
}

function Characters({ campaign } : ICharactersProps) {
    return (
        <div>
            <h1>{campaign}</h1>
            <CharacterRefCard name="Ann" player="Melinda" />
            <CharacterRefCard name="Anomalia Inaris" player="Adél" />
            <CharacterRefCard name="River Brickfoot" player="Ákos" />
            <CharacterRefCard name="Tanis Bredenhaller" player="Csabi" />
            <CharacterRefCard name="Vanilia Kovats" player="Zsuzsa" />
        </div>
    )
}

export default Characters;

interface ICharactersProps {
    campaign: string
}

function Characters({ campaign } : ICharactersProps) {
    return (
        <h1>{campaign}</h1>
    )
}

export default Characters;

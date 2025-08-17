function CharacterCard({ character }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
      <img src={character.image} alt={character.name} width="100%" />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
}

export default CharacterCard;
    
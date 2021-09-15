export const fetchCharacters = async () => {
  // eslint-disable-next-line max-len
  const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters'); 
  const [character] = await res.json();

  return {
    name: character.name,
    image: character.photoUrl,
    affiliation: character.affiliation,
    id: character.id,
  };
};

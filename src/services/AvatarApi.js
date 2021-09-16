export const fetchAvatarApi = () => {
  // eslint-disable-next-line max-len
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then((res) => res.json())
    .then((json) => 
      json.map((character) => ({
        name: character.name,
        image: character.photoUrl,
        affiliation: character.affiliation,
        id: character.id,
      }))
    );
};



export const fetchCharacters = (id) => {
  // eslint-disable-next-line max-len
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then((res) => res.json())
    .then((json) => 
      json.map((character) => ({
        name: character.name,
        image: character.photoUrl,
        affiliation: character.affiliation,
        id: character.id,
      }))
    );
};

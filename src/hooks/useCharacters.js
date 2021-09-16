import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacters } from '../services/AvatarApi';

export const useCharacters = () => {
    const { name, image, affiliation, id } = useParams();
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCharacters(name, image, affiliation, id)
            .then(() => {})
    })
}

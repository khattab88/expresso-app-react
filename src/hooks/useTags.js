import { useState, useEffect } from 'react';

import tagApi from '../api/TagApi';

const useTags = () => {
    const [tags, setTags] = useState([]);

    useEffect(async () => {
        const tagsResponse = await tagApi.getTags();

        if(!tagsResponse.err) {
            setTags(tagsResponse.data);
        }
        
    }, []);

    return [tags];
};

export default useTags;


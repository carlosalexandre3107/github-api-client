import api from '../api';

const loadRepositoriesByLanguage = async (language) => {
    const response = await api.get(`/search/repositories?q=${language}
    &sort=stars&order=desc&per_page=15`)

    return response;
}

export default {
    loadRepositoriesByLanguage
}
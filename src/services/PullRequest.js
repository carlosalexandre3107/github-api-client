import api from '../api';

const loadPullRequestsByRepository = async (owner, repositoryName) => {
    return await api.get(`/repos/${owner}/${repositoryName}/pulls?state=all&per_page=15`)
}

const loadPullRequestDetailsByRepository = async (owner, repositoryName, pullRequestNumber) => {
    return await api.get(`/repos/${owner}/${repositoryName}/pulls/${pullRequestNumber}?state=all`)
}

export default {
    loadPullRequestsByRepository,
    loadPullRequestDetailsByRepository
}
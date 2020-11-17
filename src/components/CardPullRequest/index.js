import React from 'react';

import './styles.css';

export default function CardPullRequest(props) {
  const { user, title, body, created_at, base, number } = props.data;

  const goToPullRequestDetailsPage = (login, repositoryName, pullRequestNumber) => {
    props.navigation.push(`/pull-requests-details/${login}/${repositoryName}/${pullRequestNumber}`);
  }
  
  return (
    <div className="pull-request-card-container" onClick={() => goToPullRequestDetailsPage(base.repo.owner.login, base.repo.name, number)}>
        <img className="pull-request-card-avatar" src={user.avatar_url} width="76px" height="76px" alt="Imagem do usuário" />
        <div className="pull-request-card-container-data">
            <span className="pull-request-card-author-name">{user.login}</span>
            <span className="pull-request-card-title">{title}</span>
            <span className="pull-request-card-description">{body}</span>
            <span className="pull-request-card-create-at">{new Date(created_at).toLocaleString('pt-BR')}</span>
        </div>
    </div>
  );
}

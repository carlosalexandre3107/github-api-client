import React from 'react';

import './styles.css';

import iconStar from '../../assets/icon-star.svg';
import iconFork from '../../assets/icon-fork.svg';
import iconWaning from '../../assets/icon-warning.svg';

export default function CardRepository(props) {
  const { owner, name, description, stargazers_count, forks_count, open_issues_count } = props.data;

  const goToPullRequestPage = (login, repositoryName) => {
      props.navigation.push(`/pull-requests/${login}/${repositoryName}`);
  }

  return (
    <div className="repository-card-container" onClick={() => goToPullRequestPage(owner.login, name)}>
        <img className="repository-card-avatar" src={owner.avatar_url} width="76px" height="76px" alt="Imagem do usuário"/>
        <div className="repository-card-container-data">
            <span className="repository-card-name">{name}</span>
            <span className="repository-card-owner-name">
              {owner.login}
            </span>
            <span className="repository-card-description">{description}</span>
            <div className="repository-card-container-values">
              <img src={iconStar} alt="icon star" width="24px" height="24px" />
              <span className="repository-card-number">{stargazers_count}</span>
              <img 
                src={iconFork} 
                alt="icon fork" 
                width="24px" 
                height="24px"
              />
              <span className="repository-card-number">{forks_count}</span>
              <img src={iconWaning} alt="icon waning" width="24px" height="24px" />
              <span className="repository-card-number">{open_issues_count}</span>
            </div>
        </div>
    </div>
  );
}

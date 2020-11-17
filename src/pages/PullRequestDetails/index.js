import React, { Component } from 'react';

import './styles.css';

import PullRequestService from '../../services/PullRequest';

import Loading from '../../components/Loading';
import BackLink from '../../components/BackLink';

export default class PullRequestDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { pullRequestDetails: undefined };
  }

  async componentDidMount() {
    const { owner, repositoryName, pullRequestNumber } = this.props.match.params;

    const response = await PullRequestService.loadPullRequestDetailsByRepository(owner, repositoryName, pullRequestNumber);

    this.setState({
      pullRequestDetails: response.data
    });
  }

  render() {
    const { owner, repositoryName } = this.props.match.params;
    const { pullRequestDetails } = this.state;

    if (pullRequestDetails) {
      return (
        <div className="pull-request-details">
          <BackLink title="Voltar para pull requests" routerName={`/pull-requests/${owner}/${repositoryName}`} />
          <div className="pull-request-details-container">
            <div className="pull-request-details-card">
              <img className="pull-request-details-card-avatar" src={pullRequestDetails.user.avatar_url} width="96px" height="96px" alt="Imagem do usuário" />
              <span className="pull-request-details-card-author-name">{pullRequestDetails.user.login}</span>
              <span className="pull-request-details-card-title">{pullRequestDetails.title}</span>
              <span className="pull-request-details-card-description">{pullRequestDetails.body}</span>
              <span className="pull-request-details-card-values">{new Date(pullRequestDetails.created_at).toLocaleString('pt-BR')}</span>
              <span className="pull-request-details-card-values">Comments: {pullRequestDetails.comments}</span>
              <span className="pull-request-details-card-values">Commits: {pullRequestDetails.commits}</span>
              <span className="pull-request-details-card-values">Additions: {pullRequestDetails.additions}</span>
              <span className="pull-request-details-card-values">Deletions: {pullRequestDetails.deletions}</span>
              <span className="pull-request-details-card-values">Changed Files: {pullRequestDetails.changed_files}</span>
            </div>
          </div>
        </div>
      );
    }

    return <Loading />
  }
}

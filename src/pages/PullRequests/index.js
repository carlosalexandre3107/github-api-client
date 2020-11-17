import React, { Component } from 'react';

import PullRequestService from '../../services/PullRequest';

import Loading from '../../components/Loading';
import CardPullRequest from '../../components/CardPullRequest';
import BackLink from '../../components/BackLink';

import'./styles.css';

export default class PullRequest extends Component {
  constructor(props) {
    super(props);
    this.state = { pullRequests: undefined };
  }

  async componentDidMount() {
    const { owner, repositoryName } = this.props.match.params;

    const response = await PullRequestService.loadPullRequestsByRepository(owner, repositoryName);

    this.setState({
      pullRequests: response.data
    });
  }

  render() {
    const { pullRequests } = this.state;
    const { history } = this.props;

    if (pullRequests) {
      return (
        <div className="pull-request-container">
          <BackLink title="Voltar para repositórios" routerName="/" />
          <div className="pull-request-container-list">
            {pullRequests.map(pullRequest => <CardPullRequest data={pullRequest} key={pullRequest.id} navigation={history} />)}
          </div>
        </div>
      );
    }
    
    return <Loading />
  }
}

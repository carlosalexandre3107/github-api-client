import React, { Component } from 'react';

import './styles.css';

import RepositoryService from '../../services/Repository';

import Loading from '../../components/Loading';
import CardRepository from '../../components/CardRepository';

export default class Repositories extends Component {
  constructor(props) {
    super(props);
    this.state = { repositories: undefined };
  }

  async componentDidMount() {
    const response = await RepositoryService.loadRepositoriesByLanguage('reactnative');

    this.setState({
      repositories: response.data.items
    });
  }

  render() {
    const { repositories } = this.state;
    const { history } = this.props;

    if (repositories) {
      return (
          <div className="repository-container">
            {repositories.map(repository => <CardRepository data={repository} key={repository.id} navigation={history} />)}        
          </div>
      );
    }

    return <Loading />
  }
}

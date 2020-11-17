import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import RepositoriesPage from './pages/Repositories';
import PullRequestsPage from './pages/PullRequests';
import PullRequestDetailsPage from './pages/PullRequestDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={RepositoriesPage} />            
      <Route path="/pull-requests/:owner/:repositoryName" component={PullRequestsPage} />
      <Route path="/pull-requests-details/:owner/:repositoryName/:pullRequestNumber" component={PullRequestDetailsPage} />
    </BrowserRouter>
  )
}
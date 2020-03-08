import React from 'react';

const RepoListEntry = props => (
    <div>
      <h4>{props.repo.username}</h4>
      <div>{props.repo.repoURL}</div>
    </div>
)


export default RepoListEntry;
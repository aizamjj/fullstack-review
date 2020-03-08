import React from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.getTopRepos = this.getTopRepos.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.getTopRepos();
  }

  getTopRepos () {
    console.log('getting')
    ajax({
      method: 'GET',
      url: '/repos',
      success: repos => {
        this.setState ({
        repos
      })
    },
      error: e => console.log(e)
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    ajax({
      method: 'POST',
      url: '/repos',
      data: {term},
      success: () => {
        this.getTopRepos()
      },
      error: e => console.log(e)
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
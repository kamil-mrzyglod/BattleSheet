import Main from './main';

// AXIOS configuration
axios.defaults.baseURL = 'http://localhost:7071/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );

// ================
import logo from '../../assets/images/logo-github.png';
import Searchbar from '../Searchbar/Searchbar'
import Message from '../Message/Message'
import Result from '../Result/Result'
import { useState, useEffect } from 'react';

import './App.scss';

function App() {

  const [repoName, setRepoName] = useState('');
  const [apiData, setApiData] = useState({ data: undefined });

  function handleInput(e) {
    const repoName = e.target.value;
    console.log(repoName)
    setRepoName(repoName.trim());
  }
  function handleKeyDown(e) {
    if (e.code === "Enter") {
      const repoName = e.target.value;
      setRepoName(repoName.trim());
    }
  }

  useEffect(() => {
    setApiData({ data: undefined })
    fetch(`https://api.github.com/search/repositories?q=repoName=${repoName}`)
      .then(res => {
        // console.log(res);
        return res.json()
      })
      .then(data => {
        // console.log(data.items);
        setApiData(data.items)
      })
  }, [])


  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="logo" alt="logo GitHub" />
      </header>
      <Searchbar onChange={handleInput} onKeyDown={handleKeyDown} repoName={repoName} />
      <Message />
      {apiData ? <Result data={apiData} /> : <div>...loading</div>}
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import Home from './components/Home';

function App() {
  const githubapi = "https://api.github.com/users/sharmajyotirmay"
  const [userData, setUserdata] = useState({});


  const getgithubAPI = async () => {
    const response = await fetch(githubapi);
    const jsondata = await response.json();
    setUserdata(jsondata);
  }

  
  useEffect(() =>{
    getgithubAPI();;
  },[])

  return (
    <div className="App">
      <Home name = {userData.name} bio = {userData.bio} avatar = {userData.avatar_url} followers = {userData.followers} following = {userData.followers}/>
    </div>
  );
}

export default App;

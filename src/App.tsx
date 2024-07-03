import './App.css'
import axios from 'axios'
import { useState } from 'react'

type GITHUBResponse = {
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: string;
};


function App() {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("aguardando...");
  const [bio, setBio] = useState("Aguardando...");
  const [avatarURL, setAvatarURL] = useState("Aguardando...");
  const [public_reposURL, setfollowers] = useState("Aguardando...");

  const handleSearch = () => {
    axios.get<GITHUBResponse>(`https://api.github.com/users/${search}`)
      .then((res) => {
        setName(res.data.name);
        setBio(res.data.bio);
        setAvatarURL(res.data.avatar_url);
        setfollowers(res.data.public_repos);


      });
  };

  return (

    <div className="container-app">
      <div className="container">
        <header className='header-top'>
          <ul>
            <li>APLICAÇÃO GITHUB</li>
          </ul>
        </header>

        <main>
          <div className="form">
            <h1>Digite o usuario</h1>
            <input
              type="text"
              placeholder="Digite um usuario"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
          </div>
          <div className="content">
            <div>
              <img src={avatarURL} alt="Perfil" />
              <h1>{name}</h1>
              <p>{bio}</p>
              <p>{'Repositórios: ' + public_reposURL}</p>
            </div>
          </div>
        </main>
      </div>
    </div>




  )
}

export default App;

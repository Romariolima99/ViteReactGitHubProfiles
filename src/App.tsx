import './App.css'
import axios from 'axios'
import {useState} from 'react'

type GITHUBResponse = {
name: string;
bio: string;
avatar_url: string;
blog: string;
};


function App() {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("aguardando...");
  const [bio, setBio] = useState("Aguardando...");
  const [avatarURL, setAvatarURL] = useState("Aguardando...");
  const [blog, setblog] = useState("Aguardando...");
 
   const handleSearch = () => {
   axios.get<GITHUBResponse>(`https://api.github.com/users/${search}`)
   .then((res) => {
    setName(res.data.name);
    setBio(res.data.bio);
    setAvatarURL(res.data.avatar_url);
    setblog(res.data.blog);

    
  });
};

  return (
  
    <div className="container-app">
     <div className="container">
      <header className='header-top'>
        <ul>
          <li>Aplicação Github</li>
        </ul>
      </header>

       <main>
        <div className="form">
          <h1>Digite o nome do Perfil</h1>
          <input 
           type="text" 
           placeholder="Digite um usuario"
           onChange={(e) => setSearch(e.target.value)}
           />
          <button onClick={handleSearch}>Buscar</button>
          </div>
          <div className="content">
           <div>
          <img src={avatarURL} alt="Perfil"/>
          <h1>{name}</h1>
          <p>{bio}</p>
          <p>{'linkedin = '+ blog}</p>
        </div>
       </div>
      </main>
     </div>
    </div>



     
  )
}

export default App;

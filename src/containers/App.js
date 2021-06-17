import React from 'react';

import Album from '../components/Album';

import { albumes } from '../utils/mocks/albumes';

// Componente de tipo función STATEFUL
function App() {
  //console.log(albumes);
  return (
    <div className="App">
      {
        albumes.map( (album, index) => {
            return (
              <Album
                key = {`${album.titulo}-${index}` } 
                informacion = {album} 
              />
            )
        })
      }
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Character from "./Character";
function NavPage(props) {
  console.log('functions=>>',props)
  return (
    <header className="d-flex justify-content-between align-item-center">
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page-1)}
        disabled={props.page ===1}
      >
        Page {props.page-1}
      </button>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page + 1)}
        disabled= {props.page === 42}
      >
        Page {props.page}
      </button>
    </header>
  );
}
function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page,setPage] = useState(1)
  useEffect(() => {
      async function dataCharacter() {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const data = await response.json();
        setLoading(false);
        setCharacters(data.results);
    }
    dataCharacter();

  }, [page]);
  return (
    <div className="container">
  <NavPage page={page} setPage={setPage}/>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
          <div className="row">
            {characters ? (
                characters.map((character) => {
              return (
                <div className="col-md-4" key={character.id}>
                  <Character character={character} />
                </div>
              );
                })
            )
              :
              (
                <div>End Data</div>
                
              )}
<NavPage page={null} setPage={setPage}/>
          </div>
        )
      }
        
    </div>
  );
}
export default CharacterList;

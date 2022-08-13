import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const [avatar, setAvtar] = useState();
  const [height, setHeight] = useState();

  const numberHandler = (event) => {
    setNum(event.target.value);
  };

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data.name);
      setMoves(res.data.moves.length);
      setName(res.data.name.toUpperCase());
      setAvtar(res.data.sprites.other.dream_world.front_default);
      setHeight(res.data.height);
    }

    getData();
  });

  return (
    <>
      <div className="main-div">
        <div className="fir-child">
          <h1>
            You Choose <span style={{ color: "red" }}> {num} </span>value
          </h1>
          <h1>
            My name is <span style={{ color: "red" }}> {name} </span>value
          </h1>
          <h1>
            This pokemon have <span style={{ color: "red" }}> {moves}</span>{" "}
            moves
          </h1>
          <h1>
            This pokemon have <span style={{ color: "red" }}> </span> moves
          </h1>
        </div>

        <div className="child-div">
          <h1>
            THis pokemon has hight of
            <span style={{ color: "red" }}> {height} </span>
          </h1>

          <img
            style={{ width: "200px", height: "400px" }}
            src={avatar}
            alt=""
          />
        </div>
      </div>

      <select value={num} onChange={numberHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="18">18</option>
        <option value="25">25</option>
      </select>
    </>
  );
}

export default App;

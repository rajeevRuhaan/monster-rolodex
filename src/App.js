import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    console.log("2");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { onSearchChange } = this;
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        {
          <input
            className="search-box"
            type="search"
            placeholder="search monsters"
            onChange={onSearchChange}
          />
        }
        {/*  {filteredMonsters.map((monster) => {
          return (
            <div key={monster.name}>
              <p>{monster.name}</p>
            </div>
          );
        })} */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

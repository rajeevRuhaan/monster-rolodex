import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { getData } from "./utils/fetch.utils";

export type MonsterType = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<MonsterType[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("rendered");
  useEffect(() => {
      const fetchUsers = async()=> {
        const users= await getData<MonsterType[]>("https://jsonplaceholder.typicode.com/users");

        setMonsters(users)
      }
      fetchUsers();
  }, []);

  // this will only trigger when monster or searchfield changed the state
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="search-box"
        placeholder="Search monsters"
        onChangeHandler={onSearchChange}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

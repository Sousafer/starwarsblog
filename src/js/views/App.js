import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import Planets from "../component/Planets";
import People from "../component/People";
import Home from "../component/Home";
//why is this not importing????


function App() {
  const [People, setPeople] = useState([]);
  const [Planets, setPlanets] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/1/");
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/");
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }
    fetchPeople();
    fetchPlanets();
      }, []);
  return (
  <>
    <Router>
      <Navbar />
        <Container>
          {Loading? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ):(
            <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Route exact path="/people">
                <People data={People}/>
            </Route>
            <Route exact path="/planets">
               <Planets data={Planets}/>
            </Route>
          </Switch>
          )}
          
        </Container> 
      </Router>
	</>
  );
}

export default App;

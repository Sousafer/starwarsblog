import React { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Dimmer, Loader } from "react-router-dom";

import Home2 from "../Components/Home2";
import People from "../Components/People";
import Planets from "../Components/Planets";

import { Container } from "semantic-ui-react";


function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.co/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
    }

    async function fetchPlanets() {
      let res = await fetch("https://swapi.co/api/planets/?format=json");
      let data = await res.json();
      setPlanets(data.results);
    }
    fetchPeople();
    fetchPlanets();
    setLoading(false)
  }, []);
  return (
    <>
	<Router>
		<Navbar/>
      <Container> 
        {loading? (
          <Dimmer active inverted>
            <Loader inverted-loading></Loader>
          </Dimmer>
          ) : (
            <Switch>
              <Route exact path="/">
                <Home2/>
              <Route exact path="/people">
                <People data{people}/>
              </Route>
              <Route exact path="/Planets">
                <Planets data{planets}/>
              </Route>
            </Switch>
          )}
      </Container>
	</Router>
	</>
  );
}
export default App;

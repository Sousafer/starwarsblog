import React, { Component } from "react";
import { Card, Grid } from "react-router-dom";

export default function People({ data }) {
    return (
       <> 
           <h1>People</h1>
           <Grid columns={3}>
               {data.map((people, i) => {
                   return (
                        <Grid.Column key={ì}>
                            <Card>
                            <Card.Header>{people.name}</Card.Header>
                            <Card.Description>
                                <strong>Height</strong>
                                <p>{people.height}</p>
                                <strong>Mass</strong>
                                <p>{people.mass}</p>
                                <strong>Hair Color</strong>
                                <p>{people.hair_color}</p>
                            </Card.Description>
                            </Card.Content>
                            </Card>
                        </Grid.Column>
                   )
               })}
           </Grid>
       </>
    );
}
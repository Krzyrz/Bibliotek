import { Info } from "./komponenty/info"


const people = [{
  name:"Adamek",
  numer:12232312,
  city:"Gliwice"

},
{
  name:"Wojtek",
    numer:992331345,
    city:"Gliwice"
},
{
  name:"kacper",
    numer:232113345,
    city:"Rybnik"
},
]

function App() {

  return (
    <>
     <h1>Lista kontaktow</h1>
     {people.map((person) => (
    <Info 
    key={person.numer}
    name={person.name}
     numer={person.numer} 
     city={person.city}
     />
  ))}
    </>
  );
}

export default App

 import{Numer} from "./numer"
 
 export const Info = (props) =><>
  <h2>{props.name}</h2>
  <h3>numer: <Numer numer= {props.numer}/>
  </h3>
  <h4>miasto: {props.city}</h4>

  </>
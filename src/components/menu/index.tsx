import {Link} from "react-router-dom" 
import Megasena from "../../pages/Megasena";

export default function Menu() {
  return (
 <div>
    <Link to="/mega"> Megasena</Link>
    <Link to="/quina"> Quina</Link>
    <Link to="/loto"> Lotofacil</Link>
 </div>
  );
}

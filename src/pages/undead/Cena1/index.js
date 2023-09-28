import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Undead1() {
    return (
        <TelaBase img={pic}>           
            
            <BoxTexto>
                Você está na sua house e então  você vê uma pessoa meio estranha se aproximando.
            </BoxTexto>
            <Link to='/undead/2'>
                <BoxTexto>
                     1. Ajudá-lo.
                </BoxTexto>
            </Link>
            <Link to='/undead/3'>
                <BoxTexto>
                     2. ignorar.
                </BoxTexto>
            </Link>
        </TelaBase>
    )
}
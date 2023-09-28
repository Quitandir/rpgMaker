import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Matheus1() {
    return (
        <TelaBase img={pic}>           
            
            <BoxTexto>
                Matheus estava do:indo na sala de sua casa, e wake up com um barulho na kitchen. 
            </BoxTexto>
            <Link to='/matheus/2'>
                <BoxTexto>
                     1. Matheus resolve ir até a cozinha para ver o que havia acontecido. 
                </BoxTexto>
            </Link>
            <Link to='/matheus/3'>
                <BoxTexto>
                     2. Matheus resolve ir para o seu quarto com medo.
                </BoxTexto>
            </Link>
        </TelaBase>
    )
}
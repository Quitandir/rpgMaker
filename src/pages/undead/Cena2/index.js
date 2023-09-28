
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Undead2() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Ele RUN para cima de você  lhe atacando.
            </BoxTexto>
            
            <Link to='/undead/4'>
                <BoxTexto>
                     1. Tentar se defender.
                </BoxTexto>
            </Link>
            <Link to='/undead/4'>
                <BoxTexto>
                     2. Atacar de volta.
                </BoxTexto>
            </Link>
           
        </TelaBase>
    )
}
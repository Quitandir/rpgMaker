
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Undead5() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você só encontra um fork.

            </BoxTexto>
            <Link to='/undead/4'>
                <BoxTexto>
                    Você olha para trás e...
                </BoxTexto>
            </Link>
            
        </TelaBase>
    )
}
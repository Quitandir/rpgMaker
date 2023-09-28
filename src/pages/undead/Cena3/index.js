import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Undead3() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você escuta ele bater na porta YELLING.
            </BoxTexto>
            <Link to='/undead/4'>
                <BoxTexto>
                    Abrir a porta.
                </BoxTexto>
            </Link>
            <Link to='/undead/5'>
                <BoxTexto>
                    Pegar alguma arma.
                </BoxTexto>
            </Link>
           
        </TelaBase>
    )
}
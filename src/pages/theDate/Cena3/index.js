import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function TheDate3() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Pedimos a lasanha e ela ficou muito feliz, então decidi presenteá-la.
            </BoxTexto>
            <Link to='/theDate/6'>
                <BoxTexto>
                    1.Relógio de prata
                </BoxTexto>
            </Link>
            <Link to='/theDate/7'>
                <BoxTexto>
                    2. Colar de ouro.
                </BoxTexto>
            </Link>

        </TelaBase>
    )
}
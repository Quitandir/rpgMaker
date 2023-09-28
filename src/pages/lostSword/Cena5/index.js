import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function LostSword5() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Ele sente sua mente sendo tomada de pensamentos sombrios , mas consegue se controlar, Jhony obteve Tushita com Sucesso.
            </BoxTexto>
            <Link to='/lostSword/7'>
                <BoxTexto>
                    Entretanto...
                </BoxTexto>
            </Link>
            
        </TelaBase>
    )
}

import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function LastOfInstruments7() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
               Você vence e é jogado da HUT, 

            </BoxTexto>
            <Link to='/lastOfInstruments/8'>
                <BoxTexto>
                    e...
                </BoxTexto>
            </Link>

        </TelaBase>
    )
}
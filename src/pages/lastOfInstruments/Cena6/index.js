
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function LastOfInstruments6() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                A batalha dura horas!!!
            </BoxTexto>
            <Link to='/lastOfInstruments/7'>
                <BoxTexto>
                    E o público vai a loucura!!!
                </BoxTexto>
            </Link>


        </TelaBase>
    )
}
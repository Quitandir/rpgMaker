import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function LastOfInstruments5() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você sobe no palco...
            </BoxTexto>
            <Link to='/lastOfInstruments/6'>
                <BoxTexto>
                    pega sua guitarra...
                </BoxTexto>
            </Link>
            
        </TelaBase>
    )
}
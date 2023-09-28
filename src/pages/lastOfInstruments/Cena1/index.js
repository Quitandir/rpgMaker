import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function LastOfInstruments1() {
    return (
        <TelaBase img={pic}>           
            
            <BoxTexto>
                Você está caminhando na forest.
            </BoxTexto>
            <Link to='/lastOfInstruments/2'>
                <BoxTexto>
                    Seguir seu caminho.
                </BoxTexto>
            </Link>
           
        </TelaBase>
    )
}
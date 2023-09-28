import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.jpg';

export default function Cena5() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você usou o kit médico e melhorou dos seus ferimentos,aproveitando isso você saiu do prédio em que você estava...
            </BoxTexto>
            <Link to='/apocalipseCity/6'>
                <BoxTexto>
                    Continua...
                </BoxTexto>
            </Link>
            
        </TelaBase>
    )
}
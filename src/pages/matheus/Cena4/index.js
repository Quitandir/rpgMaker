
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Matheus4() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Matheus se depara com uma hut abandonada na forest.           
            </BoxTexto>
            <Link to='/matheus/5'>
                <BoxTexto>
                    1. Matheus entra na cabana.
                </BoxTexto>
            </Link>
            <Link to='/matheus/6'>
                <BoxTexto>
                    2. Matheus segue em frente com medo.
                </BoxTexto>
            </Link>
        </TelaBase>
    )
}
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Matheus3() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Matheus se depara com o seu room todo messy.             
            </BoxTexto>
            <Link to='/matheus/7'>
                <BoxTexto>
                    Matheus se enrola nas cobertas e dorme.
                </BoxTexto>
            </Link>
           
        </TelaBase>
    )
}
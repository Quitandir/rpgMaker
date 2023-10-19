
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Hospital2() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Sai do carro para procurar ajuda, eu estava andando pela floresta quando de repente tropecei em uma pedra. E logo depois ouvi um barulho saindo do hospital que tinha ali perto. 

            </BoxTexto>
            <Link to='/hospital/4'>
                <BoxTexto>
                     1. Investigar o hospital.
                </BoxTexto>
            </Link>
           
        </TelaBase>
    )
}
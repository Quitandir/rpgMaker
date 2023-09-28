import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.jpg';

export default function Cena6() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                 Você encontra um homem chamado Jaff ele te pergunta se você está interessado em pegar uns suprimentos dele,porém você não acha uma boa ideia O QUE VOCÊ FAZ???            
            </BoxTexto>
            <Link to='/apocalipseCity/7'>
                <BoxTexto>
                    1. Fugir do Jaff, com o carro dele.
                </BoxTexto>
            </Link>
            <Link to='/apocalipseCity/8'>
                <BoxTexto>
                    2.Aceitar a oferta do Jaff.
                </BoxTexto>
            </Link>
            
        </TelaBase>
    )
}
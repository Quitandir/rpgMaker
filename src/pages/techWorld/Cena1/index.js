import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function TechWorld1() {
    return (
        <TelaBase img={pic}>           
            
            <BoxTexto>
                Você está em uma rua Tecnológica, Quando robôs estão dominando o Mundo! Você precisa de Abrigo e Alimento mas tem muito pouco tempo. O que você vai fazer?! 
            </BoxTexto>
            <Link to='/techWorld/2'>
                <BoxTexto>
                     1.  Pegar Alimento. 
                </BoxTexto>
            </Link>
            <Link to='/techWorld/3'>
                <BoxTexto>
                     2. Correr para um lugar seguro.
                </BoxTexto>
            </Link>
        </TelaBase>
    )
}
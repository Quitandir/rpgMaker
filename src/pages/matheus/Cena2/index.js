
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Matheus2() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Matheus se depara com um werewolf comendo meat em frente a sua geladeira. 
            </BoxTexto>
            <Link to='/matheus/4'>
                <BoxTexto>
                     1. Matheus assustado sai correndo pela floresta a noite. 
                </BoxTexto>
            </Link>
           
           
        </TelaBase>
    )
}
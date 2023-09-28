import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function theDate1() {
    return (
        <TelaBase img={pic}>           
            
            <BoxTexto>
                Eu estava sozinho há muito tempo, até que um dos meus amigos me falou sobre um site de relacionamento, depois de muita procura encontrei alguém igual a mim e logo marcamos um encontro, chegando no restaurante, lá estava ela. Ela tinha cabelos brancos e aqueles lindos olhos azuis. Chamamos e pedimos o cardápio para o garçom. Pedi...

            </BoxTexto>
            <Link to='/theDate/2'>
                <BoxTexto>
                     1. Sopa da casa.
                </BoxTexto>
            </Link>
            <Link to='/theDate/3'>
                <BoxTexto>
                     2. Lasanha da casa.
                </BoxTexto>
            </Link>
        </TelaBase>
    )
}
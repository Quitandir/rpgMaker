import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Strange11() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Você resolve seguir o caminho, no entanto, você olha pra trás e vê uma sombra de capuz e uma cara de caveira e ela começa a correr na sua direção, você começa a correr dela e ela desiste no meio do caminho. Quando você chega no final,You find your friends having a normal camping trip, they don't seem to care that much about you, so you just sit on one of the logs and start eating marshmallow…

            </BoxTexto>
            <BoxTexto>
                NORMAL ENDING 1
                Você consegue achar a sua turma, mas você resolve não contar pra eles que você sumiu e que você foi perseguido por uma… “pessoa”

            </BoxTexto>
            <Link to='/strange/1'>
                <BoxTexto>
                    Jogar novamente
                </BoxTexto>
            </Link>

        </TelaBase>
    )
}
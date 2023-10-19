
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function Hospital4() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
            Eu decidi investigar o que era o barulho. Descobri que o barulho vinha do corredor do hospital. Esse corredor me dava calafrios, parecia um corredor de filme de terror . 
            Fui andando pelo corredor até achar um elevador, que parecia quebrado. Mas pensei que ele funcionava. Mas fiquei em dúvida, entre entrar no elevador ou ir caminhando até achar alguém. 
            </BoxTexto>
            <Link to='/hospital/5'>
                <BoxTexto>
                    1.  ir caminhando até achar alguém ou alguma coisa útil para consertar o carro.
                </BoxTexto>
            </Link>
            <Link to='/hospital/6'>
                <BoxTexto>
                    2. entrar no elevador e ir em cada andar, tentar achar algo útil.

                </BoxTexto>
            </Link>
        </TelaBase>
    )
}
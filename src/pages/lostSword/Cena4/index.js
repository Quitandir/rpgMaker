
import { Link } from "react-router-dom";
import BoxTexto from "../../../components/BoxTexto";
import TelaBase from "../../../components/TelaBase";
import pic from './pic.png';

export default function LostSword4() {
    return (
        <TelaBase img={pic}>

            <BoxTexto>
                Ele vê um aura saindo do arbustos ele vai checa, ali ele vê a lost sword, então ele pega a lost sword e ele sente energia amaldiçoada (por isso estava perdida no meio da forest).
            </BoxTexto>
            <Link to='/lostSword/5'>
                <BoxTexto>
                    1. Ele aceita a Tushita (espada).
                </BoxTexto>
            </Link>
            <Link to='/lostSword/6'>
                <BoxTexto>
                    2. Ele solta a espada por conta da força amaldiçocada.
                </BoxTexto>
            </Link>
        </TelaBase>
    )
}
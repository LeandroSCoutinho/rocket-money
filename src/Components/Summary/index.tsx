import { Container } from "./styles";
import iconInto from "../../assets/entrada.svg";
import iconOut from "../../assets/saida.svg";
import iconTotal from "../../assets/total.svg";

export function Summary(){
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconInto} alt="Entradas"/>
                </header>
                <strong>R$: 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={iconOut} alt="Saída"/>
                </header>
                <strong>- R$: 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={iconTotal} alt="Total"/>
                </header>
                <strong>R$: 500,00</strong>
            </div>
        </Container>
    );
}
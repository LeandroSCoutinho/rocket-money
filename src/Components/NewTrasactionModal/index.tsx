import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomImg from '../../assets/entrada.svg';
import outincomimg from '../../assets/saida.svg';
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { useState } from 'react';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTrasactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const [type, setType] = useState('deposit');
    return (

        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
       >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
            <img src={closeImg} alt="Fechar modal" />
        </button>
        <Container>
            <h1>Cadastrar transação</h1>

            <input
                type="text"
                placeholder='Título'
            />

            <input
                type="number"
                placeholder='Valor'
            />
            <TransactionTypeContainer>
                <RadioBox
                    type="button"
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor={'green'}
                >
                    <img src={incomImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox
                    type="button"
                    onClick={() => setType('withdraw')}
                    isActive={type === 'withdraw'}
                    activeColor={'red'}
                >
                    <img src={outincomimg} alt="Saída" />
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>
            <input
                type="text"
                placeholder='Categoria'
            />
            <button type="submit">Cadastrar</button>

        </Container>
       </Modal>
    )
}
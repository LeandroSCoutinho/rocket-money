import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomImg from '../../assets/entrada.svg';
import outincomimg from '../../assets/saida.svg';
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTrasactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [type, setType] = useState('deposit');
    const [category, setCategory] = useState('');

    function handleNewTrasactionModal(event: FormEvent){
        event.preventDefault();

        const data = {
            title,
            value,
            type,
            category
        };

        api.post('/transactions', data);
    }
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
        <Container onSubmit={handleNewTrasactionModal}>
            <h1>Cadastrar transação</h1>

            <input
                type="text"
                placeholder='Título'
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input
                type="number"
                placeholder='Valor'
                value={value}
                onChange={event => setValue(Number(event.target.value))}
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
                value={category}
                onChange={event => setCategory(event.target.value)}
            />
            <button type="submit">Cadastrar</button>

        </Container>
       </Modal>
    )
}
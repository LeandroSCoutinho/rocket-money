import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import Modal from 'react-modal'

import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTrasactionModal } from "./Components/NewTrasactionModal";

Modal.setAppElement('#root');

function App() {
  const [isOpenNewTransactionModal, setIsOpenNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsOpenNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal(){
    setIsOpenNewTransactionModal(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard/>

      <NewTrasactionModal
        isOpen={isOpenNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </>
  );
}

export default App;

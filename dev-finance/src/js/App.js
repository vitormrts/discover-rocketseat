import { Modal } from './components/Modal.js';  
import { Form } from './components/Form.js';
import { Transaction } from  './components/Transaction.js';

import { LocalStorage } from '../data/LocalStorage.js';
import { DOM } from './dom/DOM.js';

document.getElementById('new-transaction').addEventListener('click', Modal.toggle)
document.getElementById('cancel-transaction').addEventListener('click', Modal.toggle)
document.getElementById('submit').addEventListener('click', Form.submit, true)

const App = {
    init() {
        Transaction.all.forEach((transaction) => DOM.addTransaction(transaction));
        DOM.updateBalance();
        LocalStorage.set(Transaction.all) 
    },

    reload() {
        DOM.clearTransactions();
        App.init();
    }
}

App.init()

export { App };



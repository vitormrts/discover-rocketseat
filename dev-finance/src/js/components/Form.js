import { FormatUtils } from '../utils/FormatUtils.js';
import { Transaction } from './Transaction.js';
import { Modal } from '../components/Modal.js';

const Form = {
    description: document.querySelector('#description'),
    amount: document.querySelector('#amount'),
    date: document.querySelector('#date'),

    getValues() {
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },

    formatValues() {
        let { description, amount, date } = Form.getValues();
        
        amount = FormatUtils.formatAmount(amount);
        date = FormatUtils.formatDate(date);

        return {
            description,
            amount,
            date
        }
    },

    validateFields () {
        const { description, amount, date } = Form.getValues();

        if (description.trim() === "" || amount.trim() === "" || date.trim() === "") {
            throw new Error("Por favor, preencha todos os campos.")
        }
    },

    clearFields() {
        Form.description.value = "";
        Form.amount.value = "";
        Form.date.value = "";
    },

    submit(event) {
        event.preventDefault() // nao envia os dados na URL

        try {
            // validacao dos campos
            Form.validateFields()

            // formatacao dos valores
            const transaction = Form.formatValues();

            console.log(transaction.amount)

            // adicionando transacao
            Transaction.add(transaction);

            // limpando campos
            Form.clearFields();

            // fechando modal
            Modal.toggle(); 
        } catch (error) {
            alert(error.message)
        }
    }
}

export { Form };
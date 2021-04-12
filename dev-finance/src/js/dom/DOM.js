import { Transaction } from '../components/Transaction.js';
import { FormatUtils } from '../utils/FormatUtils.js';

const DOM = {
    transactionsContainer: document.querySelector('.container__table-body'),

    addTransaction(transaction) {
        const tr = document.createElement('tr');
        tr.classList.add('container__table-row');

        tr.innerHTML = DOM.innerHTMLTransaction(transaction);
        
        DOM.transactionsContainer.appendChild(tr);
        console.log("id " + transaction.id)


        document.getElementById(`remove-transaction-${transaction.id}`).addEventListener('click', () => {
            Transaction.remove(transaction.id)
        })
    },

    innerHTMLTransaction(transaction) {
        const amountClass = transaction['amount'] > 0 ? 'income' : 'expense';

        const amount = FormatUtils.formatCurrency(transaction['amount'])

        const html = `
            <td class="container__table-data description">${transaction['description']}</td>
            <td class="container__table-data ${amountClass}">${amount}</td>
            <td class="container__table-data date">${transaction['date']}</td>
            <td class="container__table-data">
                <img id="remove-transaction-${transaction.id}" src="./src/images/minus.svg" alt="Delete transation">
            </td>
        `;

        return html;
    },

    updateBalance() {
        const totalCard = document.getElementById('total-card');
        totalCard.style.background = Transaction.total() >= 0 ? "#49AA26" : "#e92929";

        document.getElementById('income').innerHTML = FormatUtils.formatCurrency(Transaction.incomes());
        document.getElementById('expense').innerHTML = FormatUtils.formatCurrency(Transaction.expenses());
        document.getElementById('total').innerHTML = FormatUtils.formatCurrency(Transaction.total());
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = '';
    }
}

export { DOM }
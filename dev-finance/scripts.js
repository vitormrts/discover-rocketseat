const Modal = {
    toggle() {
        document.querySelector('.container__modal-overlay').classList.toggle('active');
    }
}

const Transaction = {
    all: [
        {
            id: 1,
            description: 'Luz',
            amount: -50000,
            date: '23/01/2021'
        },
        {
            id: 2,
            description: 'Website',
            amount: 500000,
            date: '25/01/2021'
        },
        {
            id: 3,
            description: 'Internet',
            amount: -20000,
            date: '20/01/2021'
        }
    ],

    add(transaction) {
        this.all.push(transaction);

        App.reload();
    },

    remove(id) {
        const index = this.all.findIndex(transaction => Number(transaction.id) == id);

        this.all.splice(index, 1);

        App.reload();
    },

    incomes() {
        let income = 0;

        this.all.forEach((transaction) => {
            if (transaction.amount > 0) {
                income += transaction.amount;
            }
        })

        return income;
    },

    expenses() {
        let expense = 0;

        this.all.forEach((transaction) => {
            if (transaction.amount < 0) {
                expense += transaction.amount;
            }
        })

        return expense;
    },

    total() {
        return this.incomes() + this.expenses();
    }
}

const Form = {
    description: document.querySelector('#description'),
    amount: document.querySelector('#amount'),
    date: document.querySelector('#date'),

    getValues() {
        return {
            description: this.description.value,
            amount: this.amount.value,
            date: this.date.value
        }
    },

    formatValues() {
        let { description, amount, date } = this.getValues();
        
        amount = Utils.formatAmount(amount);
        date = Utils.formatDate(date);

        return {
            description,
            amount,
            date
        }
    },

    validateFields () {
        const { description, amount, date } = this.getValues();

        if (description.trim() === "" || amount.trim() === "" || date.trim() === "") {
            throw new Error("Por favor, preencha todos os campos.")
        }
    },

    clearFields() {
        this.description.value = "";
        this.amount.value = "";
        this.date.value = "";
    },

    submit(event) {
        event.preventDefault() // nao envia os dados na URL

        try {
            // validacao dos campos
            this.validateFields();

            // formatacao dos valores
            const transaction = this.formatValues();

            console.log(transaction.amount)

            // adicionando transacao
            Transaction.add(transaction);

            // limpando campos
            this.clearFields();

            // fechando modal
            Modal.toggle(); 
        } catch (error) {
            alert(error.message)
        }
    }
}

const DOM = {
    transactionsContainer: document.querySelector('.container__table-body'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr');
        tr.classList.add('container__table-row');

        tr.innerHTML = this.innerHTMLTransaction(transaction);
        
        this.transactionsContainer.appendChild(tr);
    },

    innerHTMLTransaction(transaction) {
        const amountClass = transaction['amount'] > 0 ? 'income' : 'expense';

        const amount = Utils.formatCurrency(transaction['amount'])

        const html = `
            <td class="container__table-data description">${transaction['description']}</td>
            <td class="container__table-data ${amountClass}">${amount}</td>
            <td class="container__table-data date">${transaction['date']}</td>
            <td class="container__table-data">
                <img src="./assets/minus.svg" alt="Delete transation">
            </td>
        `;

        return html;
    },

    updateBalance() {
        document.getElementById('income').innerHTML = Utils.formatCurrency(Transaction.incomes());
        document.getElementById('expense').innerHTML = Utils.formatCurrency(Transaction.expenses());
        document.getElementById('total').innerHTML = Utils.formatCurrency(Transaction.total());
    },

    clearTransactions() {
        this.transactionsContainer.innerHTML = '';
    }
}

const Utils = {
    formatAmount(value) {
        value = Number(value.replace(/\,\./g, "")) * 100;
        return value;
    },

    formatDate(date) {
        const splittedDate = date.split("-");
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
    },
    
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g, ''); // seleciona apenas o numeros

        value = Number(value) / 100;

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value;
    }
}

const App = {
    init() {
        Transaction.all.forEach((transaction) => DOM.addTransaction(transaction));
        DOM.updateBalance();
    },

    reload() {
        DOM.clearTransactions();
        this.init();
    }
}

App.init()



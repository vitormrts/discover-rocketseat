import { LocalStorage } from '../../data/LocalStorage.js';
import { App } from '../App.js';

const Transaction = {
    all: LocalStorage.get(),

    add(transaction) {
        const id = Transaction.all.length + 1; 

        transaction.id = id;

        Transaction.all.push(transaction);

        App.reload();
    },

    remove(id) {
        const index = Transaction.all.findIndex(transaction => Number(transaction.id) == id);
        console.log(id)
        console.log(index)

        Transaction.all.splice(index, 1);
        App.reload();
    },

    incomes() {
        let income = 0;

        Transaction.all.forEach((transaction) => {
            if (transaction.amount > 0) {
                income += transaction.amount;
            }
        })

        return income;
    },

    expenses() {
        let expense = 0;

        Transaction.all.forEach((transaction) => {
            if (transaction.amount < 0) {
                expense += transaction.amount;
            }
        })

        return expense;
    },

    total() {
        return Transaction.incomes() + Transaction.expenses();
    }
}

export { Transaction };
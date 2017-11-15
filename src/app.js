import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import store from './store/configureStore'
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css'
import './styles/styles.scss';
import {addExpense} from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({description: 'Water bill', amount: 1000, createdAt: 1000}));
store.dispatch(addExpense({description: 'Gas bill', amount: 600, createdAt: 100}));
store.dispatch(addExpense({description: 'Rent', amount: 150000, createdAt: 300}));


/*
setTimeout(() =>{
    store.dispatch(setTextFilter('after 3 sec'))
}, 3000)

*/
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
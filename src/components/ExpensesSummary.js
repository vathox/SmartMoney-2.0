import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeraljs';

export const ExpensesSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{props.expenses.length} </span>totalling <span>{numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}</span></h1>
            <div className="page-header__actions">
                <Link className="button button--create" to="/create">+ Expense</Link>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpensesSummary)
import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const SmartMoneyDashboard = (props) =>
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
;

export default SmartMoneyDashboard
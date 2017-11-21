import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeraljs';


const ExpenseListItem = ({id, description = "", amount = 0, createdAt = 0  }) =>(
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>Amount: {numeral(amount /100).format('$0,0.00')}</p>
        <p>Created at: {moment(createdAt).format('MMMM Do, YYYY')}</p>
    </div>
);


export default ExpenseListItem
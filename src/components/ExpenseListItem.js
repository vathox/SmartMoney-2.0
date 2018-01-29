import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeraljs';


const ExpenseListItem = ({id, description = "", amount = 0, createdAt = 0}) => (

    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>

);


export default ExpenseListItem
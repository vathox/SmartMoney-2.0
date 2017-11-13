import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SmartMoneyDashboard from '../components/SmartMoneyDashboard'
import AddExpensePage from '../components/AddExpensePage'
import EditPage  from '../components/EditPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={SmartMoneyDashboard}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter
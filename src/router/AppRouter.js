import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <>
                <Switch>
                    <Route exact path='/' component={CalendarScreen} />
                    <Route exact path='/login' component={LoginScreen} />
                    <Redirect to='/' />
                </Switch>

            </>
        </BrowserRouter>
    )
}

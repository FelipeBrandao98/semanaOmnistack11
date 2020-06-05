<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/logon'

import Register from './pages/register'

import Profile from './pages/profile'

import NewIncident from './pages/new_incident'

function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} />

            <Route path="/register" component={Register}/>

            <Route path="/profile" component={Profile}/>

            <Route path="/incidents/new" component={NewIncident}/>
        </Switch>
    </BrowserRouter>
    )
}
=======
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/logon'

import Register from './pages/register'

import Profile from './pages/profile'

import NewIncident from './pages/new_incident'

function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} />

            <Route path="/register" component={Register}/>

            <Route path="/profile" component={Profile}/>

            <Route path="/incidents/new" component={NewIncident}/>
        </Switch>
    </BrowserRouter>
    )
}
>>>>>>> db0dde8af03af4d0da7352992730d8c103a14e5f
export default Routes
const siteRouter = require('./site')
const homeRouter = require('./home')
const loginRouter = require('./login')
const registerRouter = require('./register')
const newparaRouter = require('./newpara')


function route(app) {
    // DEFAULT SITE WHEN U ACCESS
    app.use('/',siteRouter)

    // LOGIN ROUTE

    app.use('/login',loginRouter)

    // REGISTER ROUTE 

    app.use('/register', registerRouter)

    // HOME AFTER LOGIN

    app.use('/home', homeRouter)

    // NEWPARA ROUTE

    app.use('/newpara', newparaRouter)

    
    
    

}

module.exports = route;
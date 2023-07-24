const httpPort = process.env.PORT || '3000';
const sesionSet = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: null
    }
}

module.exports = {
    http: { port: httpPort },
    sessionSet : {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: null
        }
    }
}
// const localStrategy = require('passport-local').Strategy
// const bcrypt = require('bcrypt');
// const { builtinModules } = require('module');

// function initialize(passport, getUserByEmail) {
//     const authenticateUser = (email, password, done) => {
//         const user = getUserByEmail(email)
//         if(user == null) {
//             return done(null, false, {message: 'no user with that email'})
//         } 

//         try {
//             if(await bcrypt.compare(pass, user.password)){
//                 return done(null, user)
//             } else {
//                 return done(null,false, {message: 'password inccor'})
//             }

//         }catch (e){
//             return done(e)
//         }
//     }

//     passport.use(new localStrategy({usernameField: 'email'}),
//     authenticateUser)
//     passport.serializeUser((user, done) => {})
//     passport.deserializeUser((id, done) => {})
// }

// module.exports = initialize
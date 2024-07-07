const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('../lib/helpers');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},async(req,username,password,done)=>{
    const rows = await pool.query('SELECT * FROM users WHERE username = ?',[username]);
    console.log(req.body);
    if (rows.length > 0) {
        const user = rows[0];
        const valid_password = await helpers.matchPassword(password, user.password);
        if (valid_password){
            done(null, user, req.flash('success','Welcome! '+ user.full_name));
        }else{
            done(null,false,req.flash('message','Invalid password'));
        }
    }else{
        return done(null,false,req.flash('message','username does not exist'));
    }
}));

passport.use('local.signup',new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},async(req,username,password,done) => {
    const {fullname} = req.body;
    const newUser = {
        full_name: fullname,
        username,
        password
    };
    newUser.password = await helpers.encryptPassword(password);

    const result = await pool.query('INSERT INTO users SET ?', newUser);
    newUser.id = result.insertId;
    return done(null, newUser);
}));

passport.serializeUser((user,done) => {
    done(null,user.id);
});

passport.deserializeUser(async( id, done )=>{
    const rows = await pool.query('SELECT * FROM users where id = ?', [id]);
    done(null,rows[0]);
})
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

const GITHUB_CLIENT_ID = "Ov23livvH1AF2IdNbfbG";
const GITHUB_CLIENT_SECRET = "54222ffb1b341186357047873f6d5ba117f21e9d";
const GITHUB_CALLBACK_URL = "http://localhost:8080/auth/github/callback";

const passportOptions = {
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: GITHUB_CALLBACK_URL,
};

passport.serializeUser((user, done) => {
    console.log("serializeUser", user);
    done(null, user);
});

passport.deserializeUser((user, done) => {
    console.log("deserializeUser: ", user);
    done(null, user);
});

passport.use(new GitHubStrategy(passportOptions,
    function (accessToken, refreshToken, profile, done) {
        console.log("accessToken: ", accessToken);
        profile.token = accessToken;
        return done(null, profile);
    })
);
module.exports = passport;

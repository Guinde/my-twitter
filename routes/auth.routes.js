const router = require('express').Router();
const { signinForm, signin, signout } = require("../controllers/auth.controller")
const { ensureIsAuthenticated } = require("../config/guards.config");

router.get('/signin/form', signinForm);

router.post('/signin', signin);

router.get('/signout', ensureIsAuthenticated, signout)

module.exports = router;
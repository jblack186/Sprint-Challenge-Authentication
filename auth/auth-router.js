const router = require('express').Router();
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model.js');
const bcrypt = require('bcryptjs');
const secrets = require('../config/secrets.js')
const restricted = require('../auth/authenticate-middleware.js')




router.post('/register', (req, res) => {
  let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    Users.add(user)
    .then(saved => {
        const token = getJwt(saved)
        console.log(token)
        res.status(201).json(saved)
    })
    .catch(err => {
      console.log(err);
    })

  // implement registration
});

router.post('/login', restricted, (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
  .first()
  .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
          const token = getJwt(user) //this line gets token
      res.status(200).json({
          message: `Welcome ${user.username}`,
          token
      });
  } else {
      res.status(401).json({message: 'Invalid Credentials'})

  }
  })
  .catch(error => {
      console.log(error)
      res.status(500).json(error)
  })
  // implement login
});

function getJwt(user) {
  const payload = {
      subject: user.id, //translates into the sub property on the token
      username: user.username
  };

  const options = {
      expiresIn: '8h',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
 console.log(token);
}


module.exports = router;

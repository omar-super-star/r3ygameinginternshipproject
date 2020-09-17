const User = require('../models/User');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');

const UserController = () => {
  /*const register = async (req, res) => {
    const { body } = req;
    console.log(req.body);
    if (body.password === body.password2) {
      try {
        const user = await User.create({
          email: body.email,
          password: body.password,
        });
        const token = authService().issue({ id: user.id });

        return res.status(200).json({ token, user });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Passwords don\'t match' });
  };

  const login = async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      try {
        const user = await User
          .findOne({
            where: {
              email,
            },
          });

        if (!user) {
          return res.status(400).json({ msg: 'Bad Request: User not found' });
        }

        if (bcryptService().comparePassword(password, user.password)) {
          const token = authService().issue({ id: user.id });

          return res.status(200).json({ token, user });
        }

        return res.status(401).json({ msg: 'Unauthorized' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Email or password is wrong' });
  };

  const validate = (req, res) => {
    const { token } = req.body;

    authService().verify(token, (err) => {
      if (err) {
        return res.status(401).json({ isvalid: false, err: 'Invalid Token!' });
      }

      return res.status(200).json({ isvalid: true });
    });
  };

  const getAll = async (req, res) => {
    try {
      const users = await User.findAll();

      return res.status(200).json({ users });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };*/

  const getgame= async (req,res) =>{
    const game1 = await User.create({
      game: "fight",
      details: "war game",
    });
    const game2 = await User.create({
      game: "race",
      details: "car and racing game",
    }); 
    const game3 = await User.create({
      game: "spongpop",
      details: "kid game",
    });
    const game4 = await User.create({
      game: "detective conan",
      details: "mind game",
    });  
    const game5 = await User.create({
      game: "lets travel",
      details: "what you do if you travel ",
    });
     console.log(req.body.game)
     game=req.body.game
    const user = await User
          .findOne({
            where: {
              game,
            },
          });
     
    console.log(user);
    return res.json({user})
  }

  return {
    /*register,
    login,
    validate,
    getAll,*/
    getgame,
  };
};

module.exports = UserController;

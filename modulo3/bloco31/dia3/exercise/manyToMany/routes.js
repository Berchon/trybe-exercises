const routes = require('express').Router();

const { User, Role, User_Role } = require('./models');

routes.get('/test', (req, res) => {
  res.status(200).send('test ok')
});

routes.post('/test', async (req, res) => {
  const amidala = await User.create({
    username: 'p4dm3',
    points: 1000,
  //   // Roles: [{
  //     // name: 'Queen',
      // User_Role: {
      //   selfGranted: true,
      //   userId: 1,
      //   roleId: 3,
      // }
  //   // }]
  // }, {
  //   include: Role,
  });
  console.log('abc', await amidala.hasRoles([2, 1]))

  await amidala.AddUser_Roles([1, 6])
  
  res.status(200).send('tudo ok')
});

routes.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).json({ message: err.message });
})
module.exports = routes;

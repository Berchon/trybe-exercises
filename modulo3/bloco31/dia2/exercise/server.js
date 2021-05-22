const app = require('./index');

// const objEnvironmentVariables = require('./config/config_OLD');
// const ENVIRONMENT = require('./config/database');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
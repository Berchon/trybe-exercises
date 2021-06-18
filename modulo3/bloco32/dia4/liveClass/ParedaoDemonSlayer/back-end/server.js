const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');

const ParticipantsController = require('./controllers/ParticipantsController');

const Participant = require('./models/Participant');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET']
  }
});

const MAX_VOTES=60;

io.on('connection', (client) => {
  console.log(`Novo usuário conectado ${client.id}`);

  client.on('updateVote', async ({ id }) => {
    await Participant.updateVote(id);

    const participant = await Participant.getById(id);

    if (participant.votes >= MAX_VOTES) io.emit('finish', participant);

    io.emit('updateVoteClient', participant);
  });
});

const PORT = 3001;

app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ok: true})
});

app.use('/participants', ParticipantsController);

http.listen(PORT, () => console.log('App listening on PORT %s', PORT))
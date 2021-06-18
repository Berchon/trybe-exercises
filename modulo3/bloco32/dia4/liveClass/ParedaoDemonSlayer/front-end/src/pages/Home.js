import React, { useEffect, useState } from 'react';

import { Column } from 'rbx';

import ParticipantCard from '../components/ParticipantCard';


import client from '../utils/socktIoClient';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/participants')
      .then((response) => response.json())
      .then((participants) => {
        setIsLoading(false);
        setParticipants(participants);

        const MAX_VOTES = 60;

        const participantWinner = participants.find(p => p.votes >= MAX_VOTES);

        setWinner(participantWinner);
      });

    client.on('finish', (participant) => {
      setWinner(participant)
    });

  }, []);

  return (
    <div>
      <h1>Participantes</h1>

      {winner && <ParticipantCard data-test-id='participant'
                  index={1}
                  id={winner._id}
                  name={winner.name} 
                  image={winner.image}
                  votes={winner.votes} />}

      {/* {isLoading ? <p>Carregando</p>
        : ( */}
          {!winner && <Column.Group>
            {participants.map(({_id, name, image, votes}, index) => (
              <Column key={_id}>
                <ParticipantCard data-test-id='participant'
                  index={index}
                  id={_id}
                  name={name} 
                  image={image}
                  votes={votes} />
              </Column>
            ))}
          </Column.Group>}
        {/* )} */}
    </div>
  );
}

export default Home;
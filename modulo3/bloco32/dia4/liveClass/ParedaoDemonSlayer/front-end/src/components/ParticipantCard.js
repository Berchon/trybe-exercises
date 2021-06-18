import React, { useEffect, useState } from 'react';

import { Card, Button } from 'rbx';

import client from '../utils/socktIoClient';

function ParticipantCard({ index, id, name, image, votes }) {
  const [currentVotes, setCurrentVotes] = useState(votes);

  useEffect(() => {
    client.on('updateVoteClient', (participant) => {
      if (participant._id === id) setCurrentVotes(participant.votes);
    });
  }, [id]);

  const handleClick = () => {
    client.emit('updateVote', { id });
  }

  return (
    <Card>
      <Card.Header>
        <Card.Header.Title data-testid='participant-name'>{name}</Card.Header.Title>
      </Card.Header>
      <Card.Image>
        <img src={image} width='200' height='auto' alt='avatar' />
      </Card.Image>
      <Card.Footer>
        Votos: <span data-testid={`current-votes-${index}`}>{currentVotes}</span>  
        <Button onClick={handleClick} data-testid={`vote-participant-${index}`}>Votar</Button>
      </Card.Footer>
    </Card>
  );
}

export default ParticipantCard;
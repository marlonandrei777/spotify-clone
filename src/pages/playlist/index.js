import React from 'react';

import { Container, Header } from './styles';

const Playlist = () => (
    <Container>
        <Header>
            <img 
                src="data:image/jpeg;base64,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"
                alt="Playlist"
            />

            <div>
                <span>PLAYLIST</span>
                <h1>Metal Core</h1>
                <p>13 músicas</p>

                <button>PLAY</button>
            </div>     
        </Header>
    </Container>
);

export default Playlist;
import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
    <Container>
        <Search>
            <input placeholder="Search" />
        </Search>

        <User>
            <img src="https://github.com/marlonandrei777.png" alt="Avatar" />
            Marlon Andrei
        </User>
    </Container>
);

export default Header;
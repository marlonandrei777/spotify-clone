import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
    <Container>
        <div>
            <Nav main> {/* propriedade Main faz com q o texto fique em negrito */}
                <li>
                    <a href="https://github.com">Navegar</a>
                </li>
                <li>
                    <a href="https://github.com">Rádio</a>
                </li>
            </Nav>

            <Nav>
                <li>
                    <span>sua biblioteca</span>
                </li>
                <li>
                    <a href="https://github.com">Seu Daily Mix</a>
                </li> 
                <li>
                    <a href="https://github.com">Tocados recentemente</a>
                </li>
                <li>
                    <a href="https://github.com">Músicas</a>
                </li>
                <li>
                    <a href="https://github.com">Álbuns</a>
                </li>
                <li>
                    <a href="https://github.com">Artistas</a>
                </li>
                <li>
                    <a href="https://github.com">Arquivos locais</a>
                </li>
                <li>
                    <a href="https://github.com">Podcasts</a>
                </li>
            </Nav>    
    
            <Nav>
                <li>
                    <span>playlists</span>
                </li>
                <li>
                    <a href="https://github.com">Melhores do rock</a>
                </li>
            </Nav>
        </div>
        <NewPlaylist>
            <img src={AddPlaylistIcon} alt="Adicionar playlist"/>
            Nova playlist
        </NewPlaylist>
    </Container>
);

export default Sidebar;
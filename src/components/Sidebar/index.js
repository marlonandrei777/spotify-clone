import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
    static propTypes = {
        getPlaylistsRequest: PropTypes.func.isRequired,
        playlists: PropTypes.shape({
            data: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string,
            })),
        }).isRequired,
    };

    componentDidMount() {
        this.props.getPlaylistsRequest();
    }

    render() {
        return (
            <Container>
                <div>
                    <Nav main> {/* propriedade Main faz com q o texto fique em negrito */}
                        <li>
                            <Link to="/">Navegar</Link>
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
                        {this.props.playlists.data.map(playlist => (
                            <li key={playlist.id}>
                                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
                            </li>
                        ))}
                    </Nav>
                </div>
                <NewPlaylist>
                    <img src={AddPlaylistIcon} alt="Adicionar playlist"/>
                    Nova playlist
                </NewPlaylist>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    playlists: state.playlists,
})

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
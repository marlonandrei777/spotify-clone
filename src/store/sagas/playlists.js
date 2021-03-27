/* call: utilizado p receber o resultado de promises,
de chamadas assincronas a api.
put: p enviar alguma informação pra desparar uma action e enviar
informações pro reducer */

import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistsActions } from '../ducks/playlists';

export function* getPlaylists() {
    try {
        const response = yield call(api.get, '/playlists');

        yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
    } catch (err) {
        console.log(err);
    }
}

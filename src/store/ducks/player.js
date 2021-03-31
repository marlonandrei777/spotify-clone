import Sound from 'react-sound';

// TYPES
export const Types = {
    LOAD: 'player/LOAD',
}

const INITIAL_STATE = {
    currentSong: null,
    status: Sound.status.PLAYING,
};

// REDUCERS
export default function player(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.LOAD:
            return { ...state, currentSong: action.payload.song, status: Sound.status.PLAYING };
        default: 
            return state;        
    }
}

// ACTIONS

export const Creators = {
    loadSong: song => ({ 
        type: Types.LOAD,
        payload: { song }, 
    }),
};
// Core
import { ActionCreator } from 'redux';


export const APP_INITALISE: string = 'APP/INITIALIZE';


export interface Initialise {
    type: typeof APP_INITALISE;
};


export const initialize: ActionCreator<Initialise> = () => ({
    type: APP_INITALISE,
});


export type actions = Initialise;
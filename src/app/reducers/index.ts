export type IAppState = boolean;


export const appState: IAppState = true;


export default (state: IAppState = appState) => (
    state
);
import {createGlobalState} from "react-hooks-global-state";

const {setGlobalState, useGlobalState} = createGlobalState ({
    id:0
})
export {setGlobalState , useGlobalState}
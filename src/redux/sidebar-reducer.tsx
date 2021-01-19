import {FriendType} from "../components/Friends/Friend/Friend";
import {v1} from "uuid";
import Ross from "../assets/images/Ross.jpg"
import Monica from "../assets/images/Monica.jpg"
import Rachel from "../assets/images/Rachel.jpg"
import Fibby from "../assets/images/Phibby.jpg"
import Joey from "../assets/images/Joey.jpg"

    let initialState: Array<FriendType> = [
    {
        id: v1(),
        name: "Monica",
        src: Monica
    },
    {
        id: v1(),
        name: "Ross",
        src: Ross
    },
    {
        id: v1(),
        name: "Rachel",
        src: Rachel
    },
    {
        id: v1(),
        name: "Fibby",
        src: Fibby
    },
    {
        id: v1(),
        name: "Joey",
        src: Joey
    }
]

export const sidebarReducer = (state: Array<FriendType> = initialState, action: any) => {
    return state
}
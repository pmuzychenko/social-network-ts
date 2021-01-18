import {FriendType} from "../components/Friends/Friend/Friend";
import {v1} from "uuid";

    let initialState: Array<FriendType> = [
    {
        id: v1(),
        name: "Monica",
        src: "https://i.pinimg.com/originals/86/ef/f9/86eff988922f15e294bd794eb949aba5.jpg"
    },
    {
        id: v1(),
        name: "Ross",
        src: "https://i.pinimg.com/originals/58/24/86/582486eb19b1088bcd33e3efc4189d68.jpg"
    },
    {
        id: v1(),
        name: "Rachel",
        src: "https://www.denofgeek.com/wp-content/uploads/2020/07/racmain.jpg?resize=768%2C432"
    },
    {
        id: v1(),
        name: "Fibby",
        src: "https://hips.hearstapps.com/cos.h-cdn.co/assets/16/31/640x426/gallery-1470328993-phoebe.jpg?resize=480:*"
    },
    {
        id: v1(),
        name: "Joey",
        src: "https://static.wikia.nocookie.net/friends/images/f/f5/JoeyTribbiani.jpg/revision/latest?cb=20180424154245"
    }
]

export const sidebarReducer = (state: Array<FriendType> = initialState, action: any) => {
    return state
}
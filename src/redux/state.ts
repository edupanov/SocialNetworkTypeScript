export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "hi, how are you", likesCount: 8},
            {id: 2, message: "it's my first message", likesCount: 2},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Egor"},
            {id: 2, name: "Ira"},
            {id: 3, name: "Timur"},
            {id: 4, name: "Kirill"},
        ],
        messages: [
            {id: 1, message: "hi"},
            {id: 2, message: "how are you?"},
            {id: 3, message: "yo"},
            {id: 4, message: "lol"},
        ],
    },
    sidebar: {}

}

export default state

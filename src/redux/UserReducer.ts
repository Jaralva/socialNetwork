import {ActionTypes} from "./store";

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isLoading: boolean
}
export type UserType =
    {
    name: string
    id: number
    uniqueUrlName?:string
    photos: {
        small?: string
        large?: string
    }
    status?:string
    followed: boolean
}

let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isLoading: false,
}

export const userReducer = (state: UsersType = initialState, action: ActionTypes) => {
switch (action.type) {
    case 'FOLLOW':
        let stateCopy = {...state, users: state.users.map( n => n.id === action.userID ? {...n, followed: true} : {...n, photos: {...n.photos}})}
        return stateCopy
    case 'UNFOLLOW':
        let stateCopy1 = {...state, users: state.users.map( n => n.id === action.userID ? {...n, followed: false} : {...n, photos: {...n.photos}})}
        return stateCopy1
    case "SET-USER":
        let stateCopy2 = {...state, users: [...action.users]}
        return stateCopy2
    case 'SET-CURRENT-PAGE':
        let  stateCopy3 = {...state, currentPage: action.currentPage}
        return stateCopy3
    case 'SET-USERS-TOTAL-COUNT':
        let stateCopy4 = {...state, totalCount: action.totalCount}
        return stateCopy4
    case 'SET-LOADING':
        let stateCopy5 = {...state, isLoading: action.isLoading}
        return stateCopy5
    default: return state
}
}



export const followAC = (userID: number) => {
    return {type: 'FOLLOW' , userID} as const
}

export const  unfollowAC = (userID: number) => {
    return {type: 'UNFOLLOW', userID} as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {type: 'SET-USER', users: users} as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}

export const setUsersTotalCountAC = (totalCount: number) => {
    return {type: 'SET-USERS-TOTAL-COUNT', totalCount} as const
}

export const setLoadingAC = (isLoading: boolean) => {
    return {type: 'SET-LOADING', isLoading} as const
}
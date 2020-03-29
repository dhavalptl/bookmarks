export interface Bookmark {
    id: string,
    title: string,
    url: string
}

export interface Action {
    type: string;
    payload: any
}
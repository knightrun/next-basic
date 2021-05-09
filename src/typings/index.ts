export type IAPI = {
    [item: string]: {
        method: 'get' | 'post'
        url: string
    }
}
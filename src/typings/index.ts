export interface I_API {
    [item: string]: {
        method: 'get' | 'post'
        url: string
    }
}
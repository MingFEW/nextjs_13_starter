import { getApi } from "./fetch.api";

const API_POST = '/posts'

export const getPosts = async (): Promise<IPost[]> => {
    const requestConfig = { next: { revalidate: 300 } } // demo how to setup Time-based Revalidation 
    
    // Leave 2nd agurment null if not nessesary
    const _posts = await getApi(API_POST, requestConfig)
    return _posts
}

export const getPostById = async (id: number): Promise<IPost> => {
    const requestConfig = { next: { revalidate: 300 } } 
    
    const _post = await getApi(API_POST + '/' + id, requestConfig)
    return _post
}

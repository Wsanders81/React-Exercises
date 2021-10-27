import axios from 'axios'
import {
    GET_TITLES, 
    GET_POST, 
    CREATE_POST, 
    DELETE_POST, 
    CREATE_COMMENT, 
    DELETE_COMMENT, 
    VOTE,
    EDIT_POST
} from './types'

const API_URL = 'http://localhost:5000/api/posts'

function getTitles(titles) {
    return {
        type: GET_TITLES, 
        titles
    }
}

export function getTitlesFromAPI() {
        return async function(dispatch){
            const response = await axios.get(`${API_URL}`)
            return dispatch(getTitles(response.data))
    }
}
function getPost(post) {
    return {
        type: GET_POST, 
        post
    }
}
export function getPostFromAPI(id){
    return async function (dispatch) {
        const response = await axios.get(`${API_URL}/${id}`)
        console.log(response.data)
        return dispatch(getPost(response.data))
    }
}
function addPost(values) {
    const id = values.id
    return {
        type: CREATE_POST, 
        values, 
        id
    }
}
export function createPostInAPI({title, description, body}){
    console.log(title)
    return async function(dispatch){
        const response = await axios.post(`${API_URL}`, {
            title, 
            description, 
            body
        })
        
        return dispatch(addPost(response.data))
    }
}
function deletePost(id) {
    return {
        type: DELETE_POST, 
        id
    }
}
export function deletePostFromAPI(id) {
    return async function(dispatch){
        await axios.delete(`${API_URL}/${id}`)
        return dispatch(deletePost(id))
    }
}

function editPost(values){
    const id = values.id
    return {
        type: EDIT_POST, 
        values, 
        id
    }
}
export function editPostInAPI({id, title, description, body}) {
   
    return async function(dispatch){
        const response = await axios.put(`${API_URL}/${id}`, {
            title, 
            description, 
            body
        })
        
        return dispatch(editPost(response.data))
    }
}

function addComment(id, comment){
    return {
        type: CREATE_COMMENT, 
        id, 
        comment
    }
}
export function sendCommentToAPI(text, postId){
    const id = postId
    return async function(dispatch){
        const response = await axios.post(`${API_URL}/${postId}/comments`, {text})
        return dispatch(addComment(id, response.data))
    }
}
function deleteComment(id, commentId){
    return {
        type: DELETE_COMMENT, 
        id, 
        commentId
    }
}
export function removeCommentFromAPI(id, commentId){
    return async function(dispatch){
        await axios.delete(`${API_URL}/${id}/comments/${commentId}`)
        return dispatch(deleteComment(id, commentId))
    }
}

function vote(postId, votes){
    return {
        type: VOTE, 
        postId: postId, 
        votes: votes
    }
}

export function sendVoteToAPI(id, direction){
    return async function(dispatch){
        const response = await axios.post(`${API_URL}/${id}/vote/${direction}`)
        return dispatch(vote(id, response.data.votes))
    }
}
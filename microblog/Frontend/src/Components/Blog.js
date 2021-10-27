import {useParams, useHistory} from 'react-router-dom'
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Box, Typography, Modal} from '@mui/material'
import { CREATE_COMMENT, DELETE_COMMENT, DELETE_POST, EDIT_POST } from '../Actions/types';

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Comment from '../Components/Comment'
import EditBlogForm from './EditBlogForm';
import '../Styles/Blog.css'
import CommentForm from './CommentForm';
import {v4 as uuid4} from 'uuid'

import {
    getPostFromAPI, 
    editPostInAPI, 
    sendVoteToAPI, 
    sendCommentToAPI, 
    removeCommentFromAPI, 
    deletePostFromAPI
} from '../Actions/actions'

export default function Blog() {
    const [open, setOpen] = useState(false)
    
    const params = useParams().postId
    const postId = +params
    
    const blog = useSelector(store => store.postReducer[postId])
    
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(function(){
        async function getPost(){
            
            dispatch(getPostFromAPI(postId))

        }
        if(!blog){
            getPost()
        }
    }, [dispatch, postId, blog])


    const handleDelete = (id) => {
        dispatch(deletePostFromAPI(id))
        history.push('/')

    }
    const handleEdit = (values) => {
        let id = postId
        values.id = id
        dispatch(editPostInAPI(values))
    }
    const submitComment = (values)=>{
        let id = postId
        const comment = values.comment
        
        // dispatch({type: CREATE_COMMENT,comment,  id})
        dispatch(sendCommentToAPI(comment, id))
    }
    const deleteComment = (commentId) => {
        let id = postId
        dispatch(removeCommentFromAPI(id, commentId))
    }
    const handleOpen = () => {setOpen(true)}
    const handleClose = () => {setOpen(false)}

    if(!blog){return <b style={{paddingTop: '15rem'}}>Loading...</b>}
    return (
        <>
        <Box sx={{height: '100vh', paddingTop: '15rem'}}>
            <Box sx={{display: 'flex'}}>
            <Typography variant="h3" ml={4} sx={{flexGrow:3}}>
            {blog.title}
            
            </Typography>
            <Typography mr={5}>
                <EditIcon className="Blog-button" color="primary" onClick={handleOpen}/>
                <DeleteForeverIcon className="Blog-button" color="error" onClick={()=>handleDelete(postId)}/>
            </Typography>
            </Box>
            <Typography ml={4} mt={2} variant="h5">
            <i> {blog.description}</i>
            </Typography>
            <Typography ml={4} mt={4}>
                {blog.body}
            </Typography>
            <hr></hr>
            <Typography variant="h5" mb={2} sx={{marginLeft: "1.75rem", paddingTop: '1rem'}}>Comments</Typography>
            {blog.comments.map(comment=> <Comment comment={comment} deleteComment={deleteComment}/>)}
            <CommentForm id={postId} submitComment={submitComment}/>
        </Box>
        <Modal
        className="Blog-modal"
        open={open}
        onClose={handleClose}>
            <EditBlogForm blog={blog} handleClose={handleClose} edit={handleEdit}/>
        </Modal>
        </>
    )
}


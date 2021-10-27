import {Route, Switch, Redirect} from 'react-router-dom'
import NewBlogForm from './Components/NewBlogForm'
import Home from './Components/Home'
import Blog from './Components/Blog'
function Routes(){
    return (
        <Switch>
            <Route exact path ={'/'}>
                <Home/>
            </Route>
            <Route exact path ={'/new'}>
                <h1>New Blog</h1>
                <NewBlogForm/>
            </Route>
            <Route exact path ={'/:postId'}>
                <h1>POST</h1>
                <Blog/>
            </Route>
            
        </Switch>
    )
}
export default Routes
import React, {useState} from 'react';
import './App.css'
import Posts from "./components/Posts/Posts";
import AddPostForm from "./components/AddPostForm/AddPostForm";
import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography,} from "@material-ui/core";
import {Menu} from "@material-ui/icons"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	Menu: {
		marginRight: theme.spacing(1)
	},
	title: {
		flexGrow: 1
	},
	color:{
		backgroundColor: "lightgray"
	}
}))


const App = () => {

    const [posts, setPosts] = useState([])

    const removePost = (postId) => {
        setPosts(posts.filter(({id}) => id !== postId))
    }

	const classes = useStyles()

    return (
        <AppBar position='fixed' className={classes.color} >
            <Container fixed>
                <Toolbar>
                    <IconButton edge='start'
                                color='inherit'
                                aria-label='menu'
                                className={classes.Menu}
                    >
                        <Menu>
                        </Menu>
                    </IconButton>
	                <Typography variant='h6' className={classes.title}>SergoFan</Typography>
	                <Box style={{margin: '0.5em'}}>
		                <Button color='inherit' variant='outlined'>Log in</Button>
	                </Box>
	                <Button color='secondary' variant='contained'>Sign un</Button>

                </Toolbar>
            </Container>
            <Container className='App'>
                <AddPostForm posts={posts} setPosts={setPosts}/>
                {posts.length !== 0
                    ?<Posts remove={removePost} posts={posts}/>
                    : <h1 style={{textAlign: 'center'}}>Постов нет, соси бобика!</h1>
                }
            </Container>
        </AppBar>


  )
}

export default App;

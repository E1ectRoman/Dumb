import React from 'react';
import '../../App.css'
import MyButton from "../UI/MyButton/MyButton";
import {DivPost} from "./PostsStyled";
import Button from '@material-ui/core/Button'

const Posts = ({posts, remove}) => {
	return (
		<div>
			{posts.map(({id, title, body, createAt}) => {
				return (
					<DivPost key={id} className='post'>
						<div> <strong>{title}</strong></div>
						<div>{body}</div>
						<div>{createAt}</div>
						<div>
							<Button onClick={() => remove(id)}>Delete</Button>
						</div>
					</DivPost>
				)
			})}
		</div>
	)
}

export default Posts;
import React, {useState} from 'react';
import dayjs from "dayjs";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import Button from '@material-ui/core/Button'

const AddPostForm = ({posts, setPosts}) => {

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()
		setPosts([...posts, {
			id: Date.now(),
			title,
			body,
			createdAt: dayjs().format('YYYY-MM-DD hh:mm:ss'),
		}])
			setTitle('')
			setBody('')
	}

	return (
		<form onSubmit={submitHandler}>
			<div>
				<MyInput placeholder='Пиши сюда, ебнрот...' value={title} onChange={e => setTitle(e.target.value)}/>
				<MyInput placeholder='А тут описание...' value={body} onChange={e => setBody(e.target.value)}/>
				<Button onClick={submitHandler}
				        variant="contained"
				        color="primary"
				        style={{marginLeft: '880px'}}

				>
					Add Post
				</Button>
			</div>
		</form>
	);
};

export default AddPostForm;
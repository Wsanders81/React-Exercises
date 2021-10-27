import '../Styles/BlogList.css';
import {useEffect, useState} from 'react'
import { Paper, Typography, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {getTitlesFromAPI} from '../Actions/actions'
export default function BlogList() {
	const [loading, setLoading] = useState(true)
	const dispatch = useDispatch()
	const titles = useSelector((store) => store.titlesReducer);
    useEffect(function(){
		async function getTitles(){
			await dispatch(getTitlesFromAPI())
			setLoading(false)
		}
		if(loading) {
			getTitles()
		}
	}, [dispatch, loading]	)

	if(loading) {
		return <h1>Add something!</h1>
	}

	

	return (
		<Box className="BlogList">
			{titles.map((i) => (
				<Paper key={i.id} className="BlogList-title">
					<Typography className="BlogList-text">
						<Link to={`/${i.id}`}>{i.title}</Link>
					</Typography>
					<Typography className="BlogList-text">
						{i.description}
					</Typography>
				</Paper>
			))}
		</Box>
	);
}

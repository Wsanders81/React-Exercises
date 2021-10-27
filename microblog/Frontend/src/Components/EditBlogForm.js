import { Form, Formik, Field, ErrorMessage } from 'formik';
import {
	Card,
	CardContent,
	Typography,
	TextField,
	FormGroup,
	Box,
	Button
} from '@mui/material';
import { object, string } from 'yup';
import {useDispatch } from 'react-redux'
import '../Styles/NewBlogForm.css'
export default function EditBlogForm({blog, handleClose, edit}) {
	const initialValues = {
		title       : blog.title,
		description : blog.description,
		body        : blog.body
	};
	const dispatch = useDispatch()
	return (
		<div className="NewBlogForm" style={{ textAlign: 'center' }}>
			<Card sx={{ margin: 'auto' }}>
				<CardContent>
					<Typography variant="h4" mb={2}>
						Edit Post
					</Typography>
					<Formik
						validationSchema={object({
							title       : string()
								.required('Required')
								.min(2, 'Too Short!'),
							description : string()
								.required('Required')
								.min(3, 'Too Short!'),
							body        : string()
								.required('Required')
								.min(3, 'Too Short!')
						})}
						initialValues={initialValues}
						onSubmit={(values) => {
							edit(values)
							handleClose()
						}}
					>
						{({ values, errors }) => (
							<Form >
								<FormGroup>
									<Box mb={2}>
										<Field
											name="title"
											as={TextField}
											label="title"
											style={{ width: '50rem' }}
										/>
										<ErrorMessage
											name="title"
											render={(msg) => (
												<div style={{ color: 'red' }}>
													{msg}
												</div>
											)}
										/>
									</Box>
									<Box mb={2}>
										<Field
											name="description"
											as={TextField}
											label="description"
											style={{ width: '50rem' }}
										/>
										<ErrorMessage
											name="description"
											render={(msg) => (
												<div style={{ color: 'red' }}>
													{msg}
												</div>
											)}
										/>
									</Box>
									<Box mb={2} >
										<Field
										
											name="body"
											type="textArea"
											label="body"
											style={{ width: '50rem', height: '10rem'}}
											
										/>
										
										<ErrorMessage
											name="body"
											render={(msg) => (
												<div style={{ color: 'red' }}>
													{msg}
												</div>
											)}
										/>
									</Box>
								</FormGroup>
								<Button
									variant="contained"
									type="submit"
									style={{ backgroundColor: '#81c784' }}
								>
									Save
								</Button>
								<Button
									variant="contained"
									sx={{ marginLeft: '1rem' }}
									onClick={handleClose}
								>
									Cancel
								</Button>
							</Form>
						)}
					</Formik>
				</CardContent>
			</Card>
		</div>
	);
}

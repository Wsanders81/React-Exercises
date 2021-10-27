
import { Form, Formik, Field, ErrorMessage } from 'formik';
import {Box, FormGroup, TextField, Button} from '@mui/material'
import { object, string } from 'yup';

export default function CommentForm({id, submitComment}) {
    const initialValues = {
		comment       : ""
	};
    
    
    return (
        <div style={{marginLeft: '1.5rem', paddingTop: '2rem'}}>
            
            <Formik
						validationSchema={object({
							comment       : string()
								.required('Required')
								.min(2, 'Too Short!')
						})}
						initialValues={initialValues}
						onSubmit={(values, {resetForm}) => {
							submitComment(values)
                            resetForm()
						}}
					>
						{({ values, errors }) => (
							<Form >
								<FormGroup >
									<Box mb={2}>
										<Field
											name="comment"
											as={TextField}
											label="comment"
											style={{ width: '50rem' }}
										/>
										<ErrorMessage
											name="comment"
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
								
							</Form>
						)}
					</Formik>
        </div>
    )
}
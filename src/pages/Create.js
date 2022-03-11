import {  Container,
        Typography , 
        Button, 
        TextField,
        Radio,
        RadioGroup,
        FormControlLabel,
        FormLabel,
        FormControl
 } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
const Create = ({classes}) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category , setCategory] = useState("Money")
    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)
        if (title === '') {
          setTitleError(true)
        }
        if (details === '') {
          setDetailsError(true)
        }
        if (title && details ) {
          fetch('http://localhost:8000/notes',{
              method:'POST',
              headers: {"Content-type": "application/json"},
              body: JSON.stringify({ title, details, category })
          }).then(()=> navigate('/'))
        } 
    }
    return ( 
        <Container size="sm">
            <Typography
                variant="h6"
                color='textSecondary'
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}> 
                <TextField
                    className={classes.field}
                    label='Note title'
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    error={titleError}
                />
                <TextField
                    
                    label='Details'
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    rows={4}
                    multiline
                    onChange={(e) => setDetails(e.target.value)}
                    error={detailsError}
                />
                <FormControl>
                    <FormLabel> Note Category </FormLabel>
                    <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
                        <FormControlLabel value="Money" control={<Radio/>} label="Money"/>
                        <FormControlLabel value="Todos" control={<Radio/>} label="Todos"/>
                        <FormControlLabel value="Reminders" control={<Radio/>} label="Reminders"/>
                        <FormControlLabel value="Work" control={<Radio/>} label="Work"/>
                    </RadioGroup>
                </FormControl>
                
                <Button
                type='submit'
                variant="contained"
                endIcon={<ArrowForwardIosIcon/>}
                color="secondary"
                >
                    Add
                </Button>
            </form> 
          
        </Container>
     );
}
 
export default Create;
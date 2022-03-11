import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { Paper } from '@mui/material';

const Notes = () => {
    const [notes , setNotes] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/notes')
            .then(res=>res.json())
            .then(data =>setNotes(data))
            .catch(err =>console.log(err))
    },[])
    return ( 
        <Container>

            <Grid container>
                {notes.map( (note) =>(
                    <Grid key={note.id} item xs={12} md={6} lg={4}>
                        {note.title}
                    </Grid>  
                ))}
            </Grid>

        </Container>
           
           
     );
}
 
export default Notes;
import { Card, CardHeader, CardContent, Typography, Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import makeStyles from '@mui/styles/makeStyles';
import { green,yellow, pink,blue } from "@mui/material/colors";

const useStyles = makeStyles({
  avatar: {
      backgroundColor: (note) => {
        if (note.category === 'Work') {
          return yellow[700]
        }
        if (note.category === 'Money') {
          return green[500]
        }
        if (note.category === 'Todos') {
          return yellow[700]
        }
        return yellow[700]
      },
    }
  })
const bgcolor= (note) =>{
  switch(note.category){
      case 'Money':
        return yellow[700]
      case 'Todos':
        return blue[500]
      case 'Reminders':
        return green[500]
      case 'Work':
          return pink[500]
      default:
        return null
    }
}
const NoteCard = ({note,handleDelete}) => {
    const classes = useStyles(note)
    return (
        <div>
            <Card elevation={1} sx={classes.test}  >
                <CardHeader
                    avatar={
                      <Avatar sx={ 
                          {
                            bgcolor: note.category ? bgcolor(note) : null
                          }
                        }
                        >
                        {note.category[0]}
                      </Avatar>
                    }
               
                    action={
                        <IconButton onClick={()=>handleDelete(note.id)}>
                            <DeleteOutline/>
                        </IconButton>
                    }
                    title = {note.title}
                    subheader={note.category}
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>

      );
}
 
export default NoteCard;
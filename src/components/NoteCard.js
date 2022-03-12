import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
const NoteCard = ({note,handleDelete}) => {
    return (
        <div>
            <Card variant="outlined">
                <CardHeader
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
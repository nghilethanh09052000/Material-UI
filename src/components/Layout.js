import { useLocation, useNavigate } from "react-router-dom";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { Typography, 
        Drawer, 
        ListItem, 
        List , 
        ListItemIcon , 
        ListItemText,
        AppBar,
        Toolbar
    } 
from "@mui/material";
import { makeStyles } from "@mui/styles";
import { format } from 'date-fns'

const drawerWidth = 240
const useStyles = makeStyles((theme)=>{
    return{
            page:{
                background:'#f9f9f9',
                width:'100%',
        
            },
            drawer:{
                width:drawerWidth
            },
            drawerPaper:{
                width:drawerWidth
            },
            root:{
                display:'flex'
            },
            active:{
                background: '#f4f4f4',
            }, 
            appBar: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft:drawerWidth,
            },
            date: {
                flexGrow:1,

            },
            toolbar:{
                marginTop:'90px'
            }
    }
})
const Layout = ({children}) => {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()
  
    const menuItems = [
        {
            text:"My notes",
            icon:<SubjectOutlined color="secondary"/>,
            path:'/'
        },
        {
            text:"Create Note",
            icon:<AddCircleOutlineOutlined color="secondary"/>,
            path:'/create'
        }
    ]
  
    return (
        <div className={classes.root}>
            <AppBar 
                position="fixed" 
                className={classes.appBar}
                elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>Todos</Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor="left"
                classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant="h5">
                        Notes
                    </Typography>
                </div>
                <List>
                    {menuItems.map(item =>(
                        <ListItem 
                            key={item.text} 
                            selected={location.pathname === item.path}
                            button 
                            onClick={ ()=> navigate(item.path) }
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}>
                    {children}
                </div>
                
            </div>
        </div> 
     );
}
 
export default Layout;
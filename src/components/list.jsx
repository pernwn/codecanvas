

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export default function Skills(props) {

    return (
        <List
            sx={{ width: '100%', bgcolor: '#f8f8f8'}}
        >
            <div className="listItem" style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
                <ListItemIcon>
                    {props.image}
                </ListItemIcon>

                <ListItem>
                    <ListItemText primary={props.name} style={{color: "#6f0202"}}/>
                </ListItem>
            </div>

        </List>
    );
}


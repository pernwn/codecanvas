

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export default function Skills(props) {

    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
        >
            <div className="listItem">
                <ListItemIcon>
                    {props.image}
                </ListItemIcon>

                <ListItem>
                    <ListItemText primary={props.name} />
                </ListItem>
            </div>

        </List>
    );
}


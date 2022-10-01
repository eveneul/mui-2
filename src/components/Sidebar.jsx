import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { Box } from '@mui/system';
import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import React from 'react';

const Sidebar = () => {
	return (
		<>
			<Box flex={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
				<Box position='fixed' >
					<List>
						<ListItem p={2}><ListItemButton sx={{width: '100%'}} component='a' href='#'><ListItemIcon><Home /></ListItemIcon><ListItemText primary='Homepage' /></ListItemButton></ListItem>
						<ListItem p={2}><ListItemButton sx={{width: '100%'}} component='a' href='#simple-list'><ListItemIcon><Article /></ListItemIcon><ListItemText primary='Pages' /></ListItemButton></ListItem>
						<ListItem p={2}><ListItemButton sx={{width: '100%'}} component='a' href='#simple-list'><ListItemIcon><AccountBox /></ListItemIcon><ListItemText primary='Groups' /></ListItemButton></ListItem>
						<ListItem p={2}><ListItemButton sx={{width: '100%'}} component='a' href='#simple-list'><ListItemIcon><Storefront /></ListItemIcon><ListItemText primary='Marketplace' /></ListItemButton></ListItem>
						<ListItem p={2}><ListItemButton sx={{width: '100%'}} component='a' href='#simple-list'><ListItemIcon><Group /></ListItemIcon><ListItemText primary='Friends' /></ListItemButton></ListItem>
						<ListItem p={2}><ListItemButton sx={{width: '100%'}} component='a' href='#simple-list'><ListItemIcon><Settings /></ListItemIcon><ListItemText primary='Settings' /></ListItemButton></ListItem>
						<ListItem p={2}><ListItemButton sx={{width: '100%'}} component='a' href='#simple-list'><ListItemIcon><Person /></ListItemIcon><ListItemText primary='Profile' /></ListItemButton></ListItem>
						<ListItem p={2}><ListItemButton sx={{width: '100%'}} component='a' href='#simple-list'><ListItemIcon><ModeNight /></ListItemIcon><Switch /></ListItemButton></ListItem>
					</List>
				</Box>
			</Box>
		</>
	);
};

export default Sidebar;

import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import { useState } from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box } from '@mui/system';

const StyledToolbar = styled(Toolbar)({display: 'flex', justifyContent: 'space-between'})
const Search = styled('form')(({ theme }) => ({ backgroundColor: '#fff', padding: '0 10px', borderRadius: theme.shape.borderRadius, width: '40%' }));
const Icons = styled(Box)(({theme}) => ({display: 'flex',alignItems: 'center', gap: '20px', [theme.breakpoints.down('sm')]: {display: 'none'}}));
const UserBox = styled(Box)(({theme}) => ({display: 'flex',alignItems: 'center', gap: '10px', [theme.breakpoints.up('sm')]: {display: 'none'}}))

const Navbar = () => {
  const [menu, setMenu] = useState(null);
  
  return (
    <AppBar position='relative'>
      <StyledToolbar>
        <Typography variant='span' component='h1' fontSize={16} sx={{display: {xs: 'none', sm:'block'}}}>LAMA DEV</Typography>
        <PetsIcon sx={{display: {xs: 'block', sm: 'none'}}} />
        <Search><InputBase placeholder='검색어를 입력하세요' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error"><EmailIcon color="#fff" /></Badge>
          <Badge badgeContent={2} color="error"><NotificationsIcon color="#fff" /></Badge>
          <Avatar onClick={event => setMenu(event.currentTarget)} sx={{width: 30, height: 30, cursor: 'pointer'}} src='https://cdn-std-web-241-250-godomall.spdycdn.net/bird5471_godomall_com/data/goods/20/04/15/1000000324/1000000324_detail_064.jpg' />
        </Icons>
        <UserBox>
          <Avatar onClick={event => setMenu(event.currentTarget)} sx={{width: 30, height: 30, cursor: 'pointer'}} src='https://cdn-std-web-241-250-godomall.spdycdn.net/bird5471_godomall_com/data/goods/20/04/15/1000000324/1000000324_detail_064.jpg' />
          <Typography variant='span'>Join</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu id="basic-menu" anchorEl={menu} open={Boolean(menu)} onClose={() => setMenu(null)} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Log out</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
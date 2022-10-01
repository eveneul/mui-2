import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';

export default function Post() {
	return (
		<>
			<Card sx={{margin: 5}}>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
							R
						</Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title='Shrimp and Chorizo Paella'
					subheader='September 14, 2016'
				/>
				<CardMedia component='img' height='20%' image='https://pbs.twimg.com/media/FByhnGCVkAEYDsg.jpg' alt='Paella dish' />
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						동글이는 귀여워요
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />} />
					</IconButton>
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
				</CardActions>
			</Card>
		</>
	);
}

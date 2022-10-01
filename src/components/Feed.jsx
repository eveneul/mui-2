import { useState } from 'react';
import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography, Box } from '@mui/material';
import Post from './Post';

const Feed = () => {
	return (
		<Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
		</Box>
	);
};

export default Feed;

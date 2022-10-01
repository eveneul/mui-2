import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
import { Container, Stack } from '@mui/system';
import { Box } from '@mui/material';

function App() {
  return (
		<Box>
      <Navbar />
			<Stack direction='row' spacing={2} justifyContent='space-between'>
				<Sidebar />
				<Feed />
				<Rightbar />
			</Stack>
		</Box>
	);
}

export default App;

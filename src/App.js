import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Contact from './screens/Contact';
import Dial from './screens/Dial';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Paper sx={{
        pb: 7, 
        width: 300, 
        height: 300,
        margin: 'auto', 
        background: 'white'
    }}>

      <Box sx={{overflow:'auto', height: 320}}>
        {activeTab==0 && <Dial />}
        {activeTab==1 && <Contact />}
      </Box>

      <Paper sx={{  }} elevation={3}>
        <BottomNavigation
          showLabels
          value={activeTab}
          onChange={(event, newValue) => {
            setActiveTab(newValue);
          }}
        >
          <BottomNavigationAction label="Dial" icon={<LocalPhoneIcon />} />
          <BottomNavigationAction label="Contact" icon={<PermContactCalendarIcon />} />
        </BottomNavigation>
      </Paper>

    </Paper>
  );
}
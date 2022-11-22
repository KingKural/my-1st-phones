import { Avatar, Backdrop, Button, Fade, Grid, Modal, Paper, Typography } from "@mui/material";
import { blue, green, grey, orange, red } from "@mui/material/colors";
import { useState } from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Box } from "@mui/system";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import BackspaceIcon from '@mui/icons-material/Backspace';

export default function Dial() {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const [display, setDisplay] = useState('');
    const [isCalling, setIsCalling] = useState(false);

    function add(event) {
        const newDisplayValue = display + event.target.textContent;
        setDisplay(newDisplayValue);
    }

    function clear() {
        setDisplay('');
    }

    return <>

        <Box sx={{
            p: 2,
            textAlign: 'center',
            position: 'relative'
        }}>
            <Grid container
                alignItems='center' columns={{ sm: 3 }}>
                <Grid item sm={2} sx={{ textAlign: 'right' }}>
                    <Typography>{display}</Typography>
                </Grid>
                <Grid item sm={1}>
                    <BackspaceIcon
                        onClick={clear}
                        sx={{ cursor: 'pointer', color: grey[400] }} />
                </Grid>
            </Grid>
        </Box>
        <Box sx={{width: 200, margin: 'auto'}}>
            <Grid container
                justifyContent='center'
                alignItems='center'
                spacing={{ sm: 1 }}
                columns={{ sm: 3 }}>

                {numbers.map((number, i) => (
                    <Grid item sm={1} key={i}>
                        <Avatar sx={{ cursor: 'pointer', bgcolor: green[500], margin: 'auto' }}
                            onClick={add}>
                            {number}
                        </Avatar>
                    </Grid>
                ))}

                <Grid item sm={3} sx={{ textAlign: 'center' }}>
                    <Button onClick={() => setIsCalling(true)}
                        variant="contained"
                        sx={{borderRadius:5, bgcolor: blue[500]}}>
                            <PhoneInTalkIcon />
                    </Button>
                </Grid>

            </Grid>
        </Box>

        <Modal
            open={isCalling}
            onClose={() => setIsCalling(false)}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Paper sx={{ p: 2, width: 300, background: 'white' }}>
                <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PhoneInTalkIcon sx={{ mr: 2, color: green[500] }} /> Calling {display}
                </Typography>
            </Paper>
        </Modal>

    </>
}
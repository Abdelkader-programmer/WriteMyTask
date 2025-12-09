import TextField from '@mui/material/TextField';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const theme = createTheme({
    palette: {
        primary: {
        main: yellow[500],
        },
        secondary: {
        main: '#f44336',
        },
    },
    });

export default function EndTasks(){
    return(
        <>
            <div className="w-[95%] h-[68%] mt-10 p-2 m-auto border-4 border-green-600 rounded-2xl flex flex-col gap-5 overflow-y-auto scroll">
                <div className="w-full border-4 bg-red-6000 border-yellow-500 rounded-2xl p-5">
                </div>
                <div className="w-full border-4 bg-red-6000 border-yellow-500 rounded-2xl p-5">
                </div>
                <div className="w-full border-4 bg-red-6000 border-yellow-500 rounded-2xl p-5">
                </div>
                <div className="w-full border-4 bg-red-6000 border-yellow-500 rounded-2xl p-5">
                </div>
                <div className="w-full border-4 bg-red-6000 border-yellow-500 rounded-2xl p-5">
                </div>
                <div className="w-full border-4 bg-red-6000 border-yellow-500 rounded-2xl p-5">
                </div>
                <div className="w-full border-4 bg-red-6000 border-yellow-500 rounded-2xl p-5">
                </div>
                <div className="w-full border-4 bg-red-6000 border-yellow-500 rounded-2xl p-5">
                </div>
            </div>

            <div className='w-[95%] m-auto p-2 mt-2'>
                <Stack direction={'row'} spacing={3} className=' justify-center'>
                    <ThemeProvider theme={theme}>
                        <TextField id="outlined-basic" className='w-full' label="Outlined" sx={{'& .MuiOutlinedInput-root': {'& fieldset': {},color: 'white'}}}  placeholder='Write Your Task' variant="outlined" focused />
                    </ThemeProvider>
                    <Button variant="contained" color='success' endIcon={<SendIcon className=' rotate-270' />}>
                        Send
                    </Button>
                </Stack>
            </div>
        </>
    )
}
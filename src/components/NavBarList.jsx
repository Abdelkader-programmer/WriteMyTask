
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

import { Routes , Route , Link } from 'react-router-dom';

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

export default function NavBarList(){
    return(
        <>
            <header className="w-[90%] m-auto border-2 border-yellow-500 mt-5 rounded-2xl">
                <div className='w-full flex justify-between items-center p-2 pl-2 pr-2'>
                    <div>
                        <Stack spacing={3} direction="row">
                            <Accordion className='bg-transparent' sx={{backgroundColor: 'transparent',}}>
                            <ThemeProvider theme={theme}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />} aria-controls="panel1-content" id="panel1-header">
                                    <Typography sx={{fontSize : 'x-large' , color : 'rgb(255, 200, 0)'}}>
                                        <MenuIcon sx={{width : '40px' , height : '40px' , marginTop : '-5px'}} /> Menu
                                    </Typography>
                                </AccordionSummary>
                            </ThemeProvider>
                            <AccordionDetails className='bg-transparent'>
                            <div className='w-full m-auto'>
                                <ul>
                                    <Stack spacing={2} direction="column">
                                        <ThemeProvider theme={theme}>
                                            <Link to={'/Write'}>
                                                <Button className='w-[80px text-lg]' variant="outlined" >All Tasks</Button>
                                            </Link>
                                            <Link to='/done'>
                                                <Button className='w-[80px text-lg]' variant="outlined" >Completed</Button>
                                            </Link>
                                            <Button className='w-[80px text-lg]' variant="outlined" >Uncompleted</Button>
                                        </ThemeProvider>
                                    </Stack>
                                </ul>
                            </div>
                            </AccordionDetails>
                            </Accordion>
                        </Stack>
                    </div>
                    <div>
                        <h1 className='text-[#ffc200] text-3xl mr-4 font1'>My Tasks</h1>
                    </div>
                </div>
            </header>
        </>
    )
}
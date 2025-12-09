import '../App.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { createTheme , ThemeProvider } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import { yellow } from '@mui/material/colors';
import Button from '@mui/material/Button';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import SendIcon from '@mui/icons-material/Send';
import MainTask from './MainTask';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import { SendTaskContext } from '../contexts/SendTaskContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';


const theme = createTheme({
    palette: {
        primary: {
        main: yellow[500],
        },
        primary2: {
        main: yellow[600],
        },
        secondary: {
        main: '#f44336',
        },
    },
    });


export default function AddForm(){
    
    const {sendTask , setSendTask} = useContext(SendTaskContext);

    const [taskTitle , setTaskTitle] = useState("");

    const [sendTaskType , setSendTaskType] = useState("all");

    // filter array

    const completeTask = sendTask.filter((t)=>{
        return t.complete
    });

    // filter array

    const notCompleteTask = sendTask.filter((t)=>{
        return !t.complete
    });

    let showTask = sendTask ;

    if (sendTaskType === "completed"){
        showTask = completeTask ;
    }else if (sendTaskType === "non-completed"){
        showTask = notCompleteTask ;
    }else{
        showTask = sendTask ;
    }

    const AddMyTask = showTask.map((task)=>{
        return <MainTask key={task.id} sendTasks={task} />
    })

    function changeTaskType(e){
        setSendTaskType(e.target.value)
    }

    function handelAddTask(){
        const newTask ={
            id : uuid4(),
            title : taskTitle,
            details : "",
            complete : false,
        }
        const savedItem = [...sendTask , newTask];
        setSendTask([...sendTask , newTask]);
        localStorage.setItem("sendTask" , JSON.stringify(savedItem))
        setTaskTitle("");
    }

    useEffect(()=>{
        console.log('hi')
        const storageTask = JSON.parse(localStorage.getItem("sendTask"));
        setSendTask(storageTask);
    }, [])
    

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
                                    <ThemeProvider theme={theme}>
                                            <ToggleButtonGroup exclusive orientation="vertical" value={sendTaskType} color='primary2'  onChange={changeTaskType}>
                                                <ToggleButton className='w-35' sx={{border : '2px solid gold' , color : "gold"}} color='primary'  variant="contain" value={"all"}>All Tasks</ToggleButton>
                                                <ToggleButton className='w-35' sx={{border : '2px solid gold' , color : "gold"}} color='primary' variant="outlined" value={"completed"}>Completed</ToggleButton>
                                                <ToggleButton className='w-35' sx={{border : '2px solid gold' , color : "gold"}} color='primary' variant="outlined" value={"non-completed"}>Uncompleted</ToggleButton>
                                            </ToggleButtonGroup>
                                    </ThemeProvider>
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

            <div className="w-[95%] h-[480px] mt-10 p-2 m-auto border-4 border-green-600 rounded-2xl flex flex-col gap-5 overflow-y-auto scroll">
                {AddMyTask}
            </div>

            <div className='w-[95%] m-auto p-2 mt-2'>
                <Stack direction={'row'} spacing={3} className=' justify-center'>
                    <ThemeProvider theme={theme}>
                        <TextField value={taskTitle}
                        onChange={(event)=>{
                            setTaskTitle(event.target.value)
                        }}
                        id="outlined-basic" className='w-full' label="Outlined" sx={{'& .MuiOutlinedInput-root': {'& fieldset': {},color: 'white'}}}  placeholder='Write Your Task' variant="outlined" focused />
                    </ThemeProvider>
                    <Button onClick={handelAddTask} disabled={taskTitle.length ===0} variant="contained" color='success' endIcon={<SendIcon className=' rotate-270' />}>
                        Send
                    </Button>
                </Stack>
            </div>
        </>
    )
}
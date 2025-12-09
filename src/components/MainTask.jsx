import * as React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { SendTaskContext } from '../contexts/SendTaskContext';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function MainTask({sendTasks}){
    const {sendTask , setSendTask} = useContext(SendTaskContext);

    function HandelBtnClick(){
        const updatedTask = sendTask.map((task)=>{
            if(task.id == sendTasks.id){
                task.complete = !task.complete
            }
            return task
    })
    setSendTask(updatedTask)
    localStorage.setItem("sendTask" , JSON.stringify(updatedTask))
    }

    const [open, setOpen] = React.useState(false);
    const [update, setUpdate] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickOpenUpdate = () => {
        setUpdate(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseUpdate = () => {
        setUpdate(false);
    };

    function deleteTask(){
        const updatedTsk = sendTask.filter((task)=>{
            return task.id !== sendTasks.id
        })
        setSendTask(updatedTsk);
        localStorage.setItem("sendTask" , JSON.stringify(updatedTsk))
    }

    const [updateSendTask , setUpdateSendTask] = useState({
        id: sendTasks.id,
        title: sendTasks.title
    });

    function updateTask(){
        const updatingTask = sendTask.map((task)=>{
            if(task.id == updateSendTask.id){
                return {...task , title : updateSendTask.title};
            }else{
                return task
            }
        })
        setSendTask(updatingTask)
        localStorage.setItem("sendTask" , JSON.stringify(updatingTask))
        setUpdate(false)
    }

    const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    console.log(email);
    handleClose();}

    return(
        <>
            <Grid container spacing={2} className='w-full border-4 bg-red-6000 border-yellow-500 text-center rounded-2xl p-5 text-white hover:py-10 duration-300'>
                <Grid size={5}>
                    <Stack direction={'row'} spacing={2} className='justify-center m-auto'>
                        <button onClick={handleClickOpen} className='cursor-pointer'><DeleteOutlineIcon className='text-[#ffc200] hover:text-red-600 hover:scale-120 hover:-rotate-10' sx={{width : '40px' , height : '40px' , transition : '0.5s'}} /></button>
                        <button onClick={handleClickOpenUpdate} className='cursor-pointer'><CreateOutlinedIcon className='text-[#ffc200] p-1 border-2 border-[#ffc200] rounded-full hover:text-blue-600 hover:border-blue-600 hover:scale-120 hover:-rotate-10' sx={{width : '40px' , height : '40px' , transition : '0.5s'}} /></button>
                        <button onClick={()=> HandelBtnClick()} className='cursor-pointer'><CheckOutlinedIcon className='text-[#ffc200] p-1 border-2 border-[#ffc200] rounded-full hover:text-green-600 hover:border-green-600 hover:scale-120 hover:-rotate-10' sx={{width : '40px' , height : '40px' , transition : '0.5s' , background : sendTasks.complete ? "green" : "transparent"}} /></button>
                    </Stack>
                </Grid>
                <Grid size={7}>
                    <Typography className='text-[#ffc200]' sx={{textDecoration : sendTasks.complete ? "line-through" : "none" , fontSize : 'xx-large'}}>{sendTasks.title}</Typography>
                </Grid>
            </Grid>

            <React.Fragment>
            <Dialog
                open={open}
                slots={{
                transition: Transition,
                }}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle className='font1'>{"Certainly the deletion process ?"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Once you delete a task, you will not be able to retrieve it later.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={deleteTask}>OK</Button>
                </DialogActions>
            </Dialog>
            </React.Fragment>

            <React.Fragment>
                <Dialog open={update} onClose={handleClose}>
                    <DialogTitle>Update Task</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Write your new task . Write carefully to avoid any problems when there are many tasks .
                    </DialogContentText>
                    <form id="subscription-form" onSubmit={handleSubmit}>
                        <TextField
                        value={updateSendTask.title}
                        onChange={(e)=>{
                            setUpdateSendTask({...updateSendTask , title : e.target.value})
                        }}
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Updating Your Task"
                        type="text"
                        fullWidth
                        variant="standard"
                        />
                    </form>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleCloseUpdate}>Cancel</Button>
                    <Button onClick={updateTask} type="submit" form="subscription-form">
                        Ok
                    </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </>
    )
}
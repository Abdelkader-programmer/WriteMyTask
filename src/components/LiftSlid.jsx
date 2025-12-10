import '../App.css';
import * as React from 'react';
import FormatListNumberedSharpIcon from '@mui/icons-material/FormatListNumberedSharp';
import Switch from '@mui/material/Switch';
import ComputerIcon from '@mui/icons-material/Computer';
import FacebookIcon from '@mui/icons-material/Facebook';
const label = { inputProps: { 'aria-label': 'Color switch demo' } };
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Collapse from '@mui/material/Collapse';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function LiftSlide(){
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
    setChecked((prev) => !prev);
    };

    const isMobile = useMediaQuery('(max-width:767px)');
    const content = (
        <>
            <div className='mt-10 w-full text-center'>
                <p className='text-3xl text-[#ffc200] font1 text-center'>By :</p>
                <p className='text-3xl text-[#ffc200] font1 text-center'>Abdelkader Elshehawy</p>
                <p className='text-3xl text-[#ffc200] font1 text-center'>Frontend Developer</p>
                <ComputerIcon className='text-[#ffc200] mt-2' sx={{width : '50px' , height : '50px'}} />
            </div>
            <div className='w-full mt-10'>
                <div className='w-full h-[50px] flex gap-10 justify-center items-center'>
                    <a href="https://www.facebook.com/share/16fv1Xr1uu/" target="_blank" className='' title='Facebook'><FacebookIcon className='text-[#ffc200] hover:-translate-y-2 hover:scale-120' sx={{width : '60px' , height : '60px' , transition : '0.5s'}} /></a>
                    <p className='text-3xl text-[#ffc200] font1'>&</p>
                    <a href="https://github.com/Abdelkader-programmer" target="_blank" className='' title='GitHub'><GitHubIcon className='text-[#ffc200] hover:-translate-y-2 hover:scale-120' sx={{width : '60px' , height : '60px' , transition : '0.5s'}} /></a>
                </div>
            </div>
            <div className='w-full mt-10'>
                <div className='w-full h-[50px] flex gap-10 justify-center items-center'>
                    <a href="https://www.linkedin.com/in/abdelkader-mahmoud-921805303/" target="_blank" className='' title='LinkedIn'><LinkedInIcon className='text-[#ffc200] hover:-translate-y-2 hover:scale-120' sx={{width : '60px' , height : '60px' , transition : '0.5s'}} /></a>
                    <p className='text-3xl text-[#ffc200] font1'>&</p>
                    <a href="https://www.instagram.com/bboddaa9098/profilecard/?igsh=ZXhqcmM4MGxvcXcw" target="_blank" className='' title='Instagram'><InstagramIcon className='text-[#ffc200] hover:-translate-y-2 hover:scale-120' sx={{width : '60px' , height : '60px' , transition : '0.5s'}} /></a>
                </div>
            </div>
        </>
    )

    return(
        <>
            <div className='mt-5 text-center'>
                <FormatListNumberedSharpIcon className='text-[#ffc200]' sx={{width : '50px' , height : '50px'}} />
                <h1 className='font1 text-6xl text-center text-[#ffc200] mt-3'>My</h1>
                <h1 className='font1 text-6xl text-center text-[#ffc200] mt-3'>Task List</h1>
            </div>
            {isMobile && (
                <div className='w-full m-auto text-center'>
                    <div className='w-[70px] bg-transparent m-auto border-2 border-[#ffc200] rounded-2xl mt-10'>
                        <Switch {...label} color='default' checked={checked} onChange={handleChange} />
                    </div>
                </div>
            )}
            {isMobile ? (
                <Collapse in={checked}>
                    {content}
                </Collapse>
            ) : (
                content
            )}
        </>
    )
}
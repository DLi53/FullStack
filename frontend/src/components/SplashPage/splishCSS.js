import './splishCss.css'
import Video from './PinterestCover.mov'
import LoginFormModal from '../LoginFormModal'


const SplishCss = () => {

    let video = document.getElementById("myVideo")





    return ( 
        <div >
            <video autoPlay muted loop id="myVideo" >
                <source src="https://imstresst-dev.s3.amazonaws.com/PinterestMov/PinterestCover.mov" type="video/mp4"/>
            </video>

            
        </div>
     );
}
 
export default SplishCss;
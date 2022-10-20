import './splishCss.css'
import Video from './PinterestCover.mov'


const SplishCss = () => {

    let video = document.getElementById("myVideo")

    // video.play()

    // const playVideo = () => {
    //     video.play()
    // }

    return ( 
        <div >
            <video autoPlay muted loop id="myVideo" >
                {/* <source src={Video} type="video/mp4"/> */}
                <source src="https://imstresst-dev.s3.amazonaws.com/PinterestMov/PinterestCover.mov" type="video/mp4"/>

            </video>
        </div>
     );
}
 
export default SplishCss;
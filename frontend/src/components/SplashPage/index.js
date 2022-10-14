import SplashPics from "./splashpics";
import './SplashPage.css'
import splash from './ezgif.com-gif-maker.gif'

const SplashPage = () => {

    // const pics = []
    // for(let i = 0 ; i < 10; i++) {
    //     pics.push(<SplashPics/>)
    // }

    return ( 
        <div className="splashPage" >
            <img className="SPLISH" src={splash} alt="" />
            {/* <h1>Test Test Test Splish Splash Page</h1>
            <SplashPics></SplashPics>
            <SplashPics></SplashPics>
            <SplashPics></SplashPics> */}

        </div>
     );
}
 
export default SplashPage;
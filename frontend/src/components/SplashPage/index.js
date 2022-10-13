import SplashPics from "./splashpics";

const SplashPage = () => {

    // const pics = []
    // for(let i = 0 ; i < 10; i++) {
    //     pics.push(<SplashPics/>)
    // }

    return ( 
        <div className="splashPage">
            <h1>Test Test Test Splish Splash Page</h1>
            {/* {pics} */}
            <SplashPics></SplashPics>
            <SplashPics></SplashPics>
            <SplashPics></SplashPics>

        </div>
     );
}
 
export default SplashPage;
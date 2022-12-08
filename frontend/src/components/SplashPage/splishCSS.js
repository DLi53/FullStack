import './splishCss.css'
import Video from './PinterestCover.mov'
import LoginFormModal from '../LoginFormModal'
import { useEffect, useState } from 'react'



const SplishCss = () => {


    return ( 
        // <div >
        //     <video autoPlay muted loop id="myVideo" >
        //         <source src="https://imstresst-dev.s3.amazonaws.com/PinterestMov/PinterestCover.mov" type="video/mp4"/>
        //     </video>
        // </div>

        <div className="splish-page">
            <div className="splish-titles">
                <div>Get your next</div>
                <div className="animated-text">
                    <div className="destination-title">Thrilling Adventure</div>
                    <div className="treat-title">Delicious Treat</div>
                    <div className="pet-title">Furry Animal</div>
                    <div className="furniture-title">Polished Furniture</div>
                </div>
            </div>
            <div className="splish-pins-section">
                <div className="splish-columns" id="column1">
                    <div className="splish-pics destination-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b1.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b2.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics treat-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p1.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p2.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics pet-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Red+Pet/r1.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Red+Pet/r2.jpg" />
                        </div>
                    </div>

                    <div className="splish-pics furniture-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/White+Furniture/w1.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/White+Furniture/w2.jpg" />
                        </div>
                    </div>
                </div>

                <div className="splish-columns" id="column2">
                    <div className="splish-pics destination-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b3.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b4.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics treat-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p3.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p4.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics pet-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Red+Pet/r3.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Red+Pet/r4.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics furniture-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/White+Furniture/w3.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/White+Furniture/w4.jpg" />
                        </div>
                    </div>                    
                </div>

                <div className="splish-columns" id="column3">
                    <div className="splish-pics destination-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b5.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b6.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics treat-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p5.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p6.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics pet-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Red+Pet/r5.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Red+Pet/r6.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics furniture-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/White+Furniture/w5.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/White+Furniture/w6.jpg" />
                        </div>
                    </div>
                </div>

                <div className="splish-columns" id="column4">
                    <div className="splish-pics destination-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b7.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b8.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics treat-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p7.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p8.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics pet-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Red+Pet/r7.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Red+Pet/r8.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics furniture-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/White+Furniture/w7.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/White+Furniture/w8.jpg" />
                        </div>
                    </div>
                </div>

                <div className="splish-columns" id="column5">
                    <div className="splish-pics destination-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b9.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b10.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics treat-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p9.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p10.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics pet-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Red+Pet/r9.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Red+Pet/r10.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics furniture-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/White+Furniture/w9.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/White+Furniture/w10.jpg" />
                        </div>
                    </div>
                </div>

                <div className="splish-columns" id="column6">
                    <div className="splish-pics destination-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b11.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b12.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics treat-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p11.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p12.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics pet-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Red+Pet/r11.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Red+Pet/r12.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics furniture-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/White+Furniture/w11.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/White+Furniture/w12.jpg" />
                        </div>
                    </div>
                </div>

                <div className="splish-columns" id="column7">
                    <div className="splish-pics destination-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b13.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b14.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics treat-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p13.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p14.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics pet-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Red+Pet/r13.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/Red+Pet/r14.jpg" />
                        </div>
                    </div>
                    <div className="splish-pics furniture-pics">
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/White+Furniture/w13.jpg" />
                        </div>
                        <div className="splish-pin">
                            <img src="https://imstresst-dev.s3.amazonaws.com/White+Furniture/w14.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="splish-gradient"></div>
        </div>
     );
}
 
export default SplishCss;
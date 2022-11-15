import './Loading.css'

const Loading = () => {
    return ( 
        <div className="loading">
            <div className="Loadings">Loading</div> 
            {/* <div className="lds-loader"><div></div><div></div><div></div></div> */}
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
     );
}
 
export default Loading;
import './Loading.css'

const Loading = () => {
    return ( 
        <div className="loading">
            Loading...
            <div className="lds-loader"><div></div><div></div><div></div></div>
        </div>
     );
}
 
export default Loading;
import './Loading.css'

const Loading = () => {
    return ( 
        <div className="loading">
            Loading...
            <div class="lds-loader"><div></div><div></div><div></div></div>
        </div>
     );
}
 
export default Loading;
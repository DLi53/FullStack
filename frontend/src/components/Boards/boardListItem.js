const BoardListItem = ({board}) => {
    return ( 
        <div className="BoardListItem">
            {board.id}
            {board.title}
            {board.userId}
        </div>
     );
}
 
export default BoardListItem;
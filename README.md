<p align="center">
  <img width="330" height="100" src="https://github.com/DLi53/MyIntrest/blob/main/app/assets/images/MainLogo.png">
</p>

## Overview

[MyIntrest](https://myintrest.herokuapp.com/#/) is a [Pinterest](https://www.pinterest.com/) clone that creates a platform for users to create and pin ideas and pictures onto their boards 

## Technologies

* Javascript
* React
* Redux
* Ruby
* Ruby on Rails
* PostgreSQL
* AWS S3
* Heroku
* Masonry Library

## Previews

### Splash Page

![](https://github.com/DLi53/MyIntrest/blob/main/app/assets/images/SplashPage.gif)


### Index Page

![](https://github.com/DLi53/MyIntrest/blob/main/app/assets/images/IndexPage.gif)

### Images

![](https://github.com/DLi53/MyIntrest/blob/main/app/assets/images/ImageCRUD.gif)

### Board

![](https://github.com/DLi53/MyIntrest/blob/main/app/assets/images/BoardsPic.png)

### Comments

![](https://github.com/DLi53/MyIntrest/blob/main/app/assets/images/Comments.gif)


## Code Snippets 

Below is a code snippet of the Image Controller to Create, Read, Update, and Destroy and Image on the backend. These codes communicate with the database to activate their specific tasks

```ruby
def index
    @images = Image.all
    render :index
end

def show
    @image = Image.find(params[:id])
    render :show
end

def create
    @image = Image.new(image_params)

    if @image.save
        pin = Pin.create!({image_id: @image.id, board_id: current_user.boards.first.id})
        render :show
    else
        render json: ["somethings wrong"]
    end
end

def update
    @image = Image.find(params[:id])
    
    if @image.update(image_params)
        render :show
    else
        render json: @image.errors.full_messages
    end
end

def destroy
    @image = Image.find(params[:id])

    if @image && @image.destroy
        render json: ["Pin is Gone"]
    else
        render json: ["Pin dont exist"]
    end
end
```

Below is a code snippet of the creation of comments form on the front end with react. With the use of react hooks like useDispatch, useSelector, useParams, and useState, it can grab different slices of state to display the current user icons, current photo ID, the values that the user inputs and dispatch it to the backend to create a new comment.

```javascript
const CreateComment = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const currentUserId = useSelector(state => state.session.user)
    const [description, setDescription] = useState('')
    const [refresh, setRefresh] = useState(false)

    const handleSubmit =() => {
        dispatch(createComment({
            description: description,
            image_id: id
        }))
        setRefresh(true)
    }

    useEffect(() => {
        dispatch(fetchComments())
    },[refresh])
    
    return ( 
        <form className="createComment" onSubmit={handleSubmit}>
            <img className="profileIconComment" 
                src={currentUserId && currentUserId.profilePicUrl}/>
            <input type="text" 
                className="descriptionInput" 
                value={description} 
                placeholder="Your comment here" 
                onChange = {(e) => setDescription(e.target.value)}/>
            <input type="submit" value="Done"  className="doneComment"/>
        </form>
     );
}
 
export default CreateComment;
```

## Future Plans

* Follows
* Search Bar

## Credits

* Pinterest
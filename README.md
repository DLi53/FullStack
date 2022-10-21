<p align="center">
  <img width="300" height="300" src="./frontend/src/assets/images/wink-xxl.png">
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

## Previews

### Splash Page

![](https://github.com/DLi53/myintrest/blob/main/app/assets/images/splashpage.gif)

### Images

<!-- ![](https://github.com/deborahwei/pinteresting/blob/main/app/assets/images/pins.gif) -->

### Comments

<!-- ![](https://github.com/deborahwei/pinteresting/blob/main/app/assets/images/comment.gif) -->

## Code Snippets 

With the use of **useState** and passing the set state function to the children component I was able to create search bars and board selection dropdown. This process was necessary in order for search results to render according to the query entered by the user in the search bar or for the appropriate board name to display when the user clicked on that board. 

```
const updateCurrentSelection = (selection) => {
    setCurrentSelection(selection);
    setOpen(false);
}

// child component

<div onClick={()=> updateCurrentSelection(board)}  // on click the current selection is updated
className={`mini-board-preview-container ${show ? "" : "hide"}`}>
    <div className='mini-board-cover'>
        <MiniBoardCover pinId={board?.pins[0]}/>
    </div>
    <div className="mini-board-info">
        <div className='mini-board-name'>
            <h1>{abbreviate(board?.name ?? "Profile", MAX_NAME_CHAR)}</h1>
        </div>
        <div>
            <SavePinButton boardId={board?.id} pinId={pin?.id}/>
        </div>
    </div>
</div>

```

#users_controller.rb

def find_by_username
@user = User.find_by(username: params[:username])
  render "api/users/show"
end

```
There was also the use of **transactions** in my Ruby routes that were necessary because the pin creator was not on the Pin class itself but rather within a combinational joins table. So in order to ensure that every pin that was created had a creator a transaction was necessary, since the pin would not be able to be created without that association being created. 


```
# pin.rb

def self.safe_create(pin_params, user_id)
  pin = Pin.new(pin_params)

  Pin.transaction do
    if pin.save!
        pins_user = PinsUser.new({
            user_id: user_id,
            pin_id: pin.id,
            created_pin: true,
            saved_pin: false
        })
        if pins_user.save!
            return [pin, "success"]
        else
          return [pin, pins_user.errors.full_messages]
        end
    else
      return [pin, pin.errors.full_messages]
    end
  end

  return [pin, "Bad params"]
end

```
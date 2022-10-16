json.user do
    json.extract! @user, :id, :username
    # json.profilePicUrl @user.profilepic.url
    
    if @user.profilepic.attached?
        json.profilePicUrl @user.profilepic.url
    else
        json.profilePicUrl "https://imstresst-dev.s3.amazonaws.com/Profile+Pics/demoIcon.jpg"
    end

end
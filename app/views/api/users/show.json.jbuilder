json.user do
    json.extract! @user, :id, :username, :followers, :following, :boards, :comments, :pins
    # json.profilePicUrl @user.profilepic.url
        json.followers @user.followers.ids
        json.following @user.following.ids

        # json.board @user.boards

    if @user.profilepic.attached?
        json.profilePicUrl @user.profilepic.url
    else
        json.profilePicUrl "https://imstresst-dev.s3.amazonaws.com/Profile+Pics/demoIcon.jpg"
    end



end
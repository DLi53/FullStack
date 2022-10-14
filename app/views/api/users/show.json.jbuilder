json.user do
    json.extract! @user, :id, :username
    json.profilePicUrl @user.profilepic.url

end
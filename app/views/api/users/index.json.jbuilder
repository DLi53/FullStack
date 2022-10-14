@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :username
        json.profilePicUrl user.profilepic.url
    end
end
@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :username
        
        if user.profilepic.attached?
            json.profilePicUrl user.profilepic.url
        else
            json.profilePicUrl "https://imstresst-dev.s3.amazonaws.com/Profile+Pics/demoIcon.jpg"
        end

    end
end
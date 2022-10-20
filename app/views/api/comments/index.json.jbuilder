@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :description, :image_id, :commenter_id, :created_at


    end
end
@images.each do |image|
    json.set! image.id do
        json.extract! image, :id, :title, :description, :uploader_id
        json.photoUrl image.photo.url

    end
end
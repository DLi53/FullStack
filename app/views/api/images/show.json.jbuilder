json.extract! @image, :id, :title, :description, :uploader_id 
json.photoUrl @image.photo.url

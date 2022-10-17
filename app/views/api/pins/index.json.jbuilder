@pins.each do |pin|
    json.set! pin.id do
        json.extract! pin, :image_id, :board_id

        json.extract! pin.image.photo, :record


    end
end
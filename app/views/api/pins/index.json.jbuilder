@pins.each do |pin|
    json.set! pin.id do
        json.extract! pin, :image_id, :board_id
    end
end
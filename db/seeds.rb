# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Board.destroy_all
Pin.destroy_all
User.destroy_all
Comment.destroy_all
Follow.destroy_all

user1 = User.create!({username: "demoUser", password: "Password1"})
user2 = User.create!({username: "Daniel", password: "Password1"})
user3 = User.create!({username: "Vivian", password: "Password1"})
user4 = User.create!({username: "Matthew1", password: "Password1"})
user5 = User.create!({username: "Victor1", password: "Password1"})

board1 = Board.create!({title: 'test1', user_id: user1.id})
board11 = Board.create!({title: 'test11', user_id: user1.id})
board2 = Board.create!({title: 'test2', user_id: user2.id})
board22 = Board.create!({title: 'test22', user_id: user2.id})
board3 = Board.create!({title: 'test3', user_id: user3.id})
board33 = Board.create!({title: 'test33', user_id: user3.id})

image1 = Image.create!({title: 'image1', description: 'imageDesc', uploader_id: user1.id})
image2 = Image.create!({title: 'image2', description: 'imageDesc', uploader_id: user2.id})
image3 = Image.create!({title: 'image3', description: 'imageDesc', uploader_id: user3.id})
image4 = Image.create!({title: 'image4', description: 'imageDesc', uploader_id: user4.id})
image5 = Image.create!({title: 'image5', description: 'imageDesc', uploader_id: user5.id})
image6 = Image.create!({title: 'image6', description: 'imageDesc', uploader_id: user1.id})
image7 = Image.create!({title: 'image7', description: 'imageDesc', uploader_id: user2.id})
image8 = Image.create!({title: 'image8', description: 'imageDesc', uploader_id: user3.id})
image9 = Image.create!({title: 'image9', description: 'imageDesc', uploader_id: user4.id})
image10 = Image.create!({title: 'image10', description: 'imageDesc', uploader_id: user5.id})


pin1 = Pin.create!({image_id: image1.id, board_id: board1.id})
pin2 = Pin.create!({image_id: image1.id, board_id: board2.id})
pin3 = Pin.create!({image_id: image2.id, board_id: board1.id})


comment1 = Comment.create!({description: 'woaw', commenter_id: user1.id, image_id: image1.id})
comment2 = Comment.create!({description: 'woaw2', commenter_id: user2.id, image_id: image1.id})

follow1 = Follow.create!({follower_id: user1.id, followee_id: user2.id})
follow2 = Follow.create!({follower_id: user2.id, followee_id: user1.id})



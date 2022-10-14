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

userDemo = User.create!({username: "DemoUser", password: "Password1"})
user1 = User.create!({username: "DemoUser2", password: "Password1"})
user2 = User.create!({username: "Daniel", password: "Password1"})
user3 = User.create!({username: "Vivian", password: "Password1"})
user4 = User.create!({username: "Matthew", password: "Password1"})
user5 = User.create!({username: "Victor", password: "Password1"})

userPooh = User.create!({username: "Pooh", password: "Password1"})
profilepic_1 = URI.open("https://imstresst-dev.s3.amazonaws.com/Profile+Pics/profilepic1.jpg")
userPooh.profilepic.attach(io: profilepic_1, filename:"profilepic1")
userPooh.save!

userRabbit = User.create!({username: "Rabbit", password: "Password1"})
profilepic_2 = URI.open("https://imstresst-dev.s3.amazonaws.com/Profile+Pics/profilepic2.jpg")
userRabbit.profilepic.attach(io: profilepic_2, filename:"profilepic2")
userRabbit.save!

userTigger = User.create!({username: "Tigger", password: "Password1"})
profilepic_3 = URI.open("https://imstresst-dev.s3.amazonaws.com/Profile+Pics/profilepic3.jpg")
userTigger.profilepic.attach(io: profilepic_3, filename:"profilepic3")
userTigger.save!

userPiglet = User.create!({username: "Piglet", password: "Password1"})
profilepic_4 = URI.open("https://imstresst-dev.s3.amazonaws.com/Profile+Pics/profilepic4.jpg")
userPiglet.profilepic.attach(io: profilepic_4, filename:"profilepic4")
userPiglet.save!

userEeyore = User.create!({username: "Eeyore", password: "Password1"})
profilepic_5 = URI.open("https://imstresst-dev.s3.amazonaws.com/Profile+Pics/profilepic5.jpg")
userEeyore.profilepic.attach(io: profilepic_5, filename:"profilepic5")
userEeyore.save!

userRoo = User.create!({username: "Roo", password: "Password1"})
profilepic_6 = URI.open("https://imstresst-dev.s3.amazonaws.com/Profile+Pics/profilepic6.jpg")
userRoo.profilepic.attach(io: profilepic_6, filename:"profilepic6")
userRoo.save!

userOwl = User.create!({username: "Owl", password: "Password1"})
profilepic_7 = URI.open("https://imstresst-dev.s3.amazonaws.com/Profile+Pics/profilepic7.jpg")
userOwl.profilepic.attach(io: profilepic_7, filename:"profilepic7")
userOwl.save!

userKanga = User.create!({username: "Kanga", password: "Password1"})
profilepic_8 = URI.open("https://imstresst-dev.s3.amazonaws.com/Profile+Pics/profilepic8.jpg")
userKanga.profilepic.attach(io: profilepic_8, filename:"profilepic8")
userKanga.save!

userChristopherRobin = User.create!({username: "ChristopherRobin", password: "Password1"})
profilepic_9 = URI.open("https://imstresst-dev.s3.amazonaws.com/Profile+Pics/profilepic9.jpg")
userChristopherRobin.profilepic.attach(io: profilepic_9, filename:"profilepic9")
userChristopherRobin.save!

userBee = User.create!({username: "Bee", password: "Password1"})
profilepic_10 = URI.open("https://imstresst-dev.s3.amazonaws.com/Profile+Pics/profilepic10.jpg")
userBee.profilepic.attach(io: profilepic_10, filename:"profilepic10")
userBee.save!




boardDemo = Board.create!({title: 'testDemo', user_id: userDemo.id})
board1 = Board.create!({title: 'test1', user_id: user1.id})
board11 = Board.create!({title: 'test11', user_id: user1.id})
board2 = Board.create!({title: 'test2', user_id: user2.id})
board22 = Board.create!({title: 'test22', user_id: user2.id})
board3 = Board.create!({title: 'test3', user_id: user3.id})
board33 = Board.create!({title: 'test33', user_id: user3.id})

# B Destinations ---------------

image_b1 = Image.create!({title: "Image_b1 Destination", description: "imageDesc", uploader_id: userPooh.id})
photo_b1 = URI.open("https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b1.jpg")
image_b1.photo.attach(io: photo_b1, filename:"b1")
image_b1.save!

image_b2 = Image.create!({title: "Image_b2 Destination", description: "imageDesc", uploader_id: userPooh.id})
photo_b2 = URI.open("https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b2.jpg")
image_b2.photo.attach(io: photo_b2, filename:"b2")
image_b2.save!

image_b3 = Image.create!({title: "Image_b3 Destination", description: "imageDesc", uploader_id: userPooh.id})
photo_b3 = URI.open("https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b3.jpg")
image_b3.photo.attach(io: photo_b3, filename:"b3")
image_b3.save!

image_b4 = Image.create!({title: "Image_b4 Destination", description: "imageDesc", uploader_id: userPooh.id})
photo_b4 = URI.open("https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b4.jpg")
image_b4.photo.attach(io: photo_b4, filename:"b4")
image_b4.save!

image_b5 = Image.create!({title: "Image_b5 Destination", description: "imageDesc", uploader_id: userPooh.id})
photo_b5 = URI.open("https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b5.jpg")
image_b5.photo.attach(io: photo_b5, filename:"b5")
image_b5.save!

image_b6 = Image.create!({title: "Image_b6 Destination", description: "imageDesc", uploader_id: userPooh.id})
photo_b6 = URI.open("https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b6.jpg")
image_b6.photo.attach(io: photo_b6, filename:"b6")
image_b6.save!

image_b7 = Image.create!({title: "Image_b7 Destination", description: "imageDesc", uploader_id: userPooh.id})
photo_b7 = URI.open("https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b7.jpg")
image_b7.photo.attach(io: photo_b7, filename:"b7")
image_b7.save!

image_b8 = Image.create!({title: "Image_b8 Destination", description: "imageDesc", uploader_id: userPooh.id})
photo_b8 = URI.open("https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b8.jpg")
image_b8.photo.attach(io: photo_b8, filename:"b8")
image_b8.save!

image_b9 = Image.create!({title: "Image_b9 Destination", description: "imageDesc", uploader_id: userPooh.id})
photo_b9 = URI.open("https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b9.jpg")
image_b9.photo.attach(io: photo_b9, filename:"b9")
image_b9.save!

image_b10 = Image.create!({title: "Image_b10 Destination", description: "imageDesc", uploader_id: userPooh.id})
photo_b10 = URI.open("https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b10.jpg")
image_b10.photo.attach(io: photo_b10, filename:"b10")
image_b10.save!


image_b11 = Image.create!({title: "Image_b11 Destination", description: "imageDesc", uploader_id: userPooh.id})
photo_b11 = URI.open("https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b11.jpg")
image_b11.photo.attach(io: photo_b11, filename:"b11")
image_b11.save!

image_b12 = Image.create!({title: "Image_b12 Destination", description: "imageDesc", uploader_id: userPooh.id})
photo_b12 = URI.open("https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b12.jpg")
image_b12.photo.attach(io: photo_b12, filename:"b12")
image_b12.save!

image_b13 = Image.create!({title: "Image_b13 Destination", description: "imageDesc", uploader_id: userPooh.id})
photo_b13 = URI.open("https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b13.jpg")
image_b13.photo.attach(io: photo_b13, filename:"b13")
image_b13.save!

image_b14 = Image.create!({title: "Image_b14 Destination", description: "imageDesc", uploader_id: userPooh.id})
photo_b14 = URI.open("https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b14.jpg")
image_b14.photo.attach(io: photo_b14, filename:"b14")
image_b14.save!

image_b15 = Image.create!({title: "Image_b15 Destination", description: "imageDesc", uploader_id: userPooh.id})
photo_b15 = URI.open("https://imstresst-dev.s3.amazonaws.com/Blue+Destination/b15.jpg")
image_b15.photo.attach(io: photo_b15, filename:"b15")
image_b15.save!



# P Treats ---------------

image_p1 = Image.create!({title: "Image_p1 Treats", description: "imageDesc", uploader_id: userPiglet.id})
photo_p1 = URI.open("https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p1.jpg")
image_p1.photo.attach(io: photo_p1, filename:"p1")
image_p1.save!

image_p2 = Image.create!({title: "Image_p2 Treats", description: "imageDesc", uploader_id: userPiglet.id})
photo_p2 = URI.open("https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p2.jpg")
image_p2.photo.attach(io: photo_p2, filename:"p2")
image_p2.save!

image_p3 = Image.create!({title: "Image_p3 Treats", description: "imageDesc", uploader_id: userPiglet.id})
photo_p3 = URI.open("https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p3.jpg")
image_p3.photo.attach(io: photo_p3, filename:"p3")
image_p3.save!

image_p4 = Image.create!({title: "Image_p4 Treats", description: "imageDesc", uploader_id: userPiglet.id})
photo_p4 = URI.open("https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p4.jpg")
image_p4.photo.attach(io: photo_p4, filename:"p4")
image_p4.save!

image_p5 = Image.create!({title: "Image_p5 Treats", description: "imageDesc", uploader_id: userPiglet.id})
photo_p5 = URI.open("https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p5.jpg")
image_p5.photo.attach(io: photo_p5, filename:"p5")
image_p5.save!

image_p6 = Image.create!({title: "Image_p6 Treats", description: "imageDesc", uploader_id: userPiglet.id})
photo_p6 = URI.open("https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p6.jpg")
image_p6.photo.attach(io: photo_p6, filename:"p6")
image_p6.save!

image_p7 = Image.create!({title: "Image_p7 Treats", description: "imageDesc", uploader_id: userPiglet.id})
photo_p7 = URI.open("https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p7.jpg")
image_p7.photo.attach(io: photo_p7, filename:"p7")
image_p7.save!

image_p8 = Image.create!({title: "Image_p8 Treats", description: "imageDesc", uploader_id: userPiglet.id})
photo_p8 = URI.open("https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p8.jpg")
image_p8.photo.attach(io: photo_p8, filename:"p8")
image_p8.save!

image_p9 = Image.create!({title: "Image_p9 Treats", description: "imageDesc", uploader_id: userPiglet.id})
photo_p9 = URI.open("https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p9.jpg")
image_p9.photo.attach(io: photo_p9, filename:"p9")
image_p9.save!

image_p10 = Image.create!({title: "Image_p10 Treats", description: "imageDesc", uploader_id: userPiglet.id})
photo_p10 = URI.open("https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p10.jpg")
image_p10.photo.attach(io: photo_p10, filename:"p10")
image_p10.save!

image_p11 = Image.create!({title: "Image_p11 Treats", description: "imageDesc", uploader_id: userPiglet.id})
photo_p11 = URI.open("https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p11.jpg")
image_p11.photo.attach(io: photo_p11, filename:"p11")
image_p11.save!

image_p12 = Image.create!({title: "Image_p12 Treats", description: "imageDesc", uploader_id: userPiglet.id})
photo_p12 = URI.open("https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p12.jpg")
image_p12.photo.attach(io: photo_p12, filename:"p12")
image_p12.save!

image_p13 = Image.create!({title: "Image_p13 Treats", description: "imageDesc", uploader_id: userPiglet.id})
photo_p13 = URI.open("https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p13.jpg")
image_p13.photo.attach(io: photo_p13, filename:"p13")
image_p13.save!

image_p14 = Image.create!({title: "Image_p14 Treats", description: "imageDesc", uploader_id: userPiglet.id})
photo_p14 = URI.open("https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p14.jpg")
image_p14.photo.attach(io: photo_p14, filename:"p14")
image_p14.save!

image_p15 = Image.create!({title: "Image_p15 Treats", description: "imageDesc", uploader_id: userPiglet.id})
photo_p15 = URI.open("https://imstresst-dev.s3.amazonaws.com/Pink+Treat/p15.jpg")
image_p15.photo.attach(io: photo_p15, filename:"p15")
image_p15.save!

# R Pets ---------------

image_r1 = Image.create!({title: "Image_r1 Pets", description: "imageDesc", uploader_id: userTigger.id})
photo_r1 = URI.open("https://imstresst-dev.s3.amazonaws.com/Red+Pet/r1.jpg")
image_r1.photo.attach(io: photo_r1, filename:"r1")
image_r1.save!

image_r2 = Image.create!({title: "Image_r2 Pets", description: "imageDesc", uploader_id: userTigger.id})
photo_r2 = URI.open("https://imstresst-dev.s3.amazonaws.com/Red+Pet/r2.jpg")
image_r2.photo.attach(io: photo_r2, filename:"r2")
image_r2.save!

image_r3 = Image.create!({title: "Image_r3 Pets", description: "imageDesc", uploader_id: userTigger.id})
photo_r3 = URI.open("https://imstresst-dev.s3.amazonaws.com/Red+Pet/r3.jpg")
image_r3.photo.attach(io: photo_r3, filename:"r3")
image_r3.save!

image_r4 = Image.create!({title: "Image_r4 Pets", description: "imageDesc", uploader_id: userTigger.id})
photo_r4 = URI.open("https://imstresst-dev.s3.amazonaws.com/Red+Pet/r4.jpg")
image_r4.photo.attach(io: photo_r4, filename:"r4")
image_r4.save!

image_r5 = Image.create!({title: "Image_r5 Pets", description: "imageDesc", uploader_id: userTigger.id})
photo_r5 = URI.open("https://imstresst-dev.s3.amazonaws.com/Red+Pet/r5.jpg")
image_r5.photo.attach(io: photo_r5, filename:"r5")
image_r5.save!

image_r6 = Image.create!({title: "Image_r6 Pets", description: "imageDesc", uploader_id: userTigger.id})
photo_r6 = URI.open("https://imstresst-dev.s3.amazonaws.com/Red+Pet/r6.jpg")
image_r6.photo.attach(io: photo_r6, filename:"r6")
image_r6.save!

image_r7 = Image.create!({title: "Image_r7 Pets", description: "imageDesc", uploader_id: userTigger.id})
photo_r7 = URI.open("https://imstresst-dev.s3.amazonaws.com/Red+Pet/r7.jpg")
image_r7.photo.attach(io: photo_r7, filename:"r7")
image_r7.save!

image_r8 = Image.create!({title: "Image_r8 Pets", description: "imageDesc", uploader_id: userTigger.id})
photo_r8 = URI.open("https://imstresst-dev.s3.amazonaws.com/Red+Pet/r8.jpg")
image_r8.photo.attach(io: photo_r8, filename:"r8")
image_r8.save!

image_r9 = Image.create!({title: "Image_r9 Pets", description: "imageDesc", uploader_id: userTigger.id})
photo_r9 = URI.open("https://imstresst-dev.s3.amazonaws.com/Red+Pet/r9.jpg")
image_r9.photo.attach(io: photo_r9, filename:"r9")
image_r9.save!

image_r10 = Image.create!({title: "Image_r10 Pets", description: "imageDesc", uploader_id: userTigger.id})
photo_r10 = URI.open("https://imstresst-dev.s3.amazonaws.com/Red+Pet/r10.jpg")
image_r10.photo.attach(io: photo_r10, filename:"r10")
image_r10.save!

image_r11 = Image.create!({title: "Image_r11 Pets", description: "imageDesc", uploader_id: userTigger.id})
photo_r11 = URI.open("https://imstresst-dev.s3.amazonaws.com/Red+Pet/r11.jpg")
image_r11.photo.attach(io: photo_r11, filename:"r11")
image_r11.save!

image_r12 = Image.create!({title: "Image_r12 Pets", description: "imageDesc", uploader_id: userTigger.id})
photo_r12 = URI.open("https://imstresst-dev.s3.amazonaws.com/Red+Pet/r12.jpg")
image_r12.photo.attach(io: photo_r12, filename:"r12")
image_r12.save!

image_r13 = Image.create!({title: "Image_r13 Pets", description: "imageDesc", uploader_id: userTigger.id})
photo_r13 = URI.open("https://imstresst-dev.s3.amazonaws.com/Red+Pet/r13.jpg")
image_r13.photo.attach(io: photo_r13, filename:"r13")
image_r13.save!

image_r14 = Image.create!({title: "Image_r14 Pets", description: "imageDesc", uploader_id: userTigger.id})
photo_r14 = URI.open("https://imstresst-dev.s3.amazonaws.com/Red+Pet/r14.jpg")
image_r14.photo.attach(io: photo_r14, filename:"r14")
image_r14.save!

image_r15 = Image.create!({title: "Image_r15 Pets", description: "imageDesc", uploader_id: userTigger.id})
photo_r15 = URI.open("https://imstresst-dev.s3.amazonaws.com/Red+Pet/r15.jpg")
image_r15.photo.attach(io: photo_r15, filename:"r15")
image_r15.save!




# W Furniture ---------------

image_w1 = Image.create!({title: "Image_w1 Furniture", description: "imageDesc", uploader_id: userEeyore.id})
photo_w1 = URI.open("https://imstresst-dev.s3.amazonaws.com/White+Furniture/w1.jpg")
image_w1.photo.attach(io: photo_w1, filename:"w1")
image_w1.save!

image_w2 = Image.create!({title: "Image_w2 Furniture", description: "imageDesc", uploader_id: userEeyore.id})
photo_w2 = URI.open("https://imstresst-dev.s3.amazonaws.com/White+Furniture/w2.jpg")
image_w2.photo.attach(io: photo_w2, filename:"w2")
image_w2.save!

image_w3 = Image.create!({title: "Image_w3 Furniture", description: "imageDesc", uploader_id: userEeyore.id})
photo_w3 = URI.open("https://imstresst-dev.s3.amazonaws.com/White+Furniture/w3.jpg")
image_w3.photo.attach(io: photo_w3, filename:"w3")
image_w3.save!

image_w4 = Image.create!({title: "Image_w4 Furniture", description: "imageDesc", uploader_id: userEeyore.id})
photo_w4 = URI.open("https://imstresst-dev.s3.amazonaws.com/White+Furniture/w4.jpg")
image_w4.photo.attach(io: photo_w4, filename:"w4")
image_w4.save!

image_w5 = Image.create!({title: "Image_w5 Furniture", description: "imageDesc", uploader_id: userEeyore.id})
photo_w5 = URI.open("https://imstresst-dev.s3.amazonaws.com/White+Furniture/w5.jpg")
image_w5.photo.attach(io: photo_w5, filename:"w5")
image_w5.save!

image_w6 = Image.create!({title: "Image_w6 Furniture", description: "imageDesc", uploader_id: userEeyore.id})
photo_w6 = URI.open("https://imstresst-dev.s3.amazonaws.com/White+Furniture/w6.jpg")
image_w6.photo.attach(io: photo_w6, filename:"w6")
image_w6.save!

image_w7 = Image.create!({title: "Image_w7 Furniture", description: "imageDesc", uploader_id: userEeyore.id})
photo_w7 = URI.open("https://imstresst-dev.s3.amazonaws.com/White+Furniture/w7.jpg")
image_w7.photo.attach(io: photo_w7, filename:"w7")
image_w7.save!

image_w8 = Image.create!({title: "Image_w8 Furniture", description: "imageDesc", uploader_id: userEeyore.id})
photo_w8 = URI.open("https://imstresst-dev.s3.amazonaws.com/White+Furniture/w8.jpg")
image_w8.photo.attach(io: photo_w8, filename:"w8")
image_w8.save!

image_w9 = Image.create!({title: "Image_w9 Furniture", description: "imageDesc", uploader_id: userEeyore.id})
photo_w9 = URI.open("https://imstresst-dev.s3.amazonaws.com/White+Furniture/w9.jpg")
image_w9.photo.attach(io: photo_w9, filename:"w9")
image_w9.save!

image_w10 = Image.create!({title: "Image_w10 Furniture", description: "imageDesc", uploader_id: userEeyore.id})
photo_w10 = URI.open("https://imstresst-dev.s3.amazonaws.com/White+Furniture/w10.jpg")
image_w10.photo.attach(io: photo_w10, filename:"w10")
image_w10.save!

image_w11 = Image.create!({title: "Image_w11 Furniture", description: "imageDesc", uploader_id: userEeyore.id})
photo_w11 = URI.open("https://imstresst-dev.s3.amazonaws.com/White+Furniture/w11.jpg")
image_w11.photo.attach(io: photo_w11, filename:"w11")
image_w11.save!

image_w12 = Image.create!({title: "Image_w12 Furniture", description: "imageDesc", uploader_id: userEeyore.id})
photo_w12 = URI.open("https://imstresst-dev.s3.amazonaws.com/White+Furniture/w12.jpg")
image_w12.photo.attach(io: photo_w12, filename:"w12")
image_w12.save!

image_w13 = Image.create!({title: "Image_w13 Furniture", description: "imageDesc", uploader_id: userEeyore.id})
photo_w13 = URI.open("https://imstresst-dev.s3.amazonaws.com/White+Furniture/w13.jpg")
image_w13.photo.attach(io: photo_w13, filename:"w13")
image_w13.save!

image_w14 = Image.create!({title: "Image_w14 Furniture", description: "imageDesc", uploader_id: userEeyore.id})
photo_w14 = URI.open("https://imstresst-dev.s3.amazonaws.com/White+Furniture/w14.jpg")
image_w14.photo.attach(io: photo_w14, filename:"w14")
image_w14.save!

image_w15 = Image.create!({title: "Image_w15 Furniture", description: "imageDesc", uploader_id: userEeyore.id})
photo_w15 = URI.open("https://imstresst-dev.s3.amazonaws.com/White+Furniture/w15.jpg")
image_w15.photo.attach(io: photo_w15, filename:"w15")
image_w15.save!



# image1 = Image.create!({title: 'image1', description: 'imageDesc', uploader_id: user1.id})
# image2 = Image.create!({title: 'image2', description: 'imageDesc', uploader_id: user2.id})
# image3 = Image.create!({title: 'image3', description: 'imageDesc', uploader_id: user3.id})
# image4 = Image.create!({title: 'image4', description: 'imageDesc', uploader_id: user4.id})
# image5 = Image.create!({title: 'image5', description: 'imageDesc', uploader_id: user5.id})
# image6 = Image.create!({title: 'image6', description: 'imageDesc', uploader_id: user1.id})
# image7 = Image.create!({title: 'image7', description: 'imageDesc', uploader_id: user2.id})
# image8 = Image.create!({title: 'image8', description: 'imageDesc', uploader_id: user3.id})
# image9 = Image.create!({title: 'image9', description: 'imageDesc', uploader_id: user4.id})
# image10 = Image.create!({title: 'image10', description: 'imageDesc', uploader_id: user5.id})

pin1 = Pin.create!({image_id: image_w1.id, board_id: board1.id})
pin2 = Pin.create!({image_id: image_w1.id, board_id: board2.id})
pin3 = Pin.create!({image_id: image_w2.id, board_id: board1.id})

comment1 = Comment.create!({description: 'woaw', commenter_id: user1.id, image_id: image_w1.id})
comment2 = Comment.create!({description: 'woaw2', commenter_id: user2.id, image_id: image_w1.id})

follow1 = Follow.create!({follower_id: user1.id, followee_id: user2.id})
follow2 = Follow.create!({follower_id: user2.id, followee_id: user1.id})



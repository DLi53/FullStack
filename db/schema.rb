# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_10_150815) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boards", force: :cascade do |t|
    t.string "title", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_boards_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "commenter_id"
    t.bigint "image_id"
    t.index ["commenter_id"], name: "index_comments_on_commenter_id"
    t.index ["image_id"], name: "index_comments_on_image_id"
  end

  create_table "follows", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "follower_id"
    t.bigint "followee_id"
    t.index ["followee_id"], name: "index_follows_on_followee_id"
    t.index ["follower_id"], name: "index_follows_on_follower_id"
  end

  create_table "images", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "uploader_id"
    t.index ["uploader_id"], name: "index_images_on_uploader_id"
  end

  create_table "pins", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "image_id"
    t.bigint "board_id"
    t.index ["board_id"], name: "index_pins_on_board_id"
    t.index ["image_id"], name: "index_pins_on_image_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "boards", "users"
  add_foreign_key "comments", "images"
  add_foreign_key "comments", "users", column: "commenter_id"
  add_foreign_key "follows", "users", column: "followee_id"
  add_foreign_key "follows", "users", column: "follower_id"
  add_foreign_key "images", "users", column: "uploader_id"
  add_foreign_key "pins", "boards"
  add_foreign_key "pins", "images"
end

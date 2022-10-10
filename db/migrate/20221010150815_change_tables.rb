class ChangeTables < ActiveRecord::Migration[7.0]

  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true

    create_table :images do |t|
      t.string :title, null: false
      t.string :description
      t.timestamps
    end
    add_reference :images, :uploader, index: true, foreign_key: { to_table: :users }

    create_table :boards do |t|
      t.string :title, null: false
      t.timestamps
    end
    add_reference :boards, :user, index: true, foreign_key: true


    create_table :pins do |t|
      t.timestamps
    end
    add_reference :pins, :image, index: true, foreign_key: true
    add_reference :pins, :board, index: true, foreign_key: true

    create_table :comments do |t|
      t.string :description, null: false
      t.timestamps
    end
    add_reference :comments, :commenter, index: true, foreign_key: { to_table: :users}
    add_reference :comments, :image, index: true, foreign_key: {to_table: :images}


    create_table :follows do |t|
      t.timestamps
    end
    add_reference :follows, :follower, index: true, foreign_key: { to_table: :users }
    add_reference :follows, :followee, index: true, foreign_key: { to_table: :users }
  
  end
  
end

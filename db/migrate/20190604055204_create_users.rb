class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :login
      t.string :display_name
      t.string :password
      t.string :role_id

      t.timestamps
    end
  end
end

class CreatePermissions < ActiveRecord::Migration[5.2]
  def change
    create_table :permissions do |t|
      t.string :controller_name
      t.string :action_name
      t.string :category
      t.string :module_name
      t.string :component

      t.timestamps
    end
  end
end

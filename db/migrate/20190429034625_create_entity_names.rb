class CreateEntityNames < ActiveRecord::Migration[5.2]
  def change
    create_table :entity_names do |t|
      t.string :entities_name, :null => false
      t.string :child_id
      t.timestamps
    end
  end
end

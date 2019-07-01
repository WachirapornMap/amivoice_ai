class CreateEntityValues < ActiveRecord::Migration[5.2]
  def change
    create_table :entity_values do |t|
      t.string :keyword
      t.string :tag
      t.string :synonym, :limit => 500
      t.integer :entity_id, :null => false

      t.timestamps
    end
  end
end

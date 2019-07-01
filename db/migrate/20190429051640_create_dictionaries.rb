class CreateDictionaries < ActiveRecord::Migration[5.2]
  def change
    create_table :dictionaries do |t|
      t.string :word, :null => false
      t.string :pronunciation
      t.string :class_name
      t.decimal :class_prob, precision: 2, scale: 1 
      t.decimal :cost, precision: 2, scale: 1 

      t.timestamps
    end
  end
end

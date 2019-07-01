class CreateDictionariesTmps < ActiveRecord::Migration[5.2]
  def change
    create_table :dictionaries_tmps do |t|
      t.integer :ref_id
      t.string :word
      t.string :pronunciation
      t.string :class_name
      t.decimal :class_prob, precision: 2, scale: 1 
      t.decimal :cost, precision: 2, scale: 1 
      t.integer :version_id
      t.datetime :version_date

      t.timestamps
    end
  end
end

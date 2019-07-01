class CreateEntityValueTmps < ActiveRecord::Migration[5.2]
  def change
    create_table :entity_value_tmps do |t|
      t.string :keyword
      t.string :tag
      t.string :synonym
      t.integer :entity_id
      t.integer :ref_id
      t.integer :version_id
      t.datetime :version_date

      t.timestamps
    end
  end
end

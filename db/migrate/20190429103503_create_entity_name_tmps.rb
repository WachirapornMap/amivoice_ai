class CreateEntityNameTmps < ActiveRecord::Migration[5.2]
  def change
    create_table :entity_name_tmps do |t|
      t.integer :ref_id
      t.string :entities_name
      t.integer :version_id
      t.datetime :version_date

      t.timestamps
    end
  end
end

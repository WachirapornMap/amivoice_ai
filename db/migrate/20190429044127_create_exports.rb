class CreateExports < ActiveRecord::Migration[5.2]
  def change
    create_table :exports do |t|
      t.string :version_name
      t.string :remark
      t.string :version_type, :limit => 3
      t.integer :status, :default => 1

      t.timestamps
    end
  end
end

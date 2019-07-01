class CreateCategoryMasters < ActiveRecord::Migration[5.2]
  def change
    create_table :category_masters do |t|
      t.string :category_name

      t.timestamps
    end
  end
end

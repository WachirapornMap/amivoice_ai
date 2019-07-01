class CreateIntentions < ActiveRecord::Migration[5.2]
  def change
    create_table :intentions do |t|
    t.string "intention_name", limit: 150
    t.bigint "intention_code"
    t.string "description"
    t.string "datasource", limit: 8
    t.string "created_by", limit: 150
    t.datetime "created_date", comment: "username who created this data"
    t.string "updated_by", limit: 150
    t.datetime "updated_date", comment: "username who updated this data"
      t.timestamps
    end
  end
end

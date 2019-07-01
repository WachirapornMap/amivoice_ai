class AddIntentionTagToIntentions < ActiveRecord::Migration[5.2]
  def change
    add_column :intentions, :intention_tag, :text
  end
end

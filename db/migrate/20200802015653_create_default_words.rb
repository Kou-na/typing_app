class CreateDefaultWords < ActiveRecord::Migration[6.0]
  def change
    create_table :default_words do |t|
      t.string :question
      t.string :answer
      t.string :target, null: false
      t.timestamps
    end
  end
end

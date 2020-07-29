class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :question
      t.string :answer
      t.string :target, null: false
      t.references :user
      t.timestamps
    end
  end
end

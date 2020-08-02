class DefaultWord < ApplicationRecord
  validates :question, presence: true, length: { maximum: 18}
  validates :answer, presence: true, length: { maximum: 18}
  validates :target, presence: true, length: { maximum: 18}
end

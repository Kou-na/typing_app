class StaticPagesController < ApplicationController
  def home
    @word = Word.find_by(user_id: current_user.id)
  end
end

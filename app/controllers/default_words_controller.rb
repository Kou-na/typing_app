class DefaultWordsController < ApplicationController

  def default_game
    @questions = DefaultWord.select(:question).pluck(:question)
    @answers = DefaultWord.select(:answer).pluck(:answer)
    @targets = DefaultWord.select(:target).pluck(:target)
  end
end

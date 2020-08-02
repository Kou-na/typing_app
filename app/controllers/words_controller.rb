class WordsController < ApplicationController
  before_action :set_current_users_word

  def game
    @questions = current_user.words.select(:question).pluck(:question)
    @answers = current_user.words.select(:answer).pluck(:answer)
    @targets = current_user.words.select(:target).pluck(:target)
  end

  def new
    @word = Word.new
  end

  def create
    @word = Word.new(word_params)
    if @word.save
      redirect_to user_path(current_user.id)
      flash[:notice] = "登録しました！"
    else
      render :new
    end
  end

  def edit
    @word = Word.find(params[:id])
  end

  def update
    word = Word.find(params[:id])
    if word.update(word_params)
      redirect_to user_path(current_user.id)
      flash[:notice] = "更新しました！"
    else
      render 'edit'
    end
  end

  def destroy
    Word.find(params[:id]).destroy
    flash[:success] = "削除しました！"
    redirect_to user_path(current_user.id)
  end

  private
  def word_params
    params.permit(:question, :answer, :target, :user_id).merge(user_id: current_user.id)
  end
end

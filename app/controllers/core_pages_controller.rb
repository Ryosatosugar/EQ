class CorePagesController < ApplicationController
  def top
    @form_questions = FormQuestion.all
    @q = FormQuestion.ransack(params[:q])
    @questions = @q.result(distinct: true)
  end
end

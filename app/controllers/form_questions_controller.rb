class FormQuestionsController < ApplicationController
  before_action :set_form_question, only: %i[ show edit update destroy ]

  # GET /form_questions or /form_questions.json
  def index
    @form_questions = FormQuestion.all
    @questions = @q.result(distinct: true)
  end

  # GET /form_questions/1 or /form_questions/1.json
  def show
  end

  # GET /form_questions/new
  def new
    @form_question = FormQuestion.new
  end

  # GET /form_questions/1/edit
  def edit
  end

  # POST /form_questions or /form_questions.json
  def create
    @form_question = FormQuestion.new(form_question_params)

    respond_to do |format|
      if @form_question.save
        format.html { redirect_to form_question_url(@form_question), notice: "Form question was successfully created." }
        format.json { render :show, status: :created, location: @form_question }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @form_question.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /form_questions/1 or /form_questions/1.json
  def update
    respond_to do |format|
      if @form_question.update(form_question_params)
        format.html { redirect_to form_question_url(@form_question), notice: "Form question was successfully updated." }
        format.json { render :show, status: :ok, location: @form_question }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @form_question.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /form_questions/1 or /form_questions/1.json
  def destroy
    @form_question.destroy

    respond_to do |format|
      format.html { redirect_to form_questions_url, notice: "Form question was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_form_question
      @form_question = FormQuestion.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def form_question_params
      params.require(:form_question).permit(:name_form_question, :subject_form_question, :content_form_question, :image_form_question, :user_id)
    end
end

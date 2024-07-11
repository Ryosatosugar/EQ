class FormAnswersController < ApplicationController
  before_action :set_form_answer, only: %i[ show edit update destroy ]

  # GET /form_answers or /form_answers.json
  def index
    @form_answers = FormAnswer.all
  end

  # GET /form_answers/1 or /form_answers/1.json
  def show
  end

  # GET /form_answers/new
  def new
    @form_answer = FormAnswer.new
  end

  # GET /form_answers/1/edit
  def edit
  end

  # POST /form_answers or /form_answers.json
  def create
    @form_answer = FormAnswer.new(form_answer_params)

    respond_to do |format|
      if @form_answer.save
        format.html { redirect_to form_answer_url(@form_answer), notice: "Form answer was successfully created." }
        format.json { render :show, status: :created, location: @form_answer }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @form_answer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /form_answers/1 or /form_answers/1.json
  def update
    respond_to do |format|
      if @form_answer.update(form_answer_params)
        format.html { redirect_to form_answer_url(@form_answer), notice: "Form answer was successfully updated." }
        format.json { render :show, status: :ok, location: @form_answer }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @form_answer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /form_answers/1 or /form_answers/1.json
  def destroy
    @form_answer.destroy

    respond_to do |format|
      format.html { redirect_to form_answers_url, notice: "Form answer was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_form_answer
      @form_answer = FormAnswer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def form_answer_params
      params.require(:form_answer).permit(:user_id, :form_question_id, :name_form_answer, :content_form_answer, :image_form_answer, :best_answer_form_answer)
    end
end

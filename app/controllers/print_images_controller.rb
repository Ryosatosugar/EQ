class PrintImagesController < ApplicationController
  before_action :set_print_image, only: %i[ show edit update destroy ]

  # GET /print_images or /print_images.json
  def index
    @print_images = PrintImage.all
  end

  # GET /print_images/1 or /print_images/1.json
  def show
  end

  # GET /print_images/new
  def new
    @print_image = PrintImage.new
  end

  # GET /print_images/1/edit
  def edit
  end

  # POST /print_images or /print_images.json
  def create
    @print_image = PrintImage.new(print_image_params)

    respond_to do |format|
      if @print_image.save
        format.html { redirect_to @print_image, notice: "Print image was successfully created." }
        format.json { render :show, status: :created, location: @print_image }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @print_image.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /print_images/1 or /print_images/1.json
  def update
    respond_to do |format|
      if @print_image.update(print_image_params)
        format.html { redirect_to @print_image, notice: "Print image was successfully updated." }
        format.json { render :show, status: :ok, location: @print_image }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @print_image.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /print_images/1 or /print_images/1.json
  def destroy
    @print_image.destroy

    respond_to do |format|
      format.html { redirect_to print_images_path, status: :see_other, notice: "Print image was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_print_image
      @print_image = PrintImage.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def print_image_params
      params.require(:print_image).permit(:image, :user_id, :category_id, :event_id)
    end
end

class PrintImagesController < ApplicationController
  before_action :set_print_image, only: %i[ show edit update destroy download_image ]

  # GET /print_images or /print_images.json
  def index
    @print_images = PrintImage.all
  end

  def user_index
    logger.debug "Params: #{params[:q]}"
    @q = Event.ransack(params[:q])
    logger.debug "Ransack Query: #{@q.inspect}"
    @search_results = @q.result(distinct: true).includes(print_images: { thumbnail_image_attachment: :blob })
  end

  # GET /print_images/1 or /print_images/1.json
  def show
  end

  def user_show
    @print_image = PrintImage.find(params[:id])
  end

  def download
    @print_image = PrintImage.find(params[:id])
    image = @print_image.image_for_download.find(params[:image_id])
    if image.present?
      redirect_to image.service_url(disposition: 'attachment')
    else
      redirect_to @print_image, alert: '画像が見つかりませんでした。'
    end
  end

  # GET /print_images/new
  def new
    @print_image = PrintImage.new
    @events = Event.all
    @categories = Category.all
  end

  # GET /print_images/1/edit
  def edit
  end

  # POST /print_images or /print_images.json
  def create
    @print_image = PrintImage.new(print_image_params)
    @events = Event.all
    @categories = Category.all
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
      params.require(:print_image).permit(:title, :thumbnail_image, :user_id, :category_id, :event_id, :explanation, :image_for_download => [])
    end
end

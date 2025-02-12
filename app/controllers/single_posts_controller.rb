class SinglePostsController < ApplicationController
  before_action :authenticate_user!, only: %i[ index show new edit create update destroy ]
  before_action :set_single_post, only: %i[ show edit update destroy ]

  # GET /single_posts or /single_posts.json
  def index
    @single_posts = SinglePost.all
  end

  def user_index
    @single_posts = SinglePost.all
  end

  # GET /single_posts/1 or /single_posts/1.json
  def show
  end

  def user_show
    @single_post = SinglePost.find(params[:id])
  end


  # GET /single_posts/new
  def new
    @single_post = SinglePost.new
  end

  # GET /single_posts/1/edit
  def edit
  end

  # POST /single_posts or /single_posts.json
  def create
    @single_post = SinglePost.new(single_post_params)

    respond_to do |format|
      if @single_post.save
        format.html { redirect_to @single_post, notice: "Single post was successfully created." }
        format.json { render :show, status: :created, location: @single_post }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @single_post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /single_posts/1 or /single_posts/1.json
  def update
    respond_to do |format|
      if @single_post.update(single_post_params)
        format.html { redirect_to @single_post, notice: "Single post was successfully updated." }
        format.json { render :show, status: :ok, location: @single_post }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @single_post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /single_posts/1 or /single_posts/1.json
  def destroy
    @single_post.destroy

    respond_to do |format|
      format.html { redirect_to single_posts_path, status: :see_other, notice: "Single post was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_single_post
      @single_post = SinglePost.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def single_post_params
      params.require(:single_post).permit(:single_post_image, :user_id, :category_id, :event_id, :name, :subject, :content)
    end
end

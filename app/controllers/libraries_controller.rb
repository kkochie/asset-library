class LibrariesController < ApplicationController

  def index
    render json: @current_user.assets
  end
end

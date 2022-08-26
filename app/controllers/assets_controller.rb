class AssetsController < ApplicationController

  # GET /assets
  def index
    render json: @current_user.assets
  end

  # POST /assets
  def create
    asset = @current_user.assets.create!(asset_params)
    render json: asset, status: :created
  end

  # DELETE /assets/:id
  def destroy
    asset = find_asset
    asset.destroy
    head :no_content
  end


  private

  def asset_params
    params.permit(:url, :caption, :title, :source)
  end

  def find_asset
    Asset.find(params[:id])
end

end

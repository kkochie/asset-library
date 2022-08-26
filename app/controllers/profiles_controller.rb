class ProfilesController < ApplicationController

  # GET /profiles
  def index
    render json: @current_user.profile
  end

  # PATCH /profiles/:id
  def update
      profile = Profile.find_by(id: params[:id])
    if profile
      profile.update(profile_params)
      render json: profile
    else
      render json: { error: "Profile not found" }, status: :not_found
    end
  end



  private

  def profile_params
		params.permit(:name, :avatar, :bio, :location)
	end

end

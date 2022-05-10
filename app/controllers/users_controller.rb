class UsersController < ApplicationController

    def show 
        current_user = User.find(session[:current_user])
        render json: current_user
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :username, :password)
    end
end

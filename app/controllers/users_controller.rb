class UsersController < ApplicationController
    wrap_parameters format: []

    def show
        current_user = User.find(session[:current_user])
        render json: current_user
    end

    def show_tickets
        user = User.find(params[:id])
        render json: user.shows
    end

    def create
        if User.exists?(username: params[:username])
            render json: {error: 'Username not available. Try a different username.'}, status: :not_acceptable 
        else
            user = User.create!(user_params)
            render json: user, status: :created
        end
    end

    def update
        user = User.find(params[:id])
        if user.username == params[:username]
            user.update!(user_params)
            render json: user, status: :created
        elsif User.exists?(username: params[:username])
            render json: {error: 'Username not available. Try a different username.'}, status: :not_acceptable 
        else
            user.update!(user_params)
            render json: user, status: :created
        end
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :username, :password)
    end
end

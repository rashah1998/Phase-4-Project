class SessionsController < ApplicationController

    def login
        user = User.find_by(username:params[:username])
        if user
            if user.authenticate(params[:password])
                session[:current_user] = user.id 
                render json: user
            else
                render json: {error: "Invalid Password"}, status: :unauthorized
            end
        else
            render json: {error: "User not found"}, status: :not_found 
        end
    end

    def logout
        session.delete :current_user
    end
end
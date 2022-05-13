class ShowsController < ApplicationController

    def index
        render json: Show.all
    end

    def destroy
        current_user = User.find(session[:current_user])
        ticket = Ticket.find_by(user_id: current_user.id, show_id: params[:id])
        ticket.destroy
    end

end

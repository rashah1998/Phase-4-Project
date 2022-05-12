class TicketsController < ApplicationController
    wrap_parameters format: []
    
    def create 
        ticket = Ticket.create!(ticket_params)
        render json: ticket, status: :created
    end

    private

    def ticket_params
        params.permit(:user_id, :show_id)
    end

end

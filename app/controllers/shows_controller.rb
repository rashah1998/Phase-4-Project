class ShowsController < ApplicationController

    def show
        render json: Show.all
    end
    
end

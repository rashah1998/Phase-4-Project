class ComediansController < ApplicationController

    def show 
        render json: Comedian.all
    end
    
end

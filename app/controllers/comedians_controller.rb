class ComediansController < ApplicationController

    def index
        render json: Comedian.all
    end

end

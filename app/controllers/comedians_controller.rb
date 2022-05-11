class ComediansController < ApplicationController

    def index
        render json: Comedian.all
    end

    def show
        comedian = Comedian.find(params[:id])
        render json: comedian, serializer: ComedianWithShowsSerializer
    end

end

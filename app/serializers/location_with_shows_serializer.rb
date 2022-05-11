class LocationWithShowsSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :number_of_seats, :website_url, :image_url, :shows

  def shows 
    ActiveModelSerializers::SerializableResource.new(object.shows,each_serializer:ShowWithComedianSerializer)
  end
end

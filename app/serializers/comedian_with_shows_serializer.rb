class ComedianWithShowsSerializer < ActiveModel::Serializer
  attributes :id, :name, :about_info, :website_url, :image_url, :shows

  def shows 
    ActiveModelSerializers::SerializableResource.new(object.shows,each_serializer:ShowWithLocationSerializer)
  end
end

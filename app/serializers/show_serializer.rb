class ShowSerializer < ActiveModel::Serializer
  attributes :id, :date_time, :price
  has_one :comedian
  has_one :location
end

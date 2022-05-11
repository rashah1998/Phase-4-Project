class ShowWithLocationSerializer < ActiveModel::Serializer
  attributes :id, :date_time, :price
  has_one :location
end

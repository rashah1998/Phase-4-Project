class ShowWithComedianSerializer < ActiveModel::Serializer
    attributes :id, :date_time, :price
    has_one :comedian
end

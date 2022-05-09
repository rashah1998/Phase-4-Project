class TicketSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :show
end

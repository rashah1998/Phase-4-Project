class Show < ApplicationRecord
  belongs_to :comedian
  belongs_to :location
  has_many :tickets
  has_many :users, through: :tickets
end

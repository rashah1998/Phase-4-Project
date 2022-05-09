class Comedian < ApplicationRecord
    has_many :shows
    has_many :locations, through: :shows
end

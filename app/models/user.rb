class User < ApplicationRecord
    has_many :tickets
    has_many :shows, through: :tickets
end

class User < ApplicationRecord
    has_many :tickets
    has_many :shows, through: :tickets
    has_secure_password
end

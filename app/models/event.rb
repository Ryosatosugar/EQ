class Event < ApplicationRecord
    has_many :print_images

    def self.ransackable_attributes(auth_object = nil)
        ["created_at", "event_name", "id", "updated_at"]
    end
end

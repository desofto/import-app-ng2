# frozen_string_literal: true

module API
  module V1
    module Entities
      class Company < Base
        expose :name
        expose :operations do |company|
          company.operations.count
        end
        expose :average_amount do |company|
          '%.2f' % company.average_amount
        end
        expose :highest_operation do |company|
          '%.2f' % company.highest_operation_in_current_month
        end
        expose :accepted do |company|
          company.accepted_operations
        end
      end
    end
  end
end

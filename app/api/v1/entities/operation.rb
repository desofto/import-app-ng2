# frozen_string_literal: true

module API
  module V1
    module Entities
      class Operation < Base
        expose :invoice_num
        expose :invoice_date, format_with: :iso_timestamp
        expose :operation_date, format_with: :iso_timestamp
        expose :amount
        expose :reporter
        expose :notes
        expose :status
        expose :categories do |operation|
          operation.categories.map(&:name).join(', ')
        end
      end
    end
  end
end

# frozen_string_literal: true

module API
  module V1
    class Company < Grape::API
      resources :companies do
        get do
          present ::Company.all
        end

        content_type :csv, 'text/csv'
        format :csv
        route_param :company_id do
          params do
            optional :filter, type: String
          end
          get 'operations' do
            companies = ::Company.all

            fields = {
              company:        'company.name',
              invoice_num:    'invoice_num',
              invoice_date:   'invoice_date',
              operation_date: 'operation_date',
              amount:         '"%.2f" % amount',
              reporter:       'reporter',
              notes:          'notes',
              status:         'status',
              kind:           'categories.map(&:name).join(";")'
            }

            company = ::Company.find(params[:company_id])
            operations = company.operations.includes(:categories)

            filter = params[:filter]
            operations = operations.search(filter) if filter.present?

            CSV.generate do |csv|
              csv << fields.keys
              operations.each do |operation|
                csv << fields.map do |_name, value|
                  operation.instance_eval(value)
                end
              end
            end
          end
        end
      end
    end
  end
end

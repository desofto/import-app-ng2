# frozen_string_literal: true

module API
  module V1
    class Operation < Grape::API
      resource :operations do
        params do
          requires :company_id, type: Integer
          optional :filter
        end
        get do
          company = ::Company.find(params[:company_id])
          operations = company.operations.includes(:categories)

          filter = params[:filter]
          operations = operations.search(filter) if filter.present?

          present operations
        end

        params do
          optional :file
        end
        post '/import' do
          ImportWorker.perform_async(params.dig(:file, :tempfile).path)
        end

        params do
          requires :jid, type: String
        end
        get '/stats' do
          container = SidekiqStatus::Container.load(params[:jid])

          container.payload.merge(status: container.status)
        end
      end
    end
  end
end

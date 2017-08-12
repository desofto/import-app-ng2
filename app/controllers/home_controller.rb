# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    respond_to do |format|
      format.html do
        if Rails.env.development?
          `rm -r public/app/*.js*`
          result = `yarn tsc --silent`
          if result.present?
            render plain: result.split("\n").join("<br />")
            return
          end
        end
        render file: '/public/app.html'
      end
    end
  end
end

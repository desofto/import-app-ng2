# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    respond_to do |format|
      format.html do
        if Rails.env.development?
          `rm -r public/app/*.js*`
          result = `#{Rails.root}/node_modules/.bin/tsc`
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

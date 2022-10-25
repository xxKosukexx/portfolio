module Api
  class BlogsController < ApplicationController
    def index
      blogs = Blog.all
      render json: { status: 'SUCCESS', message: 'Loaded blogs', data: blogs }
    end
  end
end

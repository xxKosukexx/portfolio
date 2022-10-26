module Api
  class BlogsController < ApplicationController
    def index
      blogs = Blog.all
      render json: { status: 'SUCCESS', message: 'Loaded blogs', data: blogs }
    end

    def show
      blog = Blog.find(params[:id])
      render json: { status: 'SUCCESS', message: 'Loaded blog', data: blog }
    end
  end
end

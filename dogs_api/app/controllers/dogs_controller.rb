# frozen_string_literal: true

class DogsController < ApplicationController
  def index
    if params['name']
      @dogs = Dog.where('name LIKE ?', "%#{params['name']}%")
      render json: @dogs
    else
      @dogs = Dog.all
      render json: @dogs
    end
  end
end

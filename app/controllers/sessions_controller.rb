class SessionsController < ApplicationController

  def destroy
    binding.pry
    session.delete :id
    binding.pry
  end

end

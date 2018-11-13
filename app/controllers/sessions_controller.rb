class SessionsController < ApplicationController

  def destroy
    session.delete :id
  end

end

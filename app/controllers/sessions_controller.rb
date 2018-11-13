class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def destroy
    session.delete :id
  end

end

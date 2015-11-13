class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception  #what is this????

  def ensure_logged_in       
    unless current_user
      flash[:alert] = "Please log in"
      redirect_to new_session_path
    end
  end

	private

  	def current_user
    	@current_user ||= User.find(session[:user_id]) if session[:user_id]    # @current_user is an instance variable. Defined in Application Controller. so it will be available throughout the instance.
  	                                                                         #http://www.rubyinside.com/what-rubys-double-pipe-or-equals-really-does-5488.html
    #binding.pry
    end

    # The method helper_method is to explicitly share some methods defined in the controller to make them available 
    # for the view. This is used for any method that you need to access from both controllers and helpers/views 
    # (standard helper methods are not available in controllers).
     
  	helper_method :current_user

	end

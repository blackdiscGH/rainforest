class UsersController < ApplicationController
  def new
  	  @user = User.new  # @user is an instance variable, it is an instance of User class. It has been instantiated but not loaded with any values. At this point it is just an object handler.
  end

  def create
  	 @user = User.new(user_params)
  	 if @user.save
      redirect_to products_url, notice: "Signed up!"
    else
      render "new"
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end

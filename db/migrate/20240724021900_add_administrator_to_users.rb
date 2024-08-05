class AddAdministratorToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :admin, :boolean, efault: false 
  end
end

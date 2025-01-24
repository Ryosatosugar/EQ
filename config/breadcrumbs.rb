crumb :top do
  link "ホーム", root_path
end

# 印刷テンプレートの一覧ページ
crumb :user_index do
  link "印刷テンプレート", print_images_user_index_path
  parent :top
end

# 印刷テンプレートの詳細ページ
crumb :user_show do
  link "印刷テンプレート", print_images_user_index_path
  parent :user_index
end
# crumb :projects do
#   link "Projects", projects_path
# end

# crumb :project do |project|
#   link project.name, project_path(project)
#   parent :projects
# end

# crumb :project_issues do |project|
#   link "Issues", project_issues_path(project)
#   parent :project, project
# end

# crumb :issue do |issue|
#   link issue.title, issue_path(issue)
#   parent :project_issues, issue.project
# end

# If you want to split your breadcrumbs configuration over multiple files, you
# can create a folder named `config/breadcrumbs` and put your configuration
# files there. All *.rb files (e.g. `frontend.rb` or `products.rb`) in that
# folder are loaded and reloaded automatically when you change them, just like
# this file (`config/breadcrumbs.rb`).
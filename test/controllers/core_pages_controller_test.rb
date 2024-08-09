require "test_helper"

class CorePagesControllerTest < ActionDispatch::IntegrationTest
  test "should get top" do
    get core_pages_top_url
    assert_response :success
  end
end

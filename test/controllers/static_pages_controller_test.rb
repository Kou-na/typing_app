require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  # titleで同じ文言を繰り返す時用
  def setup
    @base_title = "grow typing"
  end

  test "should get root" do
    get root_path
    assert_response :success
    assert_select "title", "Home | #{@base_title}"
  end

end

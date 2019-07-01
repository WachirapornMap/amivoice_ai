require 'test_helper'

class IntentionsControllerTest < ActionDispatch::IntegrationTest
  test "should get new_intention" do
    get intentions_new_intention_url
    assert_response :success
  end

end

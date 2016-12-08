json.searchResults do
  if @search_result.length > 0
    json.array! @search_result.order('username ASC'), :id, :username, :icon_url
  end
end

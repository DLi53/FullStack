class StaticPagesController < ApplicationController
  def frontend_index
    render file: Rails.root.join('public', 'index.html')
    # render 'api/boards/show.json.jbuilder'
    # render file: 'public/index.html'
  end

end
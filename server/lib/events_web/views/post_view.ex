defmodule EventsWeb.PostView do
  use EventsWeb, :view
  alias EventsWeb.PostView
  alias EventsWeb.UserView

  def render("index.json", %{posts: posts}) do
    %{data: render_many(posts, PostView, "post.json")}
  end

  def render("show.json", %{post: post}) do
    %{data: render_one(post, PostView, "post.json")}
  end
  
  def render("post.json", %{post: post}) do
    userr = if Ecto.assoc_loaded?(post.user) do
      render_one(post.user, UserView, "user.json")
    else
      nil
    end

    %{id: post.id,
      body: post.body,
      date: post.date,
      title: post.title,
      user: userr,
    }
  end
end


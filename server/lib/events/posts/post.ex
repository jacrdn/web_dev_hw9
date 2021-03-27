defmodule Events.Posts.Post do
  use Ecto.Schema
  import Ecto.Changeset

  schema "posts" do
    field :body, :string
    field :date, :string
    field :title, :string
    belongs_to :user, Events.Users.User
    timestamps()
  end

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, [:body, :date, :title, :user_id])
    |> validate_required([:body, :date, :title, :user_id])
  end
end

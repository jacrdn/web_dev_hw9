# seeds.exs

alias Events.Repo
alias Events.Users.User
alias Events.Posts.Post

defmodule Inject do

  def user(name, pass, email) do
    hash = Argon2.hash_pwd_salt(pass)
    Repo.insert!(%User{name: name, password_hash: hash, email: email})
  end
end

alice = Inject.user("alice", "test1", "alice@gmail.com")
bob = Inject.user("bob", "test2", "bob@gmail.com")
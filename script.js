function GithubAccount(name, email, username) {
  this.name = name;
  this.email = email;
  this.userName = username;
  this.repo = [];

  this.updateAccount = function (fullName, email) {
    if (fullName !== undefined) {
      this.name = fullName;
    }
    if (email !== undefined) {
      this.email = email;
    }
  };

  this.getRepos = function () {
    return this.repo;
  };

  this.createRepo = function (repoName, creator) {
    const repo = {
      name: repoName,
      creator: creator,
      createAt: Date.now(),
    };

    this.repo.push(repo);
  };
}

const user = new GithubAccount("Ariful islam", "me@email.com", "arifulbgt4");

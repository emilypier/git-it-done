var getUserReepos = function() {
  fetch("https://api.github.com/users/octocat/repos");
};

getUserReepos();
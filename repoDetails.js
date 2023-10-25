const allRepo = user.getRepos();

const aRepo = allRepo[0];

const element = document.getElementById("repoDetails");

// const repoName = document.createElement("h2");
// repoName.innerText = `Repo Name: ${aRepo.name}`;

// const creator = document.createElement("p");
// creator.innerText = `Creator: ${aRepo.creator}`;
// creator.style.color = "red";

// element.appendChild(repoName);
// element.appendChild(creator);

const handleClick = () => {};

element.innerHTML = `<div>
<h2 class="bg-nav" >Repo name: ${aRepo.name}</h2>
<p>creator: ${aRepo.creator}</p>
<button type="button" onclick="handleClick()">Update repo</button>
</div>`;

console.log("all repo: ", allRepo);

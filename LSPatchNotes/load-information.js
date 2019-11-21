fetch("https://api.github.com/repos/LeagueSandbox/GameServer/commits?per_page=5", {cache: "default"})
    .then(function(response)
    {
        return response.json();
    })
    .then(function(commitHistory)
    {
        commitHistory.forEach(
            function(commitJson)
            {
                CreateAndFillElements(commitJson, "gameServerCommitList");
            }
        )

        var commitList = document.getElementById("gameServerCommitList");
        
        var commitListButton = document.createElement("A");
        commitListButton.id = "patchnotesbutton";
        commitListButton.className = "btn btn-lg btn-block";
        commitListButton.href = "https://github.com/LeagueSandbox/GameServer/commits/indev"
        commitListButton.role = "button";
        commitListButton.textContent = "Full patch-notes list";
        commitListButton.style = "color: #d2eae5"

        commitList.appendChild(commitListButton);
})

function CreateAndFillElements(inputJson, listClassName)
{
    var commitUrl = inputJson.html_url;
    var commitDate = inputJson.commit.author.date.split("T")[0];
    var commitMessage = inputJson.commit.message;
    var commitAuthor = inputJson.author.login;
    var commitAuthorIcon = inputJson.author.avatar_url;

    var commitList = document.getElementById(listClassName);

    var commitMedia = document.createElement("LI");
    commitMedia.className = "media rounded p-3 my-3";

    var commitMediaBody = document.createElement("DIV")
    commitMediaBody.className = "media-body";

    var commitMediaImage = document.createElement("IMG");
    commitMediaImage.src = commitAuthorIcon;
    commitMediaImage.className = "align-self-center mr-3 rounded-circle";
    commitMediaImage.style = "width:64px"

    var commitMediaAuthor = document.createElement("H3");
    commitMediaAuthor.textContent = commitAuthor;

    var commitMediaDate = document.createElement("H6");
    commitMediaDate.textContent = commitDate;

    var commitMediaMessage = document.createElement("P");
    commitMediaMessage.textContent = commitMessage;

    commitMediaAuthor.appendChild(commitMediaDate);

    commitMediaBody.appendChild(commitMediaAuthor);
    commitMediaBody.appendChild(commitMediaMessage);

    commitMedia.appendChild(commitMediaImage);
    commitMedia.appendChild(commitMediaBody);

    commitMedia.onclick = function()
    {
        window.location.href = commitUrl;
    }

    commitList.appendChild(commitMedia);
}
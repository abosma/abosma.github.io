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
                CreateAndFillElements(commitJson);
            }
        )
    })

function CreateAndFillElements(inputJson)
{
    var commitUrl = inputJson.html_url;
    var commitMessage = inputJson.commit.message;
    var commitAuthor = inputJson.author.login;
    var commitAuthorIcon = inputJson.author.avatar_url;
    var commitAuthorLink = inputJson.author.html_url;

    var commitList = document.getElementsByClassName("commitList");
    var commitNode = document.createElement("LI");
    var commitAuthorImage = document.createElement("IMG");
    var commitAuthorName = document.createElement("H3");
    var commitAuthorNameText = document.createTextNode(commitAuthor);
    var commitListMessage = document.createElement("P");
    var commitListMessageText = document.createTextNode(commitMessage);

    commitAuthorImage.src = commitAuthorIcon;
    commitAuthorName.appendChild(commitAuthorNameText);
    commitAuthorName.href = commitAuthorLink;
    commitListMessage.appendChild(commitListMessageText);

    commitNode.appendChild(commitAuthorImage);
    commitNode.appendChild(commitAuthorName);
    commitNode.appendChild(commitListMessage);

    commitNode.onclick = function()
    {
        window.location.href = commitUrl;
    }

    commitList[0].appendChild(commitNode);
}
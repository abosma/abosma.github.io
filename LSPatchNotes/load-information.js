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
                CreateAndFillElements(commitJson, "gameServerCommitDiv");
            }
        )
})

fetch("https://api.github.com/repos/LeagueSandbox/LeagueSandbox-Default/commits?per_page=5", {cache: "default"})
    .then(function(response)
    {
        return response.json();
    })
    .then(function(commitHistory)
    {
        commitHistory.forEach(
            function(commitJson)
            {
                CreateAndFillElements(commitJson, "defaultContentCommitDiv");
            }
        )
})

function CreateAndFillElements(inputJson, listClassName)
{
    var commitUrl = inputJson.html_url;
    var commitDate = inputJson.commit.author.date.split("T")[0];
    var commitMessage = inputJson.commit.message;
    var commitAuthor = inputJson.author.login;
    var commitAuthorIcon = inputJson.author.avatar_url;
    var commitAuthorLink = inputJson.author.html_url;

    var commitList = document.getElementsByClassName(listClassName);
    var commitNode = document.createElement("LI");
    var commitAuthorImage = document.createElement("IMG");
    var commitAuthorName = document.createElement("H3");
    var commitAuthorNameText = document.createTextNode(commitAuthor);
    var commitDateElement = document.createElement("H2");
    var commitDateElementText = document.createTextNode(commitDate);
    var commitListMessage = document.createElement("P");
    var commitListMessageText = document.createTextNode(commitMessage);

    commitAuthorImage.src = commitAuthorIcon;
    commitAuthorName.appendChild(commitAuthorNameText);
    commitAuthorName.href = commitAuthorLink;
    commitListMessage.appendChild(commitListMessageText);
    commitDateElement.appendChild(commitDateElementText);

    commitNode.appendChild(commitAuthorImage);
    commitNode.appendChild(commitAuthorName);
    commitNode.appendChild(commitListMessage);
    commitNode.appendChild(commitDateElement);

    commitNode.onclick = function()
    {
        window.location.href = commitUrl;
    }

    commitList[0].appendChild(commitNode);
}
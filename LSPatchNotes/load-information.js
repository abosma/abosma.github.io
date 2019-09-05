fetch("https://api.github.com/repos/LeagueSandbox/GameServer/commits?per_page=5")
    .then(function(response)
    {
        return response.json();
    })
    .then(function(commitHistory)
    {
        commitHistory.forEach(
            function(commitJson)
            {
                var commitList = document.getElementsByClassName("commitList");

                var commitUrl = commitJson.html_url;
                var commitMessage = commitJson.commit.message;

                var commitAuthor = commitJson.author.login;
                var commitAuthorIcon = commitJson.author.avatar_url;
                var commitAuthorLink = commitJson.author.html_url;

                var commitNode = document.createElement("LI");
                
                var commitAuthorImage = document.createElement("IMG");
                commitAuthorImage.src = commitAuthorIcon;

                var commitAuthorName = document.createElement("H3");
                var commitAuthorNameText = document.createTextNode(commitAuthor);
                
                commitAuthorName.appendChild(commitAuthorNameText);
                commitAuthorName.href = commitAuthorLink;

                var commitListMessage = document.createElement("P");
                var commitListMessageText = document.createTextNode(commitMessage);

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
        )
    })
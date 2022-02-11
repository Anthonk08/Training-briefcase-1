// Asynchronous
console.log(`Before`);
getUser(1, user => {
    getRepositories(user.gitHubUsername, (repo) => {
        getCommits(repo, (commits) => {
            // CALLBACKS HELL

        });
    });
});
console.log(`After`);

// Synchronous
console.log('Before');
const user = getUser(1);
const repos = getRepositories(user.gitHubUsername);
const commits = getCommits(repos[0]);
console.log('After');

// Callbacks
function getUser(id, callback) {
    setTimeout(() => {
        console.log("Escribiendo un usuario en la base de datos");
        callback({id: id, gitHubUsername: 'Anthony Tineo'});
        }, 2000);
}

// Exercise
function getRepositories(username, callback) {
    setTimeout(() => {
        callback(['repo1', 'repo2', 'repo3']);
    }, 3000);
}

// Promises
// Async/await

/*
function getUser(id) {
    setTimeout(() => {
        console.log("Escribiendo un usuario en la base de datos");
        return {id: id, gitHubUsername: 'Anthony Tineo'};
        }, 2000);
}
*/
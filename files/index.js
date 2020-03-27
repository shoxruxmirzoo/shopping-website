const express = require ('express');

console.log("Before");
// getUser(1, (user) => {
//     getRepositories(user.githubUsername, (repos) => {
//         getCommits(repos[0], (commits)=> {
//             console.log(commits);
//         })
//     })     
// });

// getUser(1)
//     .then(us => getRepositories(us.githubUsername))
//     .then(repo => getCommits(repo[0]))
//     .then(commit => getRepositories(commit[0]))
//     .catch((err) => console.log(err.message));  

async function displayCommits() {
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.githubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch(err) {
        console.log(`Oops...${err.message}`);
    }
}

displayCommits(); 
 
console.log("After");


function getUser (id ){
    return new Promise ((resolve, reject ) => {
        setTimeout ( ()=> {
            console.log('Reading from DB... User: 00' + id);
            resolve( { id: id, githubUsername: 'Shoxruxmirzoo'} );
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('GitHub Commitga ulanmoqda. Kuting...');
            // resolve([ "Birinci", "Beta Version" ]);
            reject(new Error(`Ulanib bo'lmdi. Qayta xarakat qiling!`) );
        }, 2000);
    })
}


function getRepositories(username) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            // console.log('GitHub APIga ulanmoqda. Kuting...');
            resolve( ["Nodejs App", "Python App", "React Native App"] );
        }, 2000);    
    });    
}    


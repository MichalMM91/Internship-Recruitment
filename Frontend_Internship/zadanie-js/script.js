//task #1 solution
const fetch = require("node-fetch")

fetch("https://www.reddit.com/r/funny.json")
.then(resp => resp.json()
.then(res => {
    const posts = res.data.children.map(element => {
    const title = element.data.title;
    const upvotes = element.data.ups;
    const score = element.data.score;
    const num_comments = element.data.num_comments;
    const created = new Date(element.data.created * 1000).toLocaleString();
    const allPosts = {title, upvotes, score, num_comments, created};

    return allPosts;
})  
//Prints posts list
//console.log("Lista postow: ");
//console.log({"posts": posts, "count": posts.length});
return {"posts": posts, "count": posts.length};

}))

//Choose method you would like to execute
.then(posts => sortCreated(posts.posts));

//task #2 solution
//sorting methods' compare function
function compare(i) {
    return function(a,b) {
        if (a[i] > b[i]) {
            return 1;
        } else if (a[i] < b[i]) {
            return -1;
        }
        return 0;
    }
}

sortUpvotes = (postList) => {
    postList.sort(compare('upvotes'));
    console.log("Posortowano wg upvotes INCR:");
    console.log({"posts": postList, "count": postList.length});

}

sortNumComments =(postList) => {
    postList.sort(compare('num_comments'));
    console.log("Posortowano wg num_comments INCR:");
    console.log({"posts": postList, "count": postList.length});
}

sortScore =(postList) => {
    postList.sort(compare('score'));
    console.log("Posortowano wg score INCR:");
    console.log({"posts": postList, "count": postList.length});
}

sortCreated =(postList) => {
    postList.sort(compare('created'));
    console.log("Posortowano wg created INCR:");
    console.log({"posts": postList, "count": postList.length});
}

//task #4 solution
getNewestPosts = (postList) => {
    let newestPosts = [];
    postList.sort(compare('created'));
    postList.map(element => {
        if (isOlderThan(element)) {
            newestPosts.push(element);
        };
    });
    console.log("Wyświetlono posty z ostatnich 24h");
    console.log({"posts": freshPosts});

}

isOlderThan = (datetime) => {
    let dateOfPost = new Date(datetime.created);
    dateNow = new Date();
    return (( dateNow - dateOfPost) > ( 1000 * 60 * 60 * 24 )) ? null : true;
}

const posts =[
    {tittle:'Post One', body:'This is post one'},
    {tittle:'Post Two', body:'This is post two'}
];
let lastActivityTime = null;

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date().toISOString();
            console.log(`Last activity time updated: ${lastActivityTime}`);
            resolve(lastActivityTime);
        }, 1000);
    });
}
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=> {
            output += `<li>${post.tittle}</li>`;
        });
        document.body.innerHTML=output;
    
    },1000)
}
function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = true;

            if (!error){
                resolve();
            }else{
                reject('Error:Something went wrong')
            }
        
        }, 2000);
     })
}
function deletePost() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const deletedPost = posts.pop();
            console.log(`Post deleted: ${JSON.stringify(deletedPost)}`);
            resolve(posts);
        }, 1000);
    });
}
 
//createPost({tittle:'Post Three', body : 'This is post three'})
    //.then(getPosts)
   // .catch(error => console.log(error))


Promise.all([
    createPost({ title: 'Post Three', body: 'This is post three' }),
    updateLastUserActivityTime()
])
    .then(([updatedPosts, updatedLastActivityTime]) => {
        console.log(`User's Last Activity Time: ${updatedLastActivityTime}`);
        console.log('All Posts:', updatedPosts);
        return deletePost();
    })
    .then((remainingPosts) => {
        console.log('Remaining Posts:', remainingPosts);
    })
    .catch((error) => {
        console.error(error);
    });
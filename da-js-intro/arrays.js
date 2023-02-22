const posts =[{
    id: 1,
    title: "mi primer post",
    image: "wawa.com/img",
    tags: "whata",
},
{
    id: 2,
    title: "mi segundo post",
    image: "wawa.com/img",
    tags: "nosa",
},
{
    id: 3,
    title: "the when the",
    image: "wawa.com/img",
    tags: "yesa",
}]
posts.find(post=>post.id==1)
posts.some(post=>post.id===1)
posts.some(post=>post.tags.includes("whata"))
posts.every(post=>post.tags.includes("nosa"))
posts.map(post=>post.title)
posts.filter(post=>post.tags.includes("whata"))
posts.filter(post=>post?.image)
posts.reduce((allTags, posts)=>{
    return [...allTags,...posts.tags]
})
posts.reduce((allTags, posts)=>{
    return Array.from (new Set([...allTags,...posts.tags]))
},[])
posts.reduce((allTags, posts)=>{
    return [...allTags,...posts.tags]
},[]).filter((post, index, self)=>index===self.IndexOf(post))
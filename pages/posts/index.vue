<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "../../components/posts/PostList";

export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: "1",
              title: "First Post",
              previewText: "This is our first post!",
              thumbnail:
                "https://media-exp1.licdn.com/dms/image/C4E1BAQEKkvWfkxxxww/company-background_10000/0/1597164510249?e=2159024400&v=beta&t=lMTf9_xn7UxGrawWjgOzfXc9-XhWkxqWD4at9c-tuFc"
            },
            {
              id: "2",
              title: "Second Post",
              previewText: "This is our second post!",
              thumbnail:
                "https://media-exp1.licdn.com/dms/image/C4E1BAQEKkvWfkxxxww/company-background_10000/0/1597164510249?e=2159024400&v=beta&t=lMTf9_xn7UxGrawWjgOzfXc9-XhWkxqWD4at9c-tuFc"
            }
          ]
        });
      }, 1000);
      // reject(new Error())
    })
      .then(data => {
        return data
      })
      .catch(e => {
        context.error(e);
      });
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

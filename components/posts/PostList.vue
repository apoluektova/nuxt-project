<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://media-exp1.licdn.com/dms/image/C4E1BAQEKkvWfkxxxww/company-background_10000/0/1597164510249?e=2159024400&v=beta&t=lMTf9_xn7UxGrawWjgOzfXc9-XhWkxqWD4at9c-tuFc"
      title="Hello there!"
      previewText="This is my first post"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://media-exp1.licdn.com/dms/image/C4E1BAQEKkvWfkxxxww/company-background_10000/0/1597164510249?e=2159024400&v=beta&t=lMTf9_xn7UxGrawWjgOzfXc9-XhWkxqWD4at9c-tuFc"
      title="Hello there - the second time!"
      previewText="This is my second post"
    />
  </section>
</template>

<script>
import PostPreview from "./PostPreview";

export default {
  name: 'PostList',
  components: {PostPreview},
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

a {
  text-decoration: none;
  color: black;
}
</style>

<template>
  <section class="post-list">
    <PostPreview
      id="1"
      thumbnail="assets/images/tech.jpeg"
      title="Hello there!"
      previewText="This is my first post"
    />
    <PostPreview
      id="2"
      thumbnail="assets/images/tech.jpeg"
      title="Hello there - the second time!"
      previewText="This is my second post"
    />
  </section>
</template>

<script>
import PostPreview from "./PostPreview";

export default {
  name: 'PostList',
  components: {PostPreview}
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

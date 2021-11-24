<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "../../../components/Admin/AdminPostForm";

export default {
  layout: 'admin',
  components: {AdminPostForm},
  data() {
    return {
      loadedPost: {
        author: 'Anna',
        title: 'My awesome Post',
        content: 'Super amazing, thanks for that',
        thumbnailLink: 'https://media-exp1.licdn.com/dms/image/C4E1BAQEKkvWfkxxxww/company-background_10000/0/1597164510249?e=2159024400&v=beta&t=lMTf9_xn7UxGrawWjgOzfXc9-XhWkxqWD4at9c-tuFc'
      }
    }
  }
}
</script>

<style>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>

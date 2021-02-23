<template>
  <div>
  <button @click="showMessageForm = !showMessageForm" type="button"
  class="btn btn-info mt-3 mb-3">Toggle Message Form</button>
  <form v-if="showMessageForm" @submit.prevent="addMessage" class="mb-3">
  <div v-if="error" class="alert alert-dismissable alert-warning">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <h4 class="alert-heading">Error!</h4>
  <p class="mb-0">{{error}}</p></div>
  <div class="form-group">
  <label for="subject">Subject</label>
  <input v-model="message.subject" type="text" class="form-control"
  id="subject" placeholder="Enter a subject" required>
  </div>
  <div class="form-group">
  <label for="message">Message</label>
  <textarea v-model="message.message" type="text" class="form-control"
  id="message" rows="3" required></textarea>
  </div>
  <div class="form-group">
  <label for="imageURL">Image URL</label>
  <input v-model="message.imageURL" type="url" class="form-control"
  id="imageURL" placeholder="Put an image URL here" required>
  </div>
  <button type="submit" class="btn btn-primary">Add Message</button>
  </form>
    <div class="list-unstyled" v-for="message in reversedMessages" :key="message._id">
<li class="media">
<img class="media">
<img class="mr-3" :src="message.imageURL">
<div class="media-body">
<h4 class="mt-0 mb-1">{{message.username}}</h4>
<h5 class="mt-0 mb-1">{{message.subject}}</h5>
{{message.message}}
<br />
<small>{{message.created}}</small>
<br /><br />
</div>
</li>
<hr>
</div>
</div>
</template>

<script>
const API_URL = 'http://localhost:1234/messages';
export default {
  name: 'Home',
  data: () => ({
    showMessageForm: false,
    error: '',
    messages: [],
    message: {
      username: 'Anon', // this would be the actual username
      subject: 'Subject goes here',
      message: 'Message goes here',
      imageURL: 'https://www.edmundsgovtech.com/wp-content/uploads/2020/01/default-picture_0_0.png',
    },
  }),
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();
    },
  },
  mounted() {
    fetch(API_URL).then((response) => response.json()).then((result) => {
      this.messages = result;
    });
  },
  methods: {
    addMessage() {
      console.log(this.message);
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.message),
        headers: {
          'content-type': 'application/json',
        },
      }).then((response) => response.json()).then((result) => {
        if (result.details) {
          // there was an error...
          const error = result.details.map((detail) => detail.message).join('. ');
          this.error = error;
        } else {
          this.error = '';
          this.showMessageForm = false;
          this.messages.push(result);
        }
      });
    },
  },
};
</script>

<style>
hr {
border-top: 1px solid green;
}

img {
max-width: 300px;
height: auto;
}
</style>

<template>
<form>
  <div class="form-group">
    <label for="unam">Username</label>
    <textarea v-model="account.unam" type="text" class="form-control" required></textarea>
  </div>
  <div class="form-group">
    <label for="pswd">Password</label>
    <textarea v-model="account.pswd" type="text" class="form-control" required></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
</template>

<script>
// here would happen the stuff that searches for your account in the database
const API_URL = 'http://localhost:1234/accounts';
export default {
  name: 'Register',
  data: () => ({
    error: '',
    accounts: [],
    account: {
      unam: 'Username',
      pswd: 'Password',
    },
  }),
  mounted() {
    fetch(API_URL).then((response) => response.json()).then((result) => {
      this.accounts = result;
    });
  },
  methods: {
    addAccount() {
      console.log(this.account);
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.account),
        headers: {
          'content-type': 'application/json',
        },
      }).then((response) => response.json()).then((result) => {
        if (result.details) {
          // there was an error...
          const error = result.details.map((detail) => detail.account).join('. ');
          this.error = error;
        } else {
          this.error = '';
          this.accounts.push(result);
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
</style>

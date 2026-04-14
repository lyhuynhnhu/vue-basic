<script setup>
import { ref } from 'vue'

const isLoggedIn = ref(false)

const toggle = () => (isLoggedIn.value = !isLoggedIn.value)

const status = ref('online')

const changeStatus = () => {
  if (status.value === 'online') {
    status.value = 'busy'
  } else if (status.value === 'busy') {
    status.value = 'offline'
  } else if (status.value === 'offline') {
    status.value = 'online'
  } else {
    status.value = 'unknown'
  }
}

const isShow = ref(true)

const toggleShow = () => (isShow.value = !isShow.value)
</script>

<template>
  <h3>v-if</h3>

  <p v-if="isLoggedIn">User is logged in</p>
  <p v-else>User is not logged in</p>
  <button @click="toggle" class="button">{{ isLoggedIn ? 'Logout' : 'Login' }}</button>

  <p v-if="status === 'online'">User is online</p>
  <p v-else-if="status === 'busy'">User is busy</p>
  <p v-else-if="status === 'offline'">User is offline</p>
  <p v-else>User status is unknown</p>
  <button @click="changeStatus" class="button">Change status</button>

  <h3>v-show</h3>
  <p v-show="isShow">This content is visible</p>
  <button @click="toggleShow" class="button">{{ isShow ? 'Hide' : 'Show' }}</button>
</template>

<style>
.button {
  border: 1px solid green;
  background: #f5f5f5;
  color: green;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>

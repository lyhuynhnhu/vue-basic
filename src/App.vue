<script setup>
import { ref } from 'vue'

const name = ref('Vue.js')

function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    console.log(event.target.tagName)
  }
}

function say(message) {
  alert(message)
}

function warn(message, event) {
  if (event) event.preventDefault()
  alert(message)
}

const submit = () => alert('Submitted')
</script>

<template>
  <h1>Event handling</h1>
  <button @click="greet">Greet</button>

  <button @click="say('hello')">Say hello</button>
  <button @click.once="say('bye')">Say bye once</button>

  <!-- using $event special variable -->
  <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>

  <!-- using inline arrow function -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">Submit</button>
  <br />

  <!-- the click event's propagation will be stopped -->
  <p>stop modifier</p>
  <button @click="say('parent clicking')">
    <span style="text-decoration: underline; cursor: pointer" @click.stop="say('child clicking')">
      Child click
    </span>
    Parent click
  </button>

  <!-- the submit event will no longer reload the page -->
  <p>prevent modifier</p>
  <a href="https://google.com" @click.prevent>click to google</a>
  <form @submit.prenvent="submit">
    <button type="submit">Submit</button>
  </form>

  <!-- only trigger handler if event.target is the element itself -->
  <p>self modifier</p>
  <button @click.self="say('parent clicking')">
    <span style="text-decoration: underline; padding: 10px" @click.self="say('child clicking')">
      Child click
    </span>
    Parent click
  </button>

  <p>capture modifier</p>
  <button @click.capture="say('parent clicking')">
    <span style="text-decoration: underline; padding: 10px" @click.capture="say('child clicking')">
      Child click
    </span>
    Parent click
  </button>
</template>

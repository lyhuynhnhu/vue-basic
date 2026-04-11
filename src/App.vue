<script setup>
const message = 'Hello World!'
const rawHtml = '<span style="color: red">This should be red</span>'
const dynamicId = 'dynamic-id'
const isButtonDisabled = true
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: {
    color: 'green',
  },
}
const number = 2
const reversedMessage = (msg) => msg.split('').reverse().join('-')
</script>

<template>
  <h1>Template syntax</h1>
  <p>Using text interpolation: {{ message }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>

  <div v-bind:id="dynamicId">Attribute binding</div>
  <div :id="dynamicId">Attribute binding - shorthand</div>

  <button :disabled="isButtonDisabled">Button</button>

  <div v-bind="objectOfAttrs">Binding multi attributes</div>

  <p>js expression: 1 + 1 = {{ 1 + 1 }}</p>

  <div>{{ number + 1 }}</div>

  <button :disabled="isButtonDisabled">{{ isButtonDisabled ? 'Disabled' : 'Enabled' }}</button>

  <div :id="`msg-${dynamicId}`">{{ message.split('').reverse().join('') }}</div>

  <div :id="reversedMessage(dynamicId)">{{ reversedMessage(message) }}</div>
</template>

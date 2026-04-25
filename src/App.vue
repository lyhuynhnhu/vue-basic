<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { provide, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import ButtonCount from './components/ButtonCount.vue'
import ChildComponent from './components/ChildComponent.vue'
import Counter from './components/Counter.vue'

const count = ref(0)
const sayHi = () => console.log('say hiiii')

const increaseBy = (num) => {
  count.value += num
}

const currentLocale = ref('en-US')

const updateLocale = () => {
  currentLocale.value = 'vn-VN'
}

provide('locale', {
  locale: currentLocale,
  updateLocale,
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Hello world!" />
      <Counter :init-count="count" />
      <!-- or can pass props in camelCase -->
      <!-- <ButtonCount :initCount="count" /> -->

      <ChildComponent
        :prop-a="10"
        prop-b="2"
        prop-c="apple"
        :prop-e="{ msg: 'hello' }"
        prop-f="omg"
        :prop-g="sayHi"
        disable
      />

      <ButtonCount @increase="count++" @decrease="count--" @increase-by="increaseBy">
        <template #increase>Increase</template>
        <template #decrease>Decrease</template>
        <template #increase-by><span>Increase by</span></template>
      </ButtonCount>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

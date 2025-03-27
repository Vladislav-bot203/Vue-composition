<template>
  <header class="nav-bar">
    <strong>Vue Composition Api</strong>
    <ul class="navigation">
      <li>
        <router-link to="/">Главная</router-link>
      </li>
      <li>
        <router-link to="/reusable">Переиспользование</router-link>
      </li>
      <li>
        <router-link to="/vuex">Vuex</router-link>
      </li>
    </ul>
  </header>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  height: 60px;
  display: flex;
  background-color: rgb(230, 225, 220);
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  justify-content: space-between;
}

.card {
  width: 60%;
  padding: 20px;
  background-color: rgb(230, 225, 220);
  margin: 30px auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

button {
  background-color: rgb(230, 225, 220);
  border-radius: 10px;
  border: 2px solid #519c73;
  padding: 8px;
  color: #519c73;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
    background-color: #519c73;
    color: antiquewhite
  }
}

.navigation {
  display: flex;
  list-style: none;
  display: flex;
  gap: 30px;
}

a {
  text-decoration: none;
}

a:hover {
  color: red;
  cursor: pointer;
}

.active {
  color: red;
  text-decoration: underline;
}
</style>

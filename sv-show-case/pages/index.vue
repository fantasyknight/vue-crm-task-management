<template>
  <div class="container">
    <div>
      <Logo />
      <div class="links">
        <a
          href="/board"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Board
        </a>

        <a
          href="/utility"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Utility
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~/../bib-shared/css/variables.scss";
@import "~/../bib-shared/css/colors.scss";

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: $font-family;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $white;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  a {
    color: $primary;
    background-color: $light;
  }
}
.button--grey:hover {
  color: $light;
  background-color: $primary;
}
</style>

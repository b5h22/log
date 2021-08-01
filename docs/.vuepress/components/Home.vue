<template>
  <div>
    <div class="titleContainer">
        <br>
      <h1>기록,
        <br>journey to discover myself
      </h1>

      <div class="infoContainer">
        <div class="name">by B5H22</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
@import "https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap";
.infoContainer {
  text-align: right;
}
h1 {
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  border-bottom: 17px solid rgb(13, 212, 80);
  word-break: keep-all;
  padding-bottom: 2rem;
  font-size: 4rem;
}
.name {
  font-weight: 900;
  font-size: 2rem;
}
ul {
  list-style: none;
  line-height: 1.5rem;
}
@media (max-width: 550px) {
  h1 {
    font-size: 4.4rem;
  }
  .name {
    font-size: 1.7rem;
  }
}
@media (max-width: 430px) {
  h1 {
    font-size: 3.4rem;
  }
}
</style>

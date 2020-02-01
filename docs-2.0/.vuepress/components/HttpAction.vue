<template>
  <div>
    <input class="http_action" id="route" name="route" type="text" :value='api' disabled />
    <label for="route" :class='action.toLowerCase()'><strong>{{action.toUpperCase()}}</strong></label>
  </div>
</template>

<script>
export default {
  props: ['action', 'api'],
}
</script>

<style scoped>
  div {
    position: relative;
    margin-top: 20px;
  }
  .http_action {
    display: inline-block;
    padding: 10px 0 10px 15px;
    width: 100%;
    font-size: 16px;
    color: darkslategray;
    font-weight: 400;
    background: gray;
    background: #efefef;
    border: 0;
    border-radius: 3px;
    outline: 0;
    text-indent: 90px;
  }
  label {
    display: inline-block;
    position: absolute;
    width: 54px;
    top: 0;
    left: 0;
    text-align: center;
    padding: 8.1px 15px;
    text-shadow: 0 1px 0 rgba(19,74,70,.4);
    color: whitesmoke;
    /* background: #7AB893; */
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .get {
    background: #009B77;
  }
  .post {
    background: #00539C;
  }
  .put {
    background: #6B5B95;
  }
  .patch {
    background: #6B5B95;
  }
  .delete {
    background: #FF6F61;
  }
</style>
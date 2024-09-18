import Vue from 'vue'

const Button = Vue.component('ButtonNew', {
  render(createElement) {
    return createElement('button', this.$slots.default) 
  }
})

export default Button;
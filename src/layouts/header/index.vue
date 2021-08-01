<template>
  <div>
    {{H_001}}
    {{H_002}}
    <h_001 v-if="H_001"/>
    <h_002 v-if="H_002"/>
  </div>
</template>

<script>
// import MobileMenu from './mobileMenu'
import {h_001, h_002} from "~/components";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    h_001,
    h_002,
  },

  // data() {
  //   return {
  //     H_001: process.env.H_001,
  //     H_002: process.env.H_002
  //   }
  // },

  methods: {
    ...mapActions({
    })
  },

  computed: {
    // H_001: () => {
    //   return Number(process.env.H_001);
    //   },
    // H_002: () => {
    //   return Number(process.env.H_002);
    // },
    // H_001: () => {
    //   return !Boolean(process.env.H_001);
    //   },
    // H_002: () => {
    //   return !Boolean(process.env.H_002);
    // },
    H_001: () => {
      return !! + !process.env.H_001;
      },
    H_002: () => {
      return !! + !process.env.H_002
    },
    // H_001: () => {
    //   return parseInt(process.env.H_001);
    //   },
    // H_002: () => {
    //   return parseInt(process.env.H_002);
    // },
    // H_001: () => {
    //   return process.env.H_001 === '1';
    //   },
    // H_002: () => {
    //   return process.env.H_002 === '1';
    // },
  },
}
</script>

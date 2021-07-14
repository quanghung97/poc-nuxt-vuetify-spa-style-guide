<template>
<div>
  <v-row
    class="mb-5 mt-5"
    align="center"
    justify="space-around"
  >
    <v-btn depressed text large>
      large
    </v-btn>
    <v-btn depressed large class="gradient-btn shades--text text--black">
      default
    </v-btn>
    <v-btn
      depressed
      large
      class="yellow yellow-5 shades--text text--black"
    >
      hover
    </v-btn>
    <v-btn
      depressed
      large
    >
      pressed
    </v-btn>
    <v-btn
      dark
      depressed
      disabled
      large
    >
      disabled
    </v-btn>
  </v-row>
  <v-row
    class="mb-5 mt-5"
    align="center"
    justify="space-around"
  >
    <v-btn depressed text>
      Text
    </v-btn>
    <v-btn depressed>
      Normal
    </v-btn>
    <v-btn
      depressed
      color="primary"
    >
      Primary
    </v-btn>
    <v-btn
      depressed
      color="error"
    >
      Error
    </v-btn>
    <v-btn
      depressed
      disabled
    >
      Disabled
    </v-btn>
  </v-row>
  <v-row
    class="mb-5 mt-5"
    align="center"
    justify="space-around"
  >
    <v-btn depressed text>
      Text
    </v-btn>
    <v-btn depressed>
      Normal
    </v-btn>
    <v-btn
      depressed
      color="primary"
      loading
    >
      Primary
    </v-btn>
    <v-btn
      depressed
      color="error"
    >
      Error
    </v-btn>
    <v-btn
      depressed
      disabled
    >
      Disabled
    </v-btn>
  </v-row>
</div>
</template>
<script>
</script>

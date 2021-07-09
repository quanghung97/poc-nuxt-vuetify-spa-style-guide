<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Regular"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Regular"
            placeholder="Placeholder"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Solo"
            solo
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Solo"
            placeholder="Placeholder"
            solo
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Filled"
            filled
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Filled"
            placeholder="Placeholder"
            filled
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Outlined"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            placeholder="Placeholder"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-card>
    <v-container fluid>
      <v-row
        align="center"
      >
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            outlined
            dense
            chips
            small-chips
            label="Outlined"
            multiple
          ></v-autocomplete>
        </v-col>
        <v-col cols="12">
          <v-autocomplete
            v-model="values"
            :items="items"
            dense
            chips
            small-chips
            label="Solo"
            multiple
            solo
          ></v-autocomplete>
        </v-col>
        <v-col cols="12">
          <v-autocomplete
            v-model="value"
            :items="items"
            dense
            filled
            label="Filled"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      items: ['foo', 'bar', 'fizz', 'buzz'],
      values: ['foo', 'bar'],
      value: null,
    }),
  }
</script>

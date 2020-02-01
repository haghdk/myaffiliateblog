<template>
  <main>
    <div class="form-wrapper">
      <div v-if="formtext !== ''" v-html="formtext" class="form-text"></div>

      <form
        action="https://app.getresponse.com/add_subscriber.html"
        accept-charset="utf-8"
        method="post"
      >
        <input :value="formpage" name="custom_formpage" type="hidden" />
        <!-- Name -->
        <div class="input-wrapper">
          <input id="name" type="text" name="name" placeholder="Name" />
        </div>
        <!-- Email field (required) -->

        <div class="input-wrapper">
          <input id="email" type="text" name="email" placeholder="Email" />
        </div>

        <!-- List token -->
        <!-- Get the token at: https://app.getresponse.com/campaign_list.html -->
        <input type="hidden" name="campaign_token" value="8JApJ" />
        <!-- Thank you page (optional) -->
        <input :value="thanks" type="hidden" name="thankyou_url" />
        <!-- Add subscriber to the follow-up sequence with a specified day (optional) -->
        <input type="hidden" name="start_day" value="0" />
        <!-- Forward form data to your page (optional) -->
        <input type="hidden" name="forward_data" value="" />
        <!-- Subscriber button -->
        <input type="submit" value="SHOW ME MORE" />
      </form>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    thanks: {
      type: String,
      default: 'http://myoptin.site/thankyou',
      required: true
    },
    formtext: {
      type: String,
      default: ''
    },
    formpage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.form-text {
  margin-bottom: 2.5rem;
  font-size: 1.25rem;

  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
}

.input-wrapper {
  margin-bottom: 1.25rem;
}

label {
  display: block;
  text-align: left;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

input {
  padding: 1rem;
  width: 100%;
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }
}

input[type='submit'] {
  background-color: #59c919;
  border: none;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: #ffffff;
}
</style>

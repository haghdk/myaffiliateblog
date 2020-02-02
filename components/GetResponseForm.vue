<template>
  <div class="form-wrapper">
    <div class="form-wrapper--inner">
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
        <input type="hidden" name="campaign_token" :value="list" />
        <!-- Thank you page (optional) -->
        <input :value="thanks" type="hidden" name="thankyou_url" />
        <!-- Add subscriber to the follow-up sequence with a specified day (optional) -->
        <input type="hidden" name="start_day" value="0" />
        <!-- Forward form data to your page (optional) -->
        <input type="hidden" name="forward_data" value="" />
        <!-- Subscriber button -->
        <input
          type="submit"
          :value="buttontext"
          :style="{ backgroundColor: '#' + buttoncolor }"
        />
      </form>
    </div>
  </div>
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
    },
    buttoncolor: {
      type: String,
      default: '04c34a'
    },
    buttontext: {
      type: String,
      default: 'Show me more'
    },
    list: {
      type: String,
      default: '8JApJ'
    }
  }
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  padding: 2.5rem;
  width: 100%;

  &--inner {
    max-width: 768px;
    width: 100%;
    margin: auto;
  }
}

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
  font-family: 'Playfair Display', serif;

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
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
}
</style>

<template>
  <section id="testLanding" class="full-height">
    <div class="full-width text-center">
      <div class="container">
        <h1>GET PAID FOR YOUR OPINIONS</h1>

        <h2>Earn $5-$10 cash on your first surveys!</h2>

        <GetResponseForm
          :formpage="'goldopinions'"
          buttoncolor="dfaf2a"
          buttontext="Join for a 7-day trial for only $1"
          list="8xjVR"
          thanks="https://f89873gahi7odybczgkmzc8-ev.hop.clickbank.net/?tid=MYAFFILIATEOPTIN"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#testLanding {
  display: flex;
  align-items: center;
  background-color: #18629b;
}

h1,
h2 {
  color: #ffffff;
}
</style>

<script>
import GetResponseForm from '@/components/GetResponseForm'

export default {
  layout: 'landing',
  components: {
    GetResponseForm
  },
  head: {
    bodyAttrs: {
      class: 'landing-page',
      id: 'goldopinions'
    }
  },
  beforeMount() {}
}
</script>

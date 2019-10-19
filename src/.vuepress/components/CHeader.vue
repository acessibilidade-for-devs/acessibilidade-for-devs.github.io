<template>
  <header class="hero">
    <div class="container hero-body">
      <h1 class="title">
        {{ title }}
      </h1>

      <h2 class="subtitle">
        {{ subtitle }}
      </h2>

      <a
        href="https://github.com/acessibilidade-for-devs/acessibilidade-for-devs.github.io"
        :title="contributeMessage"
        target="_blanck"
      >
        {{ contributeMessage }}
        <span class="icon">
          <i class="fas fa-code-branch" />
        </span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    contributeMessage: {
      type: String,
      required: true
    }
  }
}
</script>

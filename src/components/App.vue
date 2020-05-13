<template lang="pug">
  .ai-center.jc-between.header-notification(
    v-if="isActive",
    :class="type",
  )
    .content.ai-center
      i.fa(:class="iconClass")
      slot
        div(v-html="content")
    a.close-button(
      href="#",
      @click.prevent="dismiss",
      :tooltip="closeButtonTooltip || false",
      data-placement="bottom",
      data-viewport-padding="10",
    )
      i.fa.fa-close
</template>

<script>
    const NOTIFICATION_ICONS = {
        info: 'fa-exclamation-circle',
        error: 'fa-exclamation-triangle',
    };

    export default {
        props: {
            value: {
                type: Boolean,
                default: false,
            },
            type: {
                type: String,
                default: 'info',
                validator(notificationType) {
                    return [
                        'info',
                        'error',
                        'success',
                        'warning',
                    ].includes(notificationType);
                },
            },
            content: {
                type: String,
                default: '',
            },
            closeButtonTooltip: {
                type: String,
                default: '',
            },
        },
        data() {
            return {
                isActive: this.value || true,
            };
        },
        computed: {
            iconClass() {
                return NOTIFICATION_ICONS[this.type];
            },
        },
        watch: {
            value() {
                this.isActive = !!this.value;
            },
        },
        methods: {
            dismiss() {
                this.isActive = false;
                this.$emit('input', false);
            },
        },
    };
</script>

<style lang="stylus" scoped>
  .header-notification
    padding 10px 0 10px 20px
    color #fff
    font-size 14px
    box-shadow inset 0 -2px 0 -1px rgba(255, 255, 255, 0.5)

    &.info
      background #24aae3
    &.error
      background var(--cb-alert-red-color)
    &.success
      background #169e49
    &.warning
      background #fbc02d

  ::v-deep a
    text-decoration underline
    color #fff
    &:hover
      color #fff

  .content
    i
      flex-shrink 0
      margin-right .2em

  .close-button
    padding 0 20px
    transition ease .25s
    cursor pointer !important
    &:hover
      transform scale(1.2)
</style>

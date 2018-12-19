<template>
    <div class="cookie" :class="msgPosition" v-if="isOpen">
        <div class="cookie-message">
            <slot name="message">
                {{cookieMsg}}
            </slot>
        </div>
        <div class="accept-cookie" @click="accept">
            {{ cookieAccept }}
        </div>
        <div class="reject-cookie" @click="reject">
            {{ cookieReject }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'myCookie',
        props: {
            cookieAccept: {
                type: String,
                default: 'Accept'
            },
            cookieReject: {
                type: String,
                default: 'Deny'
            },
            cookieMsg: {
                type: String,
                default: 'We use cookies'
            },
            position: {
                type: String,
                default: 'top'
            }

        },
        data() {
            return {
                isOpen: false
            }
        },
        computed: {
            msgPosition() {
                return `cookie--${this.position}`
            }
        },
        created() {
            if (!this.getGDPR() === true) {
                    this.isOpen = true;
             }
        },
          methods: {
            getGDPR () {
                return localStorage.getItem('GDPR:accepted', true)
            },
            accept() {
                this.isOpen = false;
                localStorage.setItem('GDPR:accepted', true)

         },
         reject() {
                this.isOpen = false;
                localStorage.setItem('GDPR:accepted', false)
         }
    },
    }
</script>

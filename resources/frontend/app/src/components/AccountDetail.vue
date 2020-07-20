<template>
    <div>
        <b-field label="Name" horizontal>
            <b-input :value="account.name" :readonly="readonly" :custom-class="readonly ? 'is-static' : ''"></b-input>
        </b-field>
        <b-field label="Email" horizontal>
            <b-input :value="account.email" readonly custom-class="is-static"></b-input>
        </b-field>
        <b-field label="Created at" horizontal>
            <b-input :value="account.created_at | moment('MMMM Do YYYY, h:mm a')" readonly custom-class="is-static"></b-input>
        </b-field>
    </div>
</template>

<script>
    export default {
        name: "AccountDetail",
        computed: {
          isReadonly() {
          }
        },
        props: {
            account: {},
            readonly: {
                default: true,
                type: Boolean
            }
        }
    }
</script>

<style scoped>

</style>

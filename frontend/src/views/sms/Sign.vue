<template>
    <div>
        <p>Sign</p>
        <a-button type="primary" v-permission="['add']">must has 'add' permission</a-button>
        <a-button v-permission="['query']">must has 'query' permission</a-button>
    </div>
</template>
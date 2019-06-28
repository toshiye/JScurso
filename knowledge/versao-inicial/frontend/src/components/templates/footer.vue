<template>
    <footer class="footer">
        <span>Copyright <strong>Sasaki</strong> © 1986-2019</span>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    .footer{
        grid-area: footer;
        background-color: #DDD;
        color: #333;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>
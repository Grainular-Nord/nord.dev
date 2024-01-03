<!-- @format -->
<script setup>
const props = defineProps(['link', 'name']);
</script>

<template>
    <div class="separator">
        <div class="code-link">
            <span>⚡️</span>
            <div>
                <strong> Code insights:</strong>
                You can see the function signature & implementation here:
                <a v-bind:href="link">{{ props.name }}</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.separator {
    border-top: 1px solid var(--vp-c-divider);

    padding-block: 1.5rem;
    margin-top: 4rem;
}

.code-link {
    display: flex;
    align-items: center;

    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    line-height: 1.5rem;
    font-size: 0.9rem;

    background: var(--code-link-bg);
}
</style>

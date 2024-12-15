<template>
    <section class="mobile-nav md:hidden">
        <nav class="mt-4 mr-4">
            <section class="times" v-if="open" @click="open = !open">
                <Fa :icon="faTimes" color="white" size="2x" />
            </section>
            <section class="bars" v-else @click="open = !open">
                <Fa :icon="faBars" color="white" size="2x" />
            </section>
        </nav>
        <dialog id="my_modal_1" class="modal modal-top" :open="open">
            <div class="modal-box">
                <h3 class="text-lg font-bold">Hello!</h3>
                <p class="py-4">Press ESC key or click the button below to close</p>
                <div class="modal-action">
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">Close</button>
                    </form>
                </div>
            </div>
            <label class="modal-backdrop" for="my_modal_1">Close</label>
        </dialog>
    </section>
</template>

<script setup lang="ts">
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { faMotorcycle, faHeart, faUser, faTimes, faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const open = ref(false);

</script>
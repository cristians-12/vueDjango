<script setup>
import { ref, onMounted } from "vue";
let datos = ref(null);

onMounted(async () => {
  try {
    let response = await fetch("http://127.0.0.1:8000/api/v1/books/");
    datos.value = await response.json();

  } catch (error) {
    console.error("Error al conectarse al servidor:", error);
  }
});
</script>

<template>
  <div>
    <h1>Lista de libros disponibles:</h1>
    <ul class="flex justify-around w-[100%] flex-wrap">
      <li
        v-for="libro in datos"
        :key="libro.id"
        class="w-[30%] flex flex-col items-center rounded-lg p-5 bg-gradient-to-r from-teal-500 to-blue-700"
      >
        <h1
          class="text-3xl font-extrabold text-center truncate overflow-hidden w-[100%]"
          :title="libro.title"
        >
          {{ libro.title }}
        </h1>
        <img :src="libro.imagen" class="w-[] h-[400px]" />
        <p class="text-ellipsis overflow-hidden text-pretty mt-2">
          {{ libro.description }}
        </p>
      </li>
    </ul>

    <router-link to="/">
      <button
        class="bg-teal-500 text-white rounded-full p-4 fixed bottom-5 right-5 "
      >
        <i class="fa-solid fa-house-user text-[2rem]"></i>
      </button>
    </router-link>
  </div>
</template>

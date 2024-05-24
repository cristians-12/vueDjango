<script setup>
import { ref, onMounted } from "vue";
const datos = ref(null);

onMounted(async () => {
  // try {
  //   const response = await fetch("http://127.0.0.1:8000/api/v1/books/");
  //   datos.value = response.json();
  //   console.log(response.json())
  // } catch (error) {
  //   console.error("Error al conectarse al servidor:", error);
  // }
  const response = await fetch("http://127.0.0.1:8000/api/v1/books/");
  datos.value = await response.json();
  // console.log(datos)
});
</script>
<template>
  <div>
    <header>
      <h1>CRUD</h1>
    </header>

    <main>
        <ul>
            <li v-for="libro in datos" :key="libro.id">
                {{ libro.title }}
            </li>
        </ul>
    </main>

    <router-link to="/">
      <button
        class="bg-teal-500 text-white rounded-full p-4 fixed bottom-5 right-5"
      >
        <i class="fa-solid fa-house-user text-[2rem]"></i>
      </button>
    </router-link>
  </div>
</template>
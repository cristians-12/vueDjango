<script setup>
</script>
<template>
  <div class="flex items-center justify-center flex-col">
    <header class="w-[100%] bg-slate-200 flex items-center justify-around">
      <h1 class="text-teal-600 text-[2rem] font-extrabold">
        ¡Bienvenido a su CRUD!
      </h1>
      <div class="relative w-[30%]">
        <input
          type="text"
          placeholder="Busque su libro.."
          class="rounded-xl px-2 py-1 w-[100%]"
        />
        <i
          class="cursor-pointer fa-solid fa-magnifying-glass absolute top-2 right-2"
        ></i>
      </div>
    </header>

    <main class="w-[100%] flex h-[94.9vh]">
      <div class="w-[50%] flex flex-col justify-center">
        <h2 class="text-[2rem] font-extrabold ms-5">
          Busque los mejores libros
        </h2>
        <p class="ms-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit optio
          minima excepturi vel quis aliquam, aspernatur explicabo accusantium
          magnam vero dolorem, aperiam sequi voluptatibus non iure soluta dicta
          repellendus quos!
        </p>
      </div>
      <div class="w-[50%] relative overflow-hidden">
        <!-- <img src="../assets/img.png" class="object-cover w-[100%]" alt="" /> -->
        <img
          src="https://images.unsplash.com/photo-1571075002844-e5180c614639?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="w-[100%] "
          alt=""
        />
        <span class="w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)] absolute top-0">
        </span>
      </div>
    </main>

    <div class="flex gap-5 mt-5 fixed bottom-5 left-5">
      <router-link to="/list">
        <button class="bg-teal-500 py-2 px-3 rounded-lg font-semibold">
          Ver todos los libros
        </button>
      </router-link>
      <router-link to="/crud">
        <button class="bg-teal-500 py-2 px-3 rounded-lg font-semibold">
          Ir a CRUD
        </button>
      </router-link>
    </div>
  </div>
</template>
<style>
</style>
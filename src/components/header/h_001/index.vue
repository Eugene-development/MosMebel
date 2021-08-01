<template>
  <nav class=" flex py-2">
    <div class="flex items-center space-x-10 mx-auto">
      <div class="flex items-center">
        <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2"/>
        </svg>
        <p class="ml-2 text-base text-red-900 animate-pulse">
          8 (930) 688-88-62
        </p>
      </div>
      <div class="flex items-center">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"/>
        </svg>
        <p class="ml-2 text-base">
          Пн-Пт 8:00-17:30; Сб 9:00-16:00
        </p>
      </div>

      <div class="flex items-center">
        <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2"/>
        </svg>
        <p class="ml-2 text-base">
          orbita88yuliya@mail.ru
        </p>
      </div>


      <div class="flex items-center">
        <svg aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
        </svg>
        <p class="ml-2 text-base">
          Избранное (6)
        </p>
      </div>


      <div class="flex items-center">
        <svg aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor"
             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2"></path>
        </svg>
        <NuxtLink
          @click.native=""
          to="/shop/cart"
          class="ml-2 text-base">
          Корзина ({{}})
        </NuxtLink>
      </div>

    </div>
    <!--      <div>-->
    <!--        <p>Корзина</p>-->
    <!--      </div>-->
  </nav>

</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>

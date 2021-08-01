<template>
  <div class="relative ">
    <div class=" mx-auto py-3 sm:px-6 lg:px-8 bg-gradient-to-r from-blueGray-200 via-blueGray-300 to-blueGray-100">
      <div class="pr-16 sm:text-left sm:px-8 flex justify-between">
        <p class="text-sm text-main">
          <NuxtLink to="/" class="mr-2">
            Главная
          </NuxtLink>
          <NuxtLink to="/information/about" class="mr-2">
            О компании
          </NuxtLink>
          <!--            <NuxtLink to="/information/" class="mr-2">-->
          <!--              Поставщикам-->
          <!--            </NuxtLink>-->
          <!--            <NuxtLink to="/information/" class="mr-2">-->
          <!--              Новости-->
          <!--            </NuxtLink>-->
          <!--            <NuxtLink to="/information/" class="mr-2">-->
          <!--              Акции-->
          <!--            </NuxtLink>-->
          <NuxtLink to="/information/delivery" class="mr-2">
            Доставка
          </NuxtLink>
          <NuxtLink to="/information/assembly" class="mr-2">
            Сборка
          </NuxtLink>
          <NuxtLink to="/information/payment" class="mr-2">
            Оплата
          </NuxtLink>
          <NuxtLink to="/information/warranty" class="mr-2">
            Гарантии
          </NuxtLink>
          <NuxtLink to="/information/contact" class="mr-2">
            Контакты
          </NuxtLink>
        </p>
        <p class="text-sm text-main">
          <a href="https://lubamebel.adminexpo.com/admin/login" class="mr-2" target="_blank">
            Вход
          </a>
          <a href="https://lubamebel.adminexpo.com/admin/registration" class="mr-2" target="_blank">
            Регистрация
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>

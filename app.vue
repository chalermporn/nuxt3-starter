<template>
  <div>
    <div class="font-bold text-center text-red-400">
      Hello Nuxt Tailwindcss
    </div>
    <div class="flex justify-center">
      <Button
        label="PrimeVue Button"
        :pt="{
          root: {
            class: [
              'md:whitespace-nowrap',
              'inline-flex gap-2 items-center',
              'rounded',
              'py-2 px-4 text-primary-50',
              'border border-primary-50 bg-white hover:bg-primary-50 hover:text-white hover:shadow-lg',
            ],
          },
        }"
      />
    </div>
    <!-- <NuxtWelcome /> -->
  </div>
</template>

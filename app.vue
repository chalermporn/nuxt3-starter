<template>
  <div>
    <div class="font-bold text-center text-red-400">
      Hello Nuxt Tailwindcss
    </div>
    <Button
      label="PrimeVue Button"
      :pt="{
        root: {
          class: [
            'md:whitespace-nowrap',
            'inline-flex gap-2 items-center',
            'rounded',
            'py-2 px-4 text-base',
            'border border-primary-50 bg-white text-primary-50 hover:border-white hover:bg-primary-50 hover:text-white hover:shadow-lg',
          ],
        },
      }"
    />
    <NuxtWelcome />
  </div>
</template>

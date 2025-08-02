<script lang="ts">
  import SearchBar from "./SearchBar.svelte";
</script>

<header class="bg-charcoal text-gray-100 px-4 sm:px-6 py-3 shadow-md border-b border-slate-700">
  <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
    <div class="flex items-center space-x-6 w-full sm:w-auto">
      <h1 class="text-2xl font-bold whitespace-nowrap">
        Fern
      </h1>
      
      <nav class="hidden md:flex space-x-4">
        <a href="#/" class="text-gray-400 transition duration-300 hover:text-white whitespace-nowrap">Home</a>
        <a href="#/" class="text-gray-400 transition duration-300 hover:text-white whitespace-nowrap">Trending</a>
        <a href="#/" class="text-gray-400 transition duration-300 hover:text-white whitespace-nowrap">Subscriptions</a>
      </nav>
    </div>

    <div class="w-full sm:w-auto sm:max-w-md flex-1">
      <SearchBar />
    </div>

    <nav class="flex sm:hidden space-x-4">
      <a href="#/" class="text-gray-400 transition duration-300 hover:text-white">Home</a>
      <a href="#/" class="text-gray-400 transition duration-300 hover:text-white">Trending</a>
    </nav>
  </div>
</header>
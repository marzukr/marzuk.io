<script lang="ts">
  import Link from './Link.svelte';
</script>

<svelte:head>
  <title>@realmarzuk</title>
  <meta
    name="description"
    content="Marzuk is a former engineer currently exploring comedy, storytelling and social charisma."
  />
</svelte:head>

<div class="mx-auto max-w-3xl overflow-hidden p-6 pb-12 text-base">
  <div class="mt-2 flex">
    <img
      src="/profile.jpg"
      class="
        mr-4 h-[7.5rem] rounded-md min-[690px]:h-[8.25rem]
        min-[708px]:h-[8.5rem]
      "
      alt="Marzuk Rashid"
    />
    <div>
      <p>MARZUK</p>
      <p class="mt-2 font-serif">
        Broke up with engineering for a fling with comedy. Might beg her to take
        me back later.
      </p>
      <p class="mt-2 font-serif">
        <Link href="https://www.instagram.com/realmarzuk/">instagram</Link>,
        <Link href="https://www.youtube.com/@realmarzuk">youtube</Link>,
        <Link href="https://www.tiktok.com/@realmarzuk">tiktok</Link>,
        <Link href="mailto:hello@marzuk.io">email</Link>
      </p>
    </div>
  </div>
</div>

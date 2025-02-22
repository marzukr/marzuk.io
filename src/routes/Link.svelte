<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    href: string;
    children: Snippet;
    newTab?: boolean;
  };
  const { href, children, newTab = true }: Props = $props();
</script>

<a
  {href}
  target={newTab ? '_blank' : undefined}
  class="underline transition hover:text-gray-500"
>
  {@render children()}
</a>

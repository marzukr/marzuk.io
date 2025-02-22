<script lang="ts">
  import Link from './Link.svelte';
</script>

<svelte:head>
  <title>Marzuk Rashid</title>
  <meta
    name="description"
    content="Marzuk Rashid is a software engineer who builds scalable backends at startups. He holds a B.S. in Computer Science from the University of Illinois."
  />
</svelte:head>

<div class="mx-auto max-w-3xl overflow-hidden p-6 pb-12 text-base">
  <div class="mt-2 flex">
    <div class="flex-1">
      <p>MARZUK RASHID</p>
      <div class="font-serif">
        <p class="mt-2">Software Engineer</p>
        <p class="mt-2">
          B.S. Computer Science, 2022 <br />
          University of Illinois at Urbana-Champaign
        </p>
      </div>
    </div>
    <img
      src="/profile.jpg"
      class="
        ml-4 h-[7.5rem] rounded-md min-[690px]:h-[8.25rem]
        min-[708px]:h-[8.5rem]
      "
      alt="Marzuk Rashid"
    />
  </div>
  <p class="mt-6">CONNECT WITH ME</p>
  <p class="mt-2 font-serif">
    <Link href="https://github.com/marzukr">github</Link>,
    <Link href="https://www.linkedin.com/in/marzukr/">linkedin</Link>,
    <Link href="mailto:hello@marzuk.io">email</Link>
  </p>
  <p class="mt-6">PROJECTS</p>
  <div class="mt-2 font-serif">
    <div class="flex flex-wrap justify-between gap-2">
      <Link href="https://intuition.fyi/">intuition.fyi</Link>
      <span class="float-right text-gray-500"> December 2024 </span>
    </div>
    <p class="mt-2">
      In just a few days, I crafted an app that visually guides you to the
      decision your intuition is leaning towards. By interacting with your
      options, intuition.fyi elegantly reveals your true preference. Whether
      it's picking a restaurant or deciding on weekend plans, this tool helps
      you make decisions that just <span class="italic">feel right.</span>
    </p>
    <div class="mt-4 flex flex-wrap justify-between gap-2">
      <Link href="https://github.com/marzukr/fishbait">Fishbait</Link>
      <span class="float-right text-gray-500">
        August 2020 - November 2022
      </span>
    </div>
    <p class="mt-2">
      I first got into playing poker in 2019. Shortly after learning the basic
      game theory and probabilities behind a winning strategy, I thought
      <span class="italic"
        >this seems like something a computer could do better than me.</span
      > So, I set out to learn all about the best poker AIs and build one of my own.
      After two years of work in my free time, I had built an AI that could beat
      my friends.
    </p>
    <div class="mt-4 flex flex-wrap justify-between gap-2">
      <Link href="https://binaryheart.org/">BinaryHeart</Link>
      <span class="float-right text-gray-500"> July 2016 - June 2019 </span>
    </div>
    <p class="mt-2">
      In high school I built and led a club that addressed digital waste and
      access. We collected used electronic devices from around our neighborhood,
      repaired them, and delivered them to new homes. During my time there, more
      than 100 students volunteered with us. Together we repaired and donated
      more than $100,000 of electronics. Today, the club is in the hands of new
      student leadership and is doing better than ever.
    </p>
  </div>
</div>

<template>
  <Layout>
    <template #after-brand>
      <small class="ml-1 font-mono text-3xl leading-none tracking-tight text-gray-400 lowercase">/uses</small>
    </template>
    <article>
      <div class="prose text-gray-700 max-w-none dark:text-gray-200">
        <p class="lead">This page has been around for years, originally called “Colophon”. A colophon is defined as “an inscription at the end of a book or manuscript usually with facts about its production”. Now it has trendy, with a listing at <a href="https://uses.tech/">uses.tech</a>!</p>

        <p class="p-4 text-base leading-7 text-gray-600 border-l-4 border-yellow-200 bg-yellow-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
          Some of the following links are affiliate or referral links, and I have done my best to mark them as such. As an Amazon Associate I earn from qualifying purchases. This helps me pay my bills!
        </p>

        <h2>Hardware & Gear</h2>

        <dl class="text-base leading-relaxed">
          <div class="py-4">
            <dt :class="dtClass">
              💻 <span data-tippy-content="Osgood" data-tippy-placement="left">2018 15&quot; MacBook Pro</span>
            </dt>
            <dd class="flex-grow">
              <p>My third MBP. Before this, I had mid-2012 (Sherl0ck).
                My first was a mid-2009 17-inch (Gustav).
                I miss that big screen but definitely not how heavy it was!</p>
            </dd>
          </div>
          <div class="py-4">
            <dt class="flex-shrink-0 mb-2 text-lg font-medium text-gray-900 lg:mb-2">
              🍏 <span data-tippy-content="Wats0n" data-tippy-placement="left">2012 Mac Mini</span>
            </dt>
            <dd class="flex-grow">
              <p>The last Mini with user-upgradeable RAM. 😭 Has dual SSD & HDD thanks to the <a href="https://www.ifixit.com/Guide/Installing+Mac+Mini+Late+2012+Dual+Hard+Drive+Kit/11713">dual hard drive kit</a> from iFixit. It currently has 10 GB of RAM because I haven't gotten around to buying a second 8 GB stick. 😅</p>

              <p>Poor thing is on 24/7 since it acts as a server. Eventually I'd like to have a desktop Mac or at least a desktop setup for my MBP and a linux server machine of some sort.</p>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              📱 <span data-tippy-content="Ashildr" data-tippy-placement="left">iPad Air (3rd gen)</span>
            </dt>
            <dd class="flex-grow">
              <p>
                Mostly used for gaming and reading. 🤷 The <a
                href="https://amzn.to/2Wnknei" data-tippy-content="* Affiliate link">Apple Pencil</a> is great with GoodNotes & Procreate.
              </p>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              🤖 <span data-tippy-content="Oswin" data-tippy-placement="left">Pixel 3a XL</span>
            </dt>
            <dd class="flex-grow">
              <p>
                My second Pixel after the OG Pixel.
              </p>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              📷 <a href="https://amzn.to/3ansRu9" data-tippy-content="* Affiliate link">Canon T5i</a>
            </dt>
            <dd class="flex-grow">
              <p>
                I have the kit 18-55mm lens and a nifty <a href="https://amzn.to/3oUMIEQ" data-tippy-content="* Affiliate link">50mm f/1.8</a>.
              </p>
            </dd>
          </div>
        </dl>

        <hr>

        <h2>Software</h2>

        <h3>Development</h3>

        <dl class="text-base leading-relaxed">
          <div class="py-4">
            <dt :class="dtClass">
              🍵 <a class="font-medium" href="https://gitea.io">Gitea</a>
            </dt>
            <dd class="flex-grow">
              <p>I use this to host git repositories off of my Mini.</p>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              🚗 <a href="https://laravel.com/docs/valet">Laravel Valet</a>
            </dt>
            <dd class="flex-grow">
              <p>For my <abbr title="MacBook Pro">MBP</abbr> it's nice to have a web server that just works.</p>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              🌩 <a href="https://www.jetbrains.com/phpstorm">PhpStorm</a>
            </dt>
            <dd class="flex-grow">
              <p>This should be a given, since I'm primarily a PHP developer. <a
                href="https://laravel-idea.com/">Laravel Idea</a> is a great plugin!</p>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              🛠 <a href="https://tinkerwell.app">Tinkerwell</a>
            </dt>
            <dd class="flex-grow">
              <p>A <strong>must have</strong> for every <a href="https://laravel.com">Laravel</a> developer.</p>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              🏗 <a href="https://git-tower.com">Tower</a>
            </dt>
            <dd class="flex-grow">
              <p class="">
                What can I say? I'm a visual person, so I prefer a GUI for git.
              </p>
            </dd>
          </div>
        </dl>

        <h3>Entertainment</h3>

        <dl class="text-base leading-relaxed">
          <div class="py-4">
            <dt :class="dtClass">
              📚 <a href="https://calibre-ebook.com">Calibre</a>
            </dt>
            <dd class="flex-grow">
              <p>I set up Calibre on my Mini to host my growing eBook collection.</p>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              📺 <a href="https://plex.tv">Plex</a>
            </dt>
            <dd class="flex-grow">
              <p>Hosts a modest collection of movies and TV series from my Mini.</p>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              🎧 <a href="https://spotify.com">Spotify</a>
            </dt>
            <dd class="flex-grow">
              <p>Premium is worth it. I have the plan that includes free <a href="https://hulu.com">Hulu</a>. Check out <a href="https://open.spotify.com/user/1236972202">my profile</a> and my full listening history since <span data-tippy-content="!!!">2006</span> on <a href="https://last.fm/user/r4dical">Last.fm</a>.</p>
            </dd>
          </div>
        </dl>

        <h3>Productivity</h3>

        <dl class="text-base leading-relaxed">
          <div class="py-4">
            <dt :class="dtClass">
              📓 <a href="https://notion.so">Notion</a>
            </dt>
            <dd class="flex-grow">
              <p>Amazing for organizing. I have the Personal Pro plan as I was a paid subscriber before they made a bunch of features free. Excited for the upcoming API.</p>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              ✅ <a href="https://todoist.com/r/hannah_nzruai" data-tippy-content="* Referral link">Todoist</a>
            </dt>
            <dd class="flex-grow">
              <p>Helping me get things done since 2014.</p>
            </dd>
          </div>
        </dl>

        <h3>Security</h3>

        <dl class="text-base leading-relaxed">
          <div class="py-4">
            <dt :class="dtClass">
              🔒 <a href="https://authy.com">Authy</a>
            </dt>
            <dd class="flex-grow">
              <p>I like that it works on multiple devices.</p>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              🔑 <a href="https://keybase.io">Keybase</a>
            </dt>
            <dd class="flex-grow">
              <p>For encrypting stuff and things. Check out <a href="https://keybase.io/geekish">my profile</a>.</p>
            </dd>
          </div>
        </dl>

        <h3>Utilities</h3>

        <dl class="text-base leading-relaxed">
          <div class="py-4">
            <dt :class="dtClass">
              🎩 <a href="https://alfredapp.com">Alfred</a>
            </dt>
            <dd class="flex-grow">
              <p>Much more useful than Spotlight by itself.</p>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              ☀️ <a href="https://apps.apple.com/us/app/amphetamine/id937984704?mt=12">Amphetamine</a>
            </dt>
            <dd class="flex-grow">
              <p>Keeps my Macs awake when I want, with custom triggers and tons more features, <em>for free</em>.</p>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              🍸 <a href="https://www.macbartender.com">Bartender</a>
            </dt>
            <dd class="flex-grow">
              <p>Tends the icons in your menubar. At time of writing, I have 13 icons hidden by Bartender.</p>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              🖱 <a href="#">BetterTouchTool</a>
            </dt>
            <dd class="flex-grow">
              <p>Many features but what I really use are the multi-touch gestures, custom touch bar buttons/widgets and window snapping.</p>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              💾 <a href="https://bombich.com">Carbon Copy Cloner</a>
            </dt>
            <dd class="flex-grow">
              <p>Takes full, bootable backups of my Macs.</p>
            </dd>
          </div>
        </dl>

        <hr>

        <h2>What I Use too....</h2>

        <h3>Stuff</h3>

        <dl class="text-base leading-relaxed">
          <div class="py-4">
            <dt :class="dtClass">
              Domains
            </dt>
            <dd class="flex-grow text-gray-400">
              <a href="https://hover.com">Hover</a>,
              <a href="https://namecheap.com">Namecheap</a>,
              <a href="https://porkbun">Porkbun</a>
              – Oops, I need to consolidate!
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              Hosting
            </dt>
            <dd class="flex-grow text-gray-400">
              <a href="https://m.do.co/c/62c96545ab9e" data-tippy-content="* Referral link">Digital Ocean</a>,
              <a href="https://netlify.com" data-tippy-content="Hosting this site!">Netlify</a>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              Frontend
            </dt>
            <dd class="flex-grow text-gray-400">
              <a href="https://inertiajs.com">Inertia.js</a> or <a
              href="https://nuxtjs.org">Nuxt</a>,
              <a href="https://tailwindcss.com">Tailwind CSS</a> + <a href="https://tailwindui.com">UI</a>,
              <a href="https://vuejs.org">Vue.js</a>
            </dd>
          </div>
          <div class="py-4">
            <dt :class="dtClass">
              Backend
            </dt>
            <dd class="flex-grow text-gray-400">
              <a href="https://inertiajs.com">Inertia.js</a>,
              <a href="https://laravel.com">Laravel</a>,
              <a href="https://statamic.com">Statamic</a>
            </dd>
          </div>
        </dl>
      </div>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us',
  },
  data () {
    return {
      dtClass: 'mb-2 flex-shrink-0 font-medium text-lg text-gray-900 dark:text-gray-100',
    }
  }
}
</script>

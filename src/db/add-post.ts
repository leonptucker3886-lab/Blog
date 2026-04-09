import { db } from './index';
import { posts } from './schema';

async function addPost() {
  await db.insert(posts).values({
    title: 'The Epic Story of Life: From the Big Bang to Today – A Straightforward Timeline',
    content: `
      <p class="text-lg mb-8">
        The history of the universe and life on Earth spans 13.8 billion years. Most of it happened long before humans existed. Here is a matter-of-fact look at the most important events that shaped everything we know, from the birth of the cosmos to the world we live in now. I focus only on the pivotal milestones and explain why each one mattered.
      </p>

      <h2 class="text-2xl font-bold mt-12 mb-6">13.8 billion years ago: The Big Bang occurred.</h2>
      <p class="mb-4">
        The entire universe began as an incredibly hot, dense point that expanded rapidly. Space, time, matter, and energy all came into existence in this single event.
      </p>
      <p class="mb-6">
        Its significance cannot be overstated: without the Big Bang, there would be no stars, no planets, and no life. It set the fundamental laws of physics and the expansion rate that still governs the cosmos today.
      </p>

      <h2 class="text-2xl font-bold mt-12 mb-6">Roughly 300 million years after the Big Bang (about 13.5 billion years ago): The first stars and galaxies formed.</h2>
      <p class="mb-4">
        The universe had cooled enough for gravity to pull hydrogen and helium gas into the first massive stars. These stars lived short, violent lives and exploded as supernovae, forging the first heavy elements (carbon, oxygen, iron) and scattering them into space. Galaxies began to take shape.
      </p>
      <p class="mb-6">
        This was the moment the universe stopped being almost entirely dark and empty. Those early stars produced the raw materials needed for rocky planets and, eventually, chemistry complex enough for life.
      </p>

      <h2 class="text-2xl font-bold mt-12 mb-6">4.6 billion years ago: Our solar system formed.</h2>
      <p class="mb-4">
        A giant cloud of gas and dust left over from previous star deaths collapsed under gravity, forming the Sun at the center and a disk of material that coalesced into planets, moons, and asteroids.
      </p>
      <p class="mb-6">
        Significance: This created the stable, metal-rich environment around a middle-aged star where Earth could form and sustain liquid water and complex chemistry.
      </p>

      <h2 class="text-2xl font-bold mt-12 mb-6">4.5 billion years ago: Earth formed.</h2>
      <p class="mb-4">
        Our planet accreted from the swirling disk of material around the young Sun. Heavy elements sank to form a core, and the surface cooled into a crust. Early oceans and an atmosphere soon appeared.
      </p>
      <p class="mb-6">
        This was the birthplace of everything that followed on our world. Earth's size, distance from the Sun, and molten interior gave it plate tectonics, a magnetic field, and the right conditions for life to begin.
      </p>

      <h2 class="text-2xl font-bold mt-12 mb-6">About 3.8 billion years ago: The first life appeared on Earth.</h2>
      <p class="mb-4">
        Simple single-celled microbes (prokaryotes) emerged in the oceans. These were the earliest organisms capable of metabolism and reproduction, likely using chemical energy from hydrothermal vents or sunlight.
      </p>
      <p class="mb-6">
        Significance: This marked the transition from non-living chemistry to biology. All life today—plants, animals, fungi, and humans—descends from these ancient microbes. Life had begun reshaping the planet.
      </p>

      <h2 class="text-2xl font-bold mt-12 mb-6">2.4 billion years ago: The Great Oxidation Event occurred.</h2>
      <p class="mb-4">
        Cyanobacteria evolved oxygen-producing photosynthesis. Oxygen levels in the atmosphere and oceans skyrocketed.
      </p>
      <p class="mb-6">
        This event was revolutionary. Oxygen enabled far more efficient energy production (aerobic respiration), paving the way for larger, more complex organisms. It also caused the planet's first major mass extinction by poisoning many anaerobic microbes. The atmosphere we breathe today traces directly back to this oxygen revolution.
      </p>

      <h2 class="text-2xl font-bold mt-12 mb-6">Roughly 2 billion years ago: The first eukaryotic cells appeared.</h2>
      <p class="mb-4">
        Through endosymbiosis—where one bacterium was engulfed by another and became the energy-producing mitochondrion—cells gained nuclei, complex internal structures, and much greater size and capability.
      </p>
      <p class="mb-6">
        Significance: Eukaryotes made multicellular life possible. Almost every organism more complex than a bacterium belongs to this group. Without this step, there would be no plants, animals, or humans.
      </p>

      <h2 class="text-2xl font-bold mt-12 mb-6">541 million years ago: The Cambrian Explosion took place.</h2>
      <p class="mb-4">
        Within a geologically short window of about 20–25 million years, nearly all major animal body plans (phyla) appeared in the fossil record—creatures with eyes, shells, legs, and complex behaviors.
      </p>
      <p class="mb-6">
        This was not the sudden invention of life, but an explosion of diversity and ecological roles. Predators, prey, and ecosystems as we recognize them today took shape. It set the stage for the animal-dominated world that followed.
      </p>

      <h2 class="text-2xl font-bold mt-12 mb-6">Around 470 million years ago (plants) and 360 million years ago (animals): Life colonized land.</h2>
      <p class="mb-4">
        First plants moved onto land, followed later by the first four-limbed vertebrates (tetrapods). Forests spread, and animals adapted to breathe air and support their weight on land.
      </p>
      <p class="mb-6">
        Significance: This transformed Earth's surface from barren rock to green continents full of life. It created new habitats, increased oxygen levels further, and eventually allowed the evolution of mammals, dinosaurs, and us. Land life also helped regulate climate and soil formation.
      </p>

      <h2 class="text-2xl font-bold mt-12 mb-6">252 million years ago: The Permian-Triassic extinction (the "Great Dying") wiped out about 96% of marine species and 70% of land species.</h2>
      <p class="mb-4">
        Massive volcanic eruptions, climate change, and ocean anoxia caused the worst mass extinction in Earth's history.
      </p>
      <p class="mb-6">
        Significance: It cleared the ecological deck. Survivors evolved into new groups, including the ancestors of dinosaurs and mammals. Without this reset, the later dominance of reptiles and then mammals might never have happened.
      </p>

      <h2 class="text-2xl font-bold mt-12 mb-6">66 million years ago: The Cretaceous-Paleogene extinction occurred.</h2>
      <p class="mb-4">
        An asteroid impact, combined with volcanic activity, killed off the non-avian dinosaurs and about 75% of species.
      </p>
      <p class="mb-6">
        Significance: This event ended the age of dinosaurs and opened the door for mammals to diversify rapidly. Modern ecosystems, including the rise of large mammals and eventually primates, trace back to the survivors of this catastrophe.
      </p>

      <h2 class="text-2xl font-bold mt-12 mb-6">About 300,000 years ago: Homo sapiens emerged in Africa.</h2>
      <p class="mb-4">
        Modern humans appeared, equipped with large brains, language, and advanced tool-making abilities.
      </p>
      <p class="mb-6">
        Significance: Our species is the first (and so far only) capable of abstract thought, culture, science, and global impact. From this point, human innovation began reshaping the planet at an accelerating rate.
      </p>

      <h2 class="text-2xl font-bold mt-12 mb-6">About 12,000 years ago: Agriculture and permanent settlements developed.</h2>
      <p class="mb-4">
        Humans began domesticating plants and animals, leading to farming, cities, writing, and complex societies.
      </p>
      <p class="mb-6">
        Significance: This shift from hunter-gatherer life to civilization fueled population growth, technology, and culture. It is the foundation of everything we call "history" today.
      </p>

      <p class="mb-6">
        We occupy an almost impossibly thin slice of this 13.8-billion-year story. Every atom in your body was forged in ancient stars. Every breath you take carries oxygen first produced by microbes billions of years ago. Life did not appear suddenly—it was the result of countless cosmic and planetary processes that built upon each other, step by step.
      </p>

      <p class="mb-6">
        The universe is still expanding. Earth is still changing. And life continues to evolve. Understanding this timeline reminds us how connected we are to the entire history of existence—and how remarkable it is that we are here to reflect on it at all.
      </p>
    `,
    slug: 'epic-story-life-big-bang-today',
    tags: JSON.stringify(['history', 'timeline', 'universe', 'life', 'evolution']),
    readTime: '10 min read'
  });

  console.log('Blog post added successfully!');
}

addPost().catch(console.error);
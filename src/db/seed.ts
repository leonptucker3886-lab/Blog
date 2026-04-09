import { db } from './index';
import { posts } from './schema';

async function seed() {
  // Clear existing posts
  await db.delete(posts);

  // Add sample post
  await db.insert(posts).values({
    title: 'Understanding DARVO',
    subtitle: 'Narcissism, Manipulation Tactics, and How to Protect Yourself',
    content: `
      <p class="text-lg mb-8">
        Narcissism isn't just about self-absorption or vanity—when it crosses into narcissistic personality traits or narcissistic abuse, it often involves sophisticated psychological tactics designed to control, confuse, and evade accountability. One of the most effective and insidious strategies is <strong>DARVO</strong>, a pattern that leaves victims questioning their own reality.
      </p>

      <div class="my-8 p-6 rounded-lg border border-gray-300 bg-gray-50">
        <p class="text-center mb-4">
          Explore realistic examples of these tactics in action with the{' '}
          <a href="https://v0-narcassist-response-generator.vercel.app" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
            Narcissist Response Generator personality test and toolkit
          </a>
          {' '}— a free educational resource designed to help you recognize and analyze narcissistic responses.
        </p>
      </div>

      <p class="mb-6">
        This blog post breaks down DARVO clearly, explores related narcissistic tactics, and offers practical steps for recognition and recovery. Whether you're navigating a difficult relationship, recovering from emotional abuse, or simply educating yourself, understanding these dynamics is empowering.
      </p>

      <h2 class="text-2xl font-bold mt-12 mb-6">
        What Is DARVO? The Acronym That Explains Gaslighting on Steroids
      </h2>

      <p class="mb-4">
        <strong>DARVO</strong> stands for <strong>Deny, Attack, Reverse Victim and Offender</strong>. It was coined in the 1990s by psychologist Dr. Jennifer Freyd in her research on betrayal trauma and perpetrator responses—particularly in cases of sexual abuse, though it applies broadly to narcissistic and abusive dynamics today.
      </p>

      <p class="mb-4">
        When confronted with harmful behavior, instead of owning up, a person using DARVO follows a predictable three-step script:
      </p>

      <div class="my-6 space-y-6">
        <div class="p-4 rounded-lg border border-gray-200 bg-white">
          <h3 class="font-bold text-xl mb-2 text-blue-600">1. Deny</h3>
          <p class="mb-3">The individual flatly rejects the accusation or minimizes it.</p>
          <ul class="list-disc pl-6 space-y-1 text-gray-700">
            <li>"That never happened."</li>
            <li>"You're exaggerating/misremembering/making this up."</li>
            <li>"I would never do something like that."</li>
          </ul>
        </div>

        <div class="p-4 rounded-lg border border-gray-200 bg-white">
          <h3 class="font-bold text-xl mb-2 text-blue-600">2. Attack</h3>
          <p class="mb-3">Once denial is on the table, the person shifts to aggressive counter-attacks against the accuser's character, memory, or motives. This often feels like gaslighting.</p>
          <ul class="list-disc pl-6 space-y-1 text-gray-700">
            <li>"You're crazy/too sensitive/paranoid."</li>
            <li>"You're always causing drama."</li>
            <li>"This is why no one can stand being around you."</li>
          </ul>
        </div>

        <div class="p-4 rounded-lg border border-gray-200 bg-white">
          <h3 class="font-bold text-xl mb-2 text-blue-600">3. Reverse Victim and Offender</h3>
          <p class="mb-3">The final twist: the abuser claims <em>they</em> are the real victim while painting the original victim as the perpetrator.</p>
          <ul class="list-disc pl-6 space-y-1 text-gray-700">
            <li>"You're the one abusing <em>me</em> by bringing this up."</li>
            <li>"Look at how you're hurting my reputation/family/mental health."</li>
            <li>"I'm the one who should be upset here."</li>
          </ul>
        </div>
      </div>

      <p class="mb-6">
        This sequence is incredibly effective because it flips the power dynamic, induces guilt in the victim, and often recruits bystanders who only hear the "victim" narrative from the narcissist.
      </p>
    `,
    slug: 'darvo',
    tags: JSON.stringify(['narcissism', 'DARVO', 'abuse', 'manipulation', 'mental health']),
    readTime: '15 min read'
  });

  console.log('Database seeded successfully!');
}

seed().catch(console.error);
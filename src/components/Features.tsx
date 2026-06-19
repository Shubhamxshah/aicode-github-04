import { FeatureCard } from './FeatureCard';

export const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built with Vite for instant hot module replacement and blazing fast builds.'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Styled with Tailwind CSS for a modern, responsive, and customizable interface.'
    },
    {
      icon: '🔧',
      title: 'Easy to Customize',
      description: 'Clean component structure makes it simple to modify and extend functionality.'
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Works perfectly on all devices, from mobile phones to desktop computers.'
    },
    {
      icon: '🔒',
      title: 'Type Safe',
      description: 'Written in TypeScript to catch errors early and improve developer experience.'
    },
    {
      icon: '♿',
      title: 'Accessible',
      description: 'Built with accessibility in mind, following best practices for all users.'
    }
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Amazing Features</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to build a modern web application
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};
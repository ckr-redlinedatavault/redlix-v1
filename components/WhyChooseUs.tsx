interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Expert Team',
    description: 'Our team consists of industry experts with years of experience in their respective fields.',
    icon: '👥',
  },
  {
    title: 'Innovation First',
    description: 'We stay ahead of the curve with the latest technologies and innovative solutions.',
    icon: '🚀',
  },
  {
    title: 'Proven Results',
    description: 'Track record of delivering successful projects that exceed client expectations.',
    icon: '✅',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support to ensure your business never stops running.',
    icon: '🛡️',
  },
  {
    title: 'Scalable Solutions',
    description: 'Build for today, scale for tomorrow. Our solutions grow with your business.',
    icon: '📈',
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees. Clear, upfront pricing with flexible payment options.',
    icon: '💰',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border-2 border-gray-200 dark:border-gray-800 rounded-2xl hover:border-black dark:hover:border-white transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Ready to experience the difference?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}


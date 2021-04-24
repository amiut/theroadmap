import CategoryCard from '@components/cards/category-card';
import React from 'react';

const Roadmaps: React.FC = () => {
  return (
    <section className="roadmaps bg-gray-400 bg-opacity-20 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 2xl:grid-cols-4">
          <CategoryCard />
        </div>
      </div>
    </section>
  )
}

export default Roadmaps

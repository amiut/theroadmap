import React from 'react';
import Link from 'next/link';

export interface CategoryCardProps {
  link: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({link = '/'}) => {
  return (
    <div className="bg-white rounded-md relative py-4 px-6 shadow-sm hover:shadow-lg transition-all ease-in-out duration-300">
      <div className="font-bold category-title text-lg mb-1">
        برنامه نویسی فرانت اند
      </div>

      <div className="description text-sm text-gray-600">
        راهنمای قدم به قدم یادگیری برنامه نویسی فرانت اند
      </div>

      {link && (
        <Link href={link}>
          <a className="absolute inset-0 z-10">
            <span className="sr-only">برنامه نویسی فرانت اند</span>
          </a>
        </Link>
      )}
    </div>
  )
}

export default CategoryCard

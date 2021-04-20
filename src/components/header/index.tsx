import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="container mx-auto flex items-center py-4 mb-10">
      <div className="font-black text-2xl">
        نقشه راه برنامه نویسی
      </div>

      <nav className="mr-auto">
        <ul className="flex items-center">
          <li className="px-6">
            <a href="">
              رودمپ ها
            </a>
          </li>

          <li className="px-6">
            <a href="">
              مقالات آموزشی
            </a>
          </li>

          <li className="px-6">
            <a href="">
              ویدیو ها
            </a>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header;

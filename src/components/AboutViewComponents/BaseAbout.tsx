import { Icon } from '@iconify/react/dist/iconify.js'

export default function BaseAbout() {
  const icon = 'h-9 w-9 sm:h-11 sm:w-11'
  const li =
    'bg-gray-800 text-gray-50 py-2 pl-6 pr-4 rounded-md font-medium flex justify-between items-center gap-4'
  const icon2 = 'h-6 w-6'
  return (
    <div className="text-center py-10 grid gap-5">
      <div className="px-10 grid gap-5">
        <h3 className="font-semibold text-2xl sm:text-3xl">
          Hi' I'm Alejandro
        </h3>
        <p className="font-medium text-lg">
          UI & UX Designer Fullstack Developer AI Developer
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full px-9 gap-4">
          <div className="bg-gray-300 rounded-sm grid gap-4 p-7">
            <h5 className="font-semibold text-base uppercase">frontend</h5>
            <div className="flex flex-wrap justify-center gap-3">
              <Icon icon="skill-icons:nuxtjs-dark" className={icon}></Icon>
              <Icon icon="skill-icons:react-dark" className={icon}></Icon>
              <Icon icon="skill-icons:sass" className={icon}></Icon>
              <Icon icon="skill-icons:d3-dark" className={icon}></Icon>
              <Icon icon="skill-icons:figma-dark" className={icon}></Icon>
              <Icon icon="skill-icons:pinia-dark" className={icon}></Icon>
              <Icon icon="skill-icons:vite-dark" className={icon}></Icon>
              <Icon icon="skill-icons:threejs-dark" className={icon}></Icon>
              <Icon icon="skill-icons:vuejs-dark" className={icon}></Icon>
              <Icon icon="skill-icons:bootstrap" className={icon}></Icon>
              <Icon icon="skill-icons:nextjs-dark" className={icon}></Icon>
              <Icon icon="skill-icons:tauri-dark" className={icon}></Icon>
            </div>
          </div>
          <div className="bg-gray-300 rounded-sm grid gap-4 p-7">
            <h5 className="font-semibold text-base uppercase">Backend</h5>
            <div className="flex flex-wrap justify-center gap-3">
              <Icon icon="skill-icons:nodejs-dark" className={icon}></Icon>
              <Icon icon="skill-icons:expressjs-dark" className={icon}></Icon>
              <Icon icon="skill-icons:django" className={icon}></Icon>
              <Icon icon="skill-icons:mongodb" className={icon}></Icon>
              <Icon icon="skill-icons:mysql-dark" className={icon}></Icon>
              <Icon icon="skill-icons:redis-dark" className={icon}></Icon>
              <Icon icon="skill-icons:postgresql-dark" className={icon}></Icon>
              <Icon icon="skill-icons:nginx" className={icon}></Icon>
            </div>
          </div>
          <div className="bg-gray-300 rounded-sm grid gap-4 p-7">
            <h5 className="font-semibold text-base uppercase">Others</h5>
            <div className="flex flex-wrap justify-center gap-3">
              <Icon icon="skill-icons:typescript" className={icon}></Icon>
              <Icon icon="skill-icons:solidity" className={icon}></Icon>
              <Icon icon="skill-icons:docker" className={icon}></Icon>
              <Icon icon="skill-icons:github-dark" className={icon}></Icon>
              <Icon icon="skill-icons:bash-dark" className={icon}></Icon>
              <Icon icon="skill-icons:python-dark" className={icon}></Icon>
              <Icon icon="skill-icons:rust" className={icon}></Icon>
              <Icon icon="skill-icons:selenium" className={icon}></Icon>
              <Icon icon="skill-icons:linux-dark" className={icon}></Icon>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-medium text-lg">More projects</h3>
        <ul className="flex flex-col gap-2 mt-5 mx-5 md:flex-row md:justify-center">
          <li className={li}>
            <a
              href="https://ecommerce-frontend-jet-gamma.vercel.app/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Ecommerce V1 NUXT
            </a>
            <Icon icon="ri:link" className={icon2}></Icon>
          </li>
          <li className={li}>
            <a
              href="https://crypto-app-frontend-react.vercel.app/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Website Crypto REACT
            </a>
            <Icon icon="ri:link" className={icon2}></Icon>
          </li>
          <li className={li}>
            <a
              href="https://movie-page-frontend.vercel.app/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Website Movies NUXT
            </a>
            <Icon icon="ri:link" className={icon2}></Icon>
          </li>
          <li className={li}>
            <a
              href="https://github.com/Alej212/scraping-ecommerce"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Web Scraping with SELENIUM
            </a>
            <Icon icon="ri:link" className={icon2}></Icon>
          </li>
        </ul>
      </div>
    </div>
  )
}

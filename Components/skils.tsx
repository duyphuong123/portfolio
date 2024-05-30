import React from 'react'
import SkilsItem from './SkilsItem'
import SkilsLanguage from './SkilsLanguage'

const skils = () => {
  return (
    <div id='skill' className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#000022]'>
        <h1 className='heading'>
            Education & <span className='text-yellow-400'>Skill</span>
        </h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
            <div>
                <SkilsItem 
                title="PROGRAMMING LANGUAGES" 
                // year="2022 - 2024"
                note="Javascript, Typescript"/>
                <SkilsItem 
                title="DATABASE & ORM, ODM" 
                // year="2023 - 2024"
                note="Mysql, Sqlite, MongoDB, FireBase, Sequilize, Mongoose"/>      
                <SkilsLanguage 
                    skill1="Nodejs" 
                    skill2="Nextjs" 
                    skill3="Typescript"  
                    level1="w-[91%]"
                    level2="w-[88%]"
                    level3="w-[80%]"/>
            </div>

            <div>
                <SkilsItem 
                title="FRAMEWORKS & PLATFORMS" 
                // year="2023 - 2024"
                note="Nodejs, Reactjs, Nextjs, ReactNative"/>
                <SkilsItem 
                title="IDE" 
                // year="2023 - 2024"
                note="Visual studio code"/>
                <SkilsLanguage 
                    skill1="HTML" 
                    skill2="CSS" 
                    skill3="Javascript"  
                    level1="w-[81%]"
                    level2="w-[78%]"
                    level3="w-[70%]"/>
            </div>
        </div>
    </div>
  )
}

export default skils
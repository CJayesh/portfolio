import React from 'react'


type Props = {
    icon: any,
    text: string
}


function SkillItem({ icon, text }: Props) {
    return (
        <div className='px-2 flex flex-col items-center'>
            {icon}
            <div>
                {text}
            </div>
        </div>
    )
}

export default SkillItem
import {TitleHeader, Image } from './styled'

export const Header = (props) => {
    const { profile } = props

    return(
        <TitleHeader>
            {profile.name && profile.avatar ? 
            <span>  
                    <TitleHeader>{profile.name}</TitleHeader>
                    <Image src={profile.avatar} />
            </span>
            :
            <></>
            }
            Insta4
        </TitleHeader>
    )
}
import React from 'react';
import { ReactComponent as Moon } from '../Images/MoonLogo.svg';
import { ReactComponent as GitHub } from '../Images/navGithub.svg';
import { ReactComponent as Instagram } from '../Images/navInsta.svg';
import { ReactComponent as LinkedIn } from '../Images/navLinkedIn.svg';
import { ReactComponent as Facebook } from '../Images/navFacebook.svg';

export const MoonLogo = () => {
    return (<Moon />)
}

export default function getLogo( logotype: string, w: string, h: string) {
    if (logotype === 'GitHub') return <GitHub width={w} height={h} />
    if (logotype === 'Instagram') return <Instagram width={w} height={h} />
    if (logotype === 'LinkedIn') return <LinkedIn width={w} height={h} />
    if (logotype === 'Facebook') return <Facebook width={w} height={h} />
}

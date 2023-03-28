import React from 'react'
import BakeryItems from '../../Components/BakeryItems';
import Family from '../../Components/FamilyBakery';
import FamilySelection from '../../Components/FamilySelection';
import Introduction from '../../Components/Introduction';
import OrganicBread from '../../Components/OrganicBread';
import StoryRender from '../../Components/StoryRender';
import BreadGrid from '../../Components/BreadGrid';
import Preservation from '../../Components/Preservation';


const HomePage = () => {
    return(
        <div>
            <Introduction />
            <Family />
            <FamilySelection />
            <BakeryItems />
            <OrganicBread />
            <StoryRender />
            <BreadGrid />
            <Preservation />
        </div>
    )
}

export default HomePage;
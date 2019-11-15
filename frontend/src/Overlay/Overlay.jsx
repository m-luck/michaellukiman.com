import React from 'react';
import MichaelLogo from './MichaelLogo/MichaelLogo';
import FeaturedItem from './FeaturedItem/FeaturedItem';
import './Overlay.css';

class Overlay extends React.Component {

    render() {
        return(
        <div className="overlay">
            <div id="information" className="scroll4"></div>
            <MichaelLogo/>
            <h3>Featured<br></br>Items</h3>
            <div className="featured scroll4">
                <FeaturedItem
                    cId="lipnet"
                    buttonText="LEARN MORE"
                    itemName="DeepLipReadng" 
                    itemSub="LipNet + GPT2 = ??"
                    itemDesc="Using predictive language modeling to assist lip reading vision networks."
                    func="goTo"
                    funcArgs="[40.6, -73.9]"
                    infoHTML = 
                    "
                    <h3>
                        Deep Lip Reading
                    </h3>
                    <p>
                        A new machine learning experiment,
                        deep lip reading combines both computer vision models
                        and natural language processing to predict speech.
                    </p>
                    <p>
                        Using a dataset which has self-referencing transcriptions, we can train a vision network to recognize utterances and construct words.
                        Concatenating output of next-word prediction from GPT2, we can have the network take advantage of semantic insights to improve its overall prediction. 
                    </p>
                    "
                />
                <FeaturedItem 
                    cId="th"
                    buttonText="PURCHASE"
                    itemName="TimeHere" 
                    itemSub="For my mother."
                    itemDesc="A generated document to preserve life's values and stories. For those you wish to know more."
                    func="goTo"
                    funcArgs="[34.2, -118.6]"
                    infoHTML=
                    "<h3>TimeHere</h3>
                    <p>Visit the site for more info.</p>"
                    />
                <FeaturedItem
                    cId="aoeai"
                    buttonText="LEARN MORE"
                    itemName="AlphaEmpires" 
                    itemSub="The grassroots Age of Empires AI."
                    itemDesc="Set of internally trained CNNs to recognize units to bootstrap a reinforcement learning agent to play AOE."
                    func="goTo"
                    funcArgs="[40.6, -73.9]"
                    infoHTML = 
                    "<h3>AlphaEmpires</h3>
                    <p>Introducing the world's first machine learning platform for Age of Empires.</p>"
                />

                <FeaturedItem
                    cId="nngpu"
                    itemName="Spiking Izkevich Networks on CUDA" 
                    itemSub="SNNs on GPUs."
                    itemDesc="A parallelized implementation of spiking neural networks using NVIDIA CUDA."
                    func="goTo"
                    funcArgs="[40.6, -73.9]"
                />
            </div>
        </div>
        );
    }
}

export default Overlay;
import MissionCard from './MissionCard';
import './../styles/VisionMission.css';
import missionicon from './../assets/Images/mission-flag.png';
import visionicon from './../assets/Images/vision-icon.png';


const VisionMission = () => {
    return ( 
        <div className="container vision-mission py-5 no-gutters mt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <MissionCard icon={missionicon} heading="Our Mission" content="To sharpen our edge in the manufacture and marketing of quality baked products." />
                </div>

                <div className="col-6">
                    <MissionCard icon={visionicon} heading="Our Vision" content="To provide a nourishing,convenient and accesible answer hunger's call."  />
                </div>
            </div>
        </div>
     );
}

export default VisionMission;
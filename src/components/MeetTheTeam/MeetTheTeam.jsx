import Image from "next/image"
// Components
import { Heading } from "..";
// Data
import { agents } from "./agents";
// Styles
import { StyledTeamContent, StyledTeamContentCard } from "./styles";
// Icons
import { AiOutlinePhone } from 'react-icons/ai';

const MeetTheTeam = () => {
  return (
    <section className="team">
      <div className="container">
        <Heading subTitle='Expertise Is Here' title='Our Exclusive Agents'/>

        <StyledTeamContent>
          {agents.map((agent) => (
            <StyledTeamContentCard key={agent.name}>
              <div>
              <Image 
                src={agent.image}
                width={100}
                height={100}
                alt={agent.name}
              />
              </div>

              <div className="team__content-info">
                <p className="name">{agent.name}</p>
                <p className="desc">{agent.title}</p>
                <hr />
                <p className="phone"><AiOutlinePhone /> {agent.phone}</p>
              </div>
            </StyledTeamContentCard>
          ))}
        </StyledTeamContent>
      </div>
    </section>
  )
}

export default MeetTheTeam
import { Row, Col, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { java_img, python_img, react_img, git_img, sql_img,
     c_img, aws_img, crit_think, lead_img, follow_img, adapt_img, 
     work_img } from '../assets/img';

export const Skills = () => {
        const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };

          return (
            <section className='skill' id='skills'>
                <Container>
                    <Row>
                        <Col>
                        <div className='skill-box'>
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Below you will find some technical and soft skills that I have acquired over my experience so far.
                                The knowledge level range is relative to me and although I have "excellent" for a couple items, I still have plenty of room for growth in those areas.
                            </p>
                            <h3 className='tech-title'>Technical Skills</h3>
                            <h4 className='knowledge-lvl'>
                                Knowledge Level Range: <span className='excellent'>Excellent</span> - <span className='proficient'>Proficient</span> - <span className='familiar'>Familiar</span>
                            </h4>
                            <div className='skill-slides'>
                                <Carousel responsive={responsive} infinite={true} className='tech-skills-slide'>
                                    <div className='item'>
                                        <img src={java_img} alt='java' />
                                        <h5>Java<br /><span className='excellent'>Excellent</span></h5>
                                    </div>
                                    <div className='item'>
                                        <img src={git_img} alt='git' />
                                        <h5>Git/GitHub<br /><span className='excellent'>Excellent</span></h5>
                                    </div>
                                    <div className='item'>
                                        <img src={python_img} alt='python' />
                                        <h5>Python<br /><span className='proficient'>Proficient</span></h5>
                                    </div>
                                    <div className='item'>
                                        <img src={react_img} alt='react' />
                                        <h5>React<br /><span className='familiar'>Familiar</span></h5>
                                    </div>
                                    <div className='item'>
                                        <img src={sql_img} alt='git' />
                                        <h5>SQL<br /><span className='familiar'>Familiar</span></h5>
                                    </div>
                                    <div className='item'>
                                        <img src={c_img} alt='c' />
                                        <h5>C/C++/C#<br /><span className='familiar'>Familiar</span></h5>
                                    </div>
                                    <div className='item'>
                                        <img src={aws_img} alt='aws' />
                                        <h5>AWS<br /><span className='familiar'>Familiar</span></h5>
                                    </div>
                                </Carousel>
                                <h3 className='soft-title'>Soft Skills</h3>
                                <Carousel responsive={responsive} infinite={true} className='soft-skills-slide'>
                                <div className='item'>
                                        <img src={crit_think} alt='crit think' />
                                        <h5>Critical Thinking</h5>
                                </div>
                                <div className='item'>
                                        <img src={adapt_img} alt='adapt' />
                                        <h5>Adaptability</h5>
                                </div>
                                <div className='item'>
                                        <img src={lead_img} alt='leader' />
                                        <h5>Leadership</h5>
                                </div>
                                <div className='item'>
                                        <img src={follow_img} alt='follow' />
                                        <h5>Followership</h5>
                                </div>
                                <div className='item'>
                                        <img src={work_img} alt='work' />
                                        <h5>Work Ethic</h5>
                                </div>
                                </Carousel>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
          )
}
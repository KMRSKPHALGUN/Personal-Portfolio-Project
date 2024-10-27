import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="DREAMSPACES"
              description="DreamSpaces is a comprehensive web application designed for buying,
                            selling, and renting properties, including homes, commercial spaces, and
                            plots. Additionally, it serves as a platform for connecting land developers
                            with landowners to facilitate property development.
                            Features include User Authentication, Property Listings, Search and Filters,
                            Listing Management, Messaging System."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              isBlog={false}
              title="GEMSTONE DATASET"
              description="Worked on Gemstone dataset which contains 1,93,573 rows and
                            11 columns such as carat, color, cut, clarity, depth etc( both
                            numerical and categorical columns ).
                            Made a model using Linear Regression which can predict the price
                            of the given Gemstone with the help of its properties"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="CROP RECOMMENDATION DATASET"
              description="Worked on Crop Recommendation dataset which contains 2,200
                            rows and 8 columns such as temperature, humidity, pH, rainfall
                            etc( all are numerical columns ).
                            Made a model using Decision Tree Regressor which can predict
                            which crop can be more effective for growing with the given
                            weather conditions and amounts of Nitrogen, Phosphorous and
                            Potassium in the soil"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="STOCKS DATASET"
              description="Worked on Stocks dataset which contains more than 6,70,000
                            rows and 8 columns such as date, time, open price, close price etc.
                            Divided the dataset into clusters using K-Means Clustering
                            algorithm to get meaningful insights for investing in stocks."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
